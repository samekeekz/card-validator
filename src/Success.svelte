<script>
    import IconSuccess from "./assets/icon-complete.svg";
    export let updateShowSuccess;
</script>

<div
    class="w-[380px] max-w-full flex flex-col justify-center items-center text-veryDarkViolet"
>
    <div class="w-20 h-20 mb-9">
        <img class="max-w-full" src={IconSuccess} alt="completed" />
    </div>
    <h2 class="text-[28px] uppercase tracking-[3.4px] font-medium mb-4">
        THANK YOU!
    </h2>
    <p class="text-lg text-[#8F8694] mb-12">We’ve added your card details</p>
    <button
        on:click={() => updateShowSuccess(false)}
        class="w-full py-[15px] bg-veryDarkViolet rounded-lg text-lg font-medium text-white active:scale-[0.96] transition"
    >
        Continue
    </button>
</div>
