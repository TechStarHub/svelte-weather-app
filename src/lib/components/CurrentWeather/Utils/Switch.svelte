<script>
    export let value = false;
    export let toggleSwitch = () => {
        value = !value;
    }
</script>

<button on:click={toggleSwitch} class="cursor-pointer w-[50px]">
    <label  for="" class="cursor-pointer">
        <input type="checkbox" class="hidden" />
        <div class={`flex items-center justify-between w-9 h-5 bg-gray-300 rounded-full p-1 ${value? 'bg-blue-500':''}`}>
            <div class={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${value?'translate-x-[12px]':''}`}></div>
        </div>
    </label>
</button>