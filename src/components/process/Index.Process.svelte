<script>
	import Chat from "$components/process/Chat.svelte";
	import { side } from "$stores/misc.js";
	import copy from "$data/copy.json";

	const goTo = (id) => {
		$side = "right";
		setTimeout(() => {
			const element = document.getElementById(id);
			element.scrollIntoView({ behavior: "smooth" });
		}, 500);
	};
</script>

<div id="process" class:visible={$side === "left"}>
	<article>
		<div><strong>Use left/right arrow keys to move between sides.</strong></div>

		{#each copy.chats as { prompt, response }}
			<Chat {prompt} {response} />
		{/each}

		<div>
			This button takes you to the small multiples. <button
				on:click={() => goTo("emotions-small-multiples")}>go</button
			>
		</div>
	</article>
</div>

<style>
	#process {
		background: var(--color-gray-50);
		color: black;
		width: 90vw;
		opacity: 0.2;
		transition: opacity calc(var(--1s) * 0.4);
	}
	#process.visible {
		opacity: 1;
	}
	article {
		max-width: 800px;
		margin: 3rem auto;
	}
</style>
