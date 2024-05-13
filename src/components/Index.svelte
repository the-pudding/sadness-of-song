<script>
	import Header from "$components/Header.svelte";
	import Introduction from "$components/Introduction.svelte";
	import NegativeSongsChart from "$components/NegativeSongsChart.svelte";
	import EmotionChart from "$components/EmotionChart.svelte";
	import ArtistScatterplot from "$components/ArtistScatterplot.svelte";
	import ArtistRadarChart from "$components/ArtistRadarChart.svelte";
	import Conclusion from "$components/Conclusion.svelte";
	import Methodology from "$components/Methodology.svelte";
	import Footer from "$components/Footer.svelte";
</script>

<main>
	<Header />

	<Introduction />

	<section>
		<h2>The Rise of Negativity</h2>
		<NegativeSongsChart />
		<EmotionChart />
	</section>

	<section>
		<h2>The Artist Landscape</h2>
		<ArtistScatterplot />
		<ArtistRadarChart />
	</section>

	<Conclusion />

	<Methodology />

	<Footer />
</main>

<style>
	main {
		background-color: var(--background-color);
		color: var(--text-color);
		font-family: var(--font-serif);
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	}

	section {
		margin-bottom: 40px;
	}

	h2 {
		color: var(--heading-color);
		font-family: var(--font-sans);
		font-size: 24px;
		margin-bottom: 20px;
	}
</style>
