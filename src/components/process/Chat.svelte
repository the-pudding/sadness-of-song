<script>
	import snarkdown from "snarkdown";

	export let prompt;
	export let response;
</script>

<div class="chat">
	<details class="prompt">
		<summary>Prompt 👩🏽‍💻</summary>
		{#each prompt as { type, value }}
			<div>{value}</div>
		{/each}
	</details>

	<details class="response">
		<summary>Response 🤖</summary>
		{#each response as { type, value }}
			<div>{@html snarkdown(value)}</div>
		{/each}
	</details>
</div>

<style>
	.chat {
		border: 2px solid var(--color-gray-600);
		border-radius: 10px;
		margin: 2rem 0;
	}
	details {
		padding: 1rem;
	}
	.prompt {
		background: var(--color-gray-100);
		border-radius: 10px 10px 0 0;
	}
	.response {
		font-family: var(--font-mono);
		background: var(--color-gray-300);
		border-radius: 0 0 10px 10px;
	}
</style>
