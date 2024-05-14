<script>
	import { onMount, tick } from "svelte";
	import { csv } from "d3-fetch";
	import { scaleLinear, scaleOrdinal } from "d3-scale";
	import { extent } from "d3-array";
	import { forceSimulation, forceX, forceY, forceCollide } from "d3-force";
	import tippy from "tippy.js";
	import "tippy.js/dist/tippy.css";

	let data = [];
	let containerWidth = 800;
	let containerHeight = 600;
	let chartRef;

	$: margin = { top: 20, right: 20, bottom: 40, left: 40 };
	$: chartWidth = containerWidth - margin.left - margin.right;
	$: chartHeight = containerHeight - margin.top - margin.bottom;

	$: xScale = scaleLinear().domain([0, 1]).range([0, chartWidth]);

	$: yScale = scaleLinear().domain([1, 0]).range([0, chartHeight]);

	$: colorScale = scaleOrdinal()
		.domain(["Positive", "Negative"])
		.range(["#1f77b4", "#d62728"]);

	const processData = (data) => {
		const performers = {};

		data.forEach((d) => {
			const { performer, Sentiment } = d;
			const artists = performer.split(/[,&]/g).map((p) => p.trim());

			artists.forEach((artist) => {
				if (!performers[artist]) {
					performers[artist] = { Positive: 0, Negative: 0 };
				}
				performers[artist][Sentiment]++;
			});
		});

		return Object.entries(performers).map(([artist, scores]) => {
			const total = scores.Positive + scores.Negative;
			return {
				artist,
				Positive: scores.Positive / total,
				Negative: scores.Negative / total,
				x: 0,
				y: 0
			};
		});
	};

	onMount(async () => {
		data = processData(await csv("assets/billboard.csv"));
		updateChartDimensions();
		createForceLayout();
	});

	async function createForceLayout() {
		const simulation = forceSimulation(data)
			.force("x", forceX((d) => xScale(d.Positive)).strength(1))
			.force("y", forceY((d) => yScale(d.Negative)).strength(1))
			.force("collide", forceCollide(8))
			.on("tick", () => {
				data = data.map((d, i) => ({
					...d,
					x: simulation.nodes()[i].x,
					y: simulation.nodes()[i].y
				}));
			});

		await tick();
	}

	function updateChartDimensions() {
		containerWidth = chartRef.clientWidth;
		containerHeight = chartRef.clientHeight;
	}
</script>

<div class="chart-container" bind:this={chartRef}>
	{#if data.length > 0}
		<h3 class="chart-title">Artist Sentiment Scatterplot</h3>
		<svg width={containerWidth} height={containerHeight}>
			<g transform="translate({margin.left}, {margin.top})">
				<g class="x-axis" transform="translate(0, {chartHeight})">
					<text x={chartWidth / 2} y={margin.bottom / 2} text-anchor="middle"
						>Positive</text
					>
				</g>
				<g class="y-axis">
					<text
						x={-margin.left / 2}
						y={chartHeight / 2}
						text-anchor="middle"
						transform="rotate(-90)">Negative</text
					>
				</g>
				{#each data as d}
					<circle
						cx={d.x}
						cy={d.y}
						r="5"
						fill={colorScale(d.Positive > d.Negative ? "Positive" : "Negative")}
						stroke="white"
						stroke-width="1"
						data-tippy-content="{d.artist}<br>Positive: {(
							d.Positive * 100
						).toFixed(1)}%<br>Negative: {(d.Negative * 100).toFixed(1)}%"
						on:mouseover={(event) => {
							tippy(event.target, {
								content: event.target.dataset.tippyContent,
								allowHTML: true,
								interactive: true,
								theme: "light"
							});
						}}
					/>
				{/each}
			</g>
		</svg>
		<p class="chart-description">
			This scatterplot shows the distribution of artists based on the sentiment
			of their songs. Each circle represents an artist, positioned according to
			the proportion of their songs classified as positive or negative.
		</p>
	{/if}
</div>

<style>
	.chart-container {
		width: 100%;
		max-width: 800px;
		height: 600px;
		margin: 0 auto;
	}

	.chart-title {
		font-family: var(--font-sans);
		font-size: 20px;
		margin-bottom: 10px;
		text-align: center;
	}

	.x-axis,
	.y-axis {
		font-family: var(--font-sans);
		font-size: 12px;
	}

	.tick line {
		stroke: var(--text-color);
		stroke-opacity: 0.2;
	}

	.tick text {
		fill: var(--text-color);
	}

	.chart-description {
		font-family: var(--font-serif);
		font-size: 16px;
		line-height: 1.6;
		margin-top: 20px;
		text-align: center;
	}
</style>
