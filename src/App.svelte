<script>
    import CardContent from "./CardContent.svelte";
    import Form from "./Form.svelte";
    import Success from "./Success.svelte";

    let showSuccess = false;

    const updateShowSuccess = (value) => {
        showSuccess = value;
    };
</script>

<main>
    <div
        class="max-w-[1440px] bg-white flex items-center gap-[350px] font-grotesk"
    >
        <CardContent />
        {#if !showSuccess}
            <Form {updateShowSuccess} />
        {:else}
            <Success {updateShowSuccess}/>
        {/if}
    </div>
</main>
