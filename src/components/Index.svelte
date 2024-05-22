<script>
	import Product from "$components/product/Index.Product.svelte";
	import Process from "$components/process/Index.Process.svelte";
	import { side } from "$stores/misc.js";
</script>

<div class="outer">
	<Product />
</div>

<style>
	.outer {
		width: 100%;
	}
</style>
