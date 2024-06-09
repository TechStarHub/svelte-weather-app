<script>
	import './../app.css';
	import Header from '$lib/components/CurrentWeather/Header/Header.svelte';
</script>

<div class="app relative">
	<div class="fixed w-full top-0 left-0 z-20">
		<Header />
	</div>

	<main class="w-full h-screen mt-20">
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>


