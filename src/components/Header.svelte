<script>
	import PuddingLogo from "$components/PuddingLogo.svelte";
</script>

<header>
	<div class="logo-container">
		<a href="https://pudding.cool" target="_blank" rel="noopener noreferrer">
			<PuddingLogo />
		</a>
	</div>
	<h1>The Sadness of Song: How Pop Music is Turning to the Dark Side</h1>
	<p class="subtitle">
		An analysis of the emotional landscape of popular music over the last 60
		years
	</p>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 40px;
		text-align: center;
	}

	.logo-container {
		margin-bottom: 20px;
	}

	h1 {
		color: var(--heading-color);
		font-family: var(--font-sans);
		font-size: 36px;
		margin-bottom: 10px;
	}

	.subtitle {
		color: var(--text-color);
		font-family: var(--font-serif);
		font-size: 18px;
		max-width: 600px;
	}
</style>
