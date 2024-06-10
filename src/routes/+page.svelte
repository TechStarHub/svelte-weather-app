<script>
	import { onMount } from 'svelte';
	import CurrentWeather from '$lib/components/CurrentWeather/CurrentWeather.svelte';

	export let data;
	let currentPosition = {}

	function getCurrentLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				currentPosition = position;
				document.cookie = `lat=${position.coords.latitude}; path=/;expires=${new Date(Date.now() + 86400000).toUTCString()}`;
				document.cookie = `lon=${position.coords.longitude}; path=/;expires=${new Date(Date.now() + 86400000).toUTCString()}`;
				return position;
			});
		}
		return null;
	}

	onMount(() => {
		getCurrentLocation();
	});

	$: console.log(currentPosition);

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex justify-center items-center">
	<div class="">
		<CurrentWeather data = {data.props.data} />
	</div>
</section>


