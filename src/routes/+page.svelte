<script>
	import CurrentWeather from '$lib/components/CurrentWeather/CurrentWeather.svelte';
	export let data;

	function getCurrentLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				return position;
			});
		}
		return null;
	}

	

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


