<script>
    import { formData } from "./store";
    // Subscribe to changes in  the formData store
    $: data = $formData;
</script>

<div
    class="bg-cardFront absolute top-[187px] left-[164px] w-[447px] h-[245px] rounded-[10px] px-8 py-7 text-white"
>
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="47"
            viewBox="0 0 84 47"
            fill="none"
        >
            <ellipse
                cx="23.4783"
                cy="23.5"
                rx="23.4783"
                ry="23.5"
                fill="white"
            />
            <path
                d="M83.5 23.5C83.5 29.0647 78.9932 33.575 73.4348 33.575C67.8764 33.575 63.3696 29.0647 63.3696 23.5C63.3696 17.9353 67.8764 13.425 73.4348 13.425C78.9932 13.425 83.5 17.9353 83.5 23.5Z"
                stroke="white"
            />
        </svg>
    </div>
    <p class="mt-16 text-[28px] font-medium tracking-[3.4px]">
        {data.cardnumber ? data.cardnumber : "0000 0000 0000 0000"}
    </p>
    <div class="mt-6 flex justify-between items-center">
        <p class="text-sm font-medium tracking-[2px] uppercase">
            {data.fullname ? data.fullname : "JANE APPLESEED"}
        </p>
        <p class="text-sm font-medium tracking-[2px] uppercase">
            {data.month ? `${data.month}` : "00"} / {data.year
                ? `${data.year}`
                : "00"}
        </p>
    </div>
</div>
