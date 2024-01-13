
<script>
    import { formData } from './store';
  // Subscribe to changes in  the formData store
  $: data = $formData;

</script>






<div class="bg-cardBack absolute top-[469px] left-[256px] w-[447px] h-[245px] rounded-[10px] px-8 py-7 text-white">
    <div class="relative">
        <p class="absolute right-6 top-20 bottom-0 text-sm font-medium tracking-[2px] uppercase">
            {data.cvc ? data.cvc : '000'}
        </p>
    </div>
</div>
