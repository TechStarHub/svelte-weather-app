<script>
	import './../app.css';
	import Header from '$lib/components/CurrentWeather/Header/Header.svelte';
	import video from '$lib/images/partialy-cloudy.mp4';
</script>

<div class="app relative ">
	<div class="fixed w-full top-0 left-0 z-20">
		<Header />
	</div>
	<video class="fixed min-h-full min-w-full max-w-none top-0 left-0 overflow-hidden" autoplay loop muted>
		<source src={video} type="video/mp4" />
	</video>
	<main class="w-full fixed top-0 left-0 h-screen mt-20">
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>


