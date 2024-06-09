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

    const { current:{
        temp_c,
        temp_f,
        feelslike_c,
        feelslike_f,

        condition:{
            text,
            icon
        },
    },
    location:{
        name,
        region,
        country
        } 
    } = data;
</script>

<div class="bg-gray-300/40 backdrop-blur min-h-[200px] w-[80%] sm:w-[400px] md:w-[550px] lg:w-[700px] max-w-[700px] p-4 rounded-xl shadow-lg">
    <div class="flex flex-col gap-2 w-full h-full items-center">
        <div class="">
            <img src={icon} alt="weather icon" class="w-[100px] h-[100px] mx-auto"/>
        </div>
        <div class="w-full">
            <h1 class="text-3xl text-center font-medium mb-2">
                {isCelsius? temp_c : temp_f}° {isCelsius? `C` : `F`}
            </h1>
            <p class="text-center text-lg capitalize font-medium">{text}</p>
            <p class="text-sm text-center mt-2">
                <span class="font-medium">Feels like:</span> {isCelsius? feelslike_c : feelslike_f}°{isCelsius? `C` : `F`}
            </p>
        </div>
        <div class="flex justify-end w-full">
            <div class="flex gap-1 items-center" >
                <span class="transition ease-in-out duration-300">
                    {isCelsius? `Celsius` : `Fahrenheit`}
                </span>
                <Switch value={!isCelsius} toggleSwitch={toogleIsCelsius} />
            </div>
        </div>
    </div>
</div>

