<script>
	import Product from "$components/product/Index.Product.svelte";
	import Process from "$components/process/Index.Process.svelte";
	import { side } from "$stores/misc.js";

	const onKeyDown = (e) => {
		if (e.keyCode === 37) {
			$side = "left";
		} else if (e.keyCode === 39) {
			$side = "right";
		}
	};
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<div class="outer">
	<div
		class="inner"
		style:transform={`translate(${$side === "left" ? 0 : -80}vw, 0)`}
	>
		<Process />
		<Product />
	</div>
</div>

<style>
	.outer {
		overflow: hidden;
	}
	.inner {
		display: flex;
		width: 180vw;
		transition: transform calc(var(--1s) * 0.5);
	}
</style>
