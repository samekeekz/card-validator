<script>
    import { formData } from "./store";

    export let updateShowSuccess;

    let data;
    // Subscribe to changes in the formData store
    $: data = $formData;

    // Update the formData store when the form data changes
    function updateFormData() {
        formData.set(data);
    }

    const handleCardNumberInput = (event) => {
        let input = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        let formattedNumber = "";

        // Format the card number as "0000 0000 0000 0000"
        for (let i = 0; i < input.length; i += 4) {
            formattedNumber += input.slice(i, i + 4) + " ";
        }

        // Remove the trailing space and limit to 16 characters
        formattedNumber = formattedNumber.trim().slice(0, 19);
        event.target.value = formattedNumber;
    };

    // Function to validate fullname (only letters)
    const formatFullname = (event) => {
        event.target.value = event.target.value.replace(/[^A-Za-z ]/g, ""); // Remove non-letter characters, allow one white space
    };

    const formatMonth = (event) => {
        event.target.value = event.target.value.replace(/\D/g, "");
    };

    const formatCVC = (event) => {
        event.target.value = event.target.value.replace(/\D/g, "");
    };

    // Validation functions for each input field
    const validateFullname = () => {
        console.log(`fullname : ${data.fullname}`);
        // Validation logic for fullname
        // Return true if valid, false otherwise
        return data.fullname.trim().length >= 4;
    };

    const validateCardNumber = () => {
        // Remove spaces from the card number
        const cardNumberWithoutSpaces = data.cardnumber.replace(/\s/g, "");

        // Validation logic for card number
        // Return true if valid, false otherwise
        return /^\d{16}$/.test(cardNumberWithoutSpaces);
    };

    const validateExpirationDate = () => {
        // Validation logic for expiration date
        // Assuming data.month and data.year are numbers

        console.log(`date : ${data.month}, ${data.year}`);
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1; // Month is zero-based

        let fullYear = data.year;
        if (data.year.length === 2) {
            // Assuming a 2-digit year is in the current century
            fullYear = currentYear.toString().slice(0, 2) + data.year;
            console.log(fullYear);
        }

        return (
            /^\d{2}$/.test(data.month) &&
            /^\d{4}$/.test(fullYear) &&
            data.month >= 1 &&
            data.month <= 12 &&
            fullYear >= currentYear &&
            !(fullYear === currentYear && data.month < currentMonth)
        );
    };

    const validateCVC = () => {
        console.log(`cvc : ${data.cvc}`);
        // Validation logic for cvc
        // Return true if valid, false otherwise
        return /^\d{3}$/.test(data.cvc);
    };

    const handleSubmit = () => {
        if (
            !validateFullname() ||
            !validateCardNumber() ||
            !validateExpirationDate() ||
            !validateCVC()
        ) {
            // If any validation fails, do not proceed with form submission
            return;
        }
        // Update the showSuccess variable in the parent component
        updateShowSuccess(true);
    };
</script>

<div>
    <form
        on:input={updateFormData}
        on:submit={(event) => event.preventDefault()}
    >
        <div
            class="w-[380px] max-w-full flex flex-col gap-[26px] text-veryDarkViolet"
        >
            <div class="flex flex-col gap-2">
                <label
                    class="text-xs font-medium tracking-[2px] uppercase"
                    for="fullname">Cardholder Name</label
                >
                <input
                    on:input={formatFullname}
                    bind:value={data.fullname}
                    class="py-[11px] pl-4 border-default rounded-lg solid border-[1px] text-lg leading-[23px] placeholder:text-lg"
                    type="text"
                    id="fullname"
                    placeholder="e.g. Jane Appleseed"
                    required
                    minlength="2"
                    maxlength="30"
                />
                <span></span>
            </div>
            <div class="flex flex-col gap-2">
                <label
                    class="text-xs font-medium tracking-[2px] uppercase"
                    for="cardnumber">Card number</label
                >
                <input
                    on:input={handleCardNumberInput}
                    bind:value={data.cardnumber}
                    class="py-[11px] pl-4 border-default rounded-lg solid border-[1px] text-lg leading-[23px] placeholder:text-lg"
                    type="text"
                    id="cardnumber"
                    placeholder="e.g. 1234 5678 9123 0000"
                    required
                    minlength="19"
                    maxlength="19"
                />
                <span></span>
            </div>
            <div class="flex gap-5">
                <div class="flex flex-col gap-2">
                    <label
                        class="text-xs font-medium tracking-[2px] uppercase"
                        for="expiration">Exp. Date (MM/YY)</label
                    >
                    <div class="flex gap-[10px]">
                        <input
                            on:input={formatMonth}
                            bind:value={data.month}
                            class="w-20 py-[11px] pl-4 border-default rounded-lg solid border-[1px] text-lg leading-[23px] placeholder:text-lg"
                            type="text"
                            id="expiration"
                            placeholder="MM"
                            required
                            minlength="2"
                            maxlength="2"
                        />
                        <input
                            on:input={formatMonth}
                            bind:value={data.year}
                            class="w-20 py-[11px] pl-4 border-default rounded-lg solid border-[1px] text-lg leading-[23px] placeholder:text-lg"
                            type="text"
                            placeholder="YY"
                            required
                            minlength="2"
                            maxlength="2"
                        />
                    </div>
                    <span></span>
                </div>
                <div class="flex flex-col gap-2">
                    <label
                        class="text-xs font-medium tracking-[2px] uppercase"
                        for="cvc">CVC</label
                    >
                    <input
                        on:input={formatCVC}
                        bind:value={data.cvc}
                        class="py-[11px] pl-4 border-default rounded-lg solid border-[1px] text-lg leading-[23px] placeholder:text-lg"
                        type="text"
                        id="cvc"
                        placeholder="e.g. 123"
                        required
                        minlength="3"
                        maxlength="3"
                    />
                    <span></span>
                </div>
            </div>
            <button
                on:click={handleSubmit}
                class="w-full py-[15px] bg-veryDarkViolet rounded-lg text-lg font-medium text-white active:scale-[0.96] transition"
            >
                Confirm
            </button>
        </div>
    </form>
</div>
