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
		<p>
			Our analysis reveals a clear upward trend in the percentage of songs with
			a predominantly negative emotional sentiment, particularly since the
			mid-2010s. In 2020, for the first time in the history of our dataset,
			negative songs outnumbered positive ones in the year-end top 10.
		</p>

		<p>
			This rise in negativity is not attributable to any single emotion, but
			rather a confluence of increases in sadness, fear, disgust, and anger.
			Joy, while still the most common individual emotion, has been on a
			relative decline.
		</p>

		<EmotionChart />
		<p>
			Interestingly, this shift coincides with the rise of Hip hop/Rap as the
			dominant genre in popular music, overtaking the more traditionally upbeat
			Pop. Hip hop songs, on average, tend to have a much higher proportion of
			negative emotions compared to other genres.
		</p>
		<p>
			But this is not to say that negativity is confined to Hip hop. Across the
			board, from Pop to Rock to R&B, songs with darker themes have been on the
			ascent. It seems to be a cross-genre zeitgeist, a pervasive mood in the
			music of our times.
		</p>
	</section>

	<section>
		<h2>The Artist Landscape</h2>
		<p>
			Of course, behind every song is an artist, and each artist has their own
			distinctive emotional style or "fingerprint." Some, like Billie Eilish or
			Juice WRLD, are known for their consistently dark and moody lyrics, while
			others, like Ariana Grande or BTS, tend towards a more positive, uplifting
			tone.
		</p>
		<ArtistScatterplot />
		<p>
			Explore the scatterplot above to see where your favorite artists fall on
			the spectrum of musical emotion. You can search for specific artists,
			filter by genre and decade, and dive into any artist's full emotional
			profile.
		</p>
		<ArtistRadarChart />
		<p>
			What's fascinating is how an artist's emotional fingerprint can evolve
			over their career, often reflecting their personal growth and struggles.
			Taylor Swift, for example, started out with mostly positive, lovestruck
			anthems, but has increasingly explored darker, more introspective themes
			in her recent work.
		</p>
	</section>

	<section>
		<h2>Conclusion</h2>
		<Conclusion />
	</section>

	<section>
		<h2>Methodology</h2>
		<Methodology />
	</section>

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
