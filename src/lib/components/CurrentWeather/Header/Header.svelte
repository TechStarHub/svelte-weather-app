<script>
    import logo from '$lib/images/weather-app.png'
    import Icon from '@iconify/svelte';
</script>

<header class="backdrop-blur-lg h-[72px] max-h-[75px] w-full">
    <div class="flex justify-between items-center py-4 px-6">
        <div class="flex items-center">
            <img src={logo} alt="logo" class="w-10 h-10" />
            <h1 class="text-2xl font-bold ml-2">Weather App</h1>
        </div>
        <div class="">
            <div class="flex gap-0 items-center border rounded">
                <input type="text" class="hidden md:block px-2 py-1 md:w-[200px] lg:w-[400px] outline-none" placeholder="Search for a city" />
                <button class="hidden md:block px-2 py-1 bg-blue-500 text-white rounded-r ">
                    <Icon icon="tabler:search" class="h-6" />
                </button>
            </div>
        </div>
    </div>
</header>