<script>
    import Switch from "./Utils/Switch.svelte";
    export let data;
    let isCelsius = true;

    const toogleIsCelsius = () =>{
        isCelsius = !isCelsius;
    }

    $: {
        console.log(isCelsius);
    }

</script>

<div class="bg-gray-300/40 backdrop-blur min-h-[200px] w-[270px] sm:w-[400px] md:w-[500px] lg:w-[600px] max-w-[650px] p-6 rounded-xl shadow-lg mt-8 text-slate-900">
    <div class="flex flex-col gap-2 w-full h-full items-center">
        {#if data === null || data === undefined}
            <p class="">
                Error fetching data
            </p>
        {:else}
        <div class="mb-4">
            <h1 class="text-3xl font-bold text-center">{data.location.name}</h1>
            <p class="text-sm text-center">{data.location.region}, {data.location.country}</p>
        </div>
        <div class="bg-blue-500/80 rounded-full flex justify-center items-center">
            <img src={data.current.condition.icon} alt="weather icon" class="w-[100px] h-[100px] aspect-square mx-auto"/>
        </div>
        <div class="w-full">
            <h1 class="text-3xl text-center font-medium mb-2">
                {isCelsius? data.current.temp_c : data.current.temp_f}° {isCelsius? `C` : `F`}
            </h1>
            <p class="text-center text-lg capitalize font-medium">{data.current.condition.text}</p>
            <p class="text-sm text-center mt-2">
                <span class="font-medium text-slate-800">Feels like:</span> {isCelsius? data.current.feelslike_c : data.current.feelslike_f}°{isCelsius? `C` : `F`}
            </p>
        </div>
        <div class="flex justify-end w-full">
            <div class="flex gap-1 items-center font-medium text-sm text-slate-800" >
                <span class="transition ease-in-out duration-300">
                    {isCelsius? `Celsius` : `Fahrenheit`}
                </span>
                <Switch value={!isCelsius} toggleSwitch={toogleIsCelsius} />
            </div>
        </div>
        {/if}
    </div>
</div>

