<script>
  import { formData } from './store';
  import Button from './Button.svelte'
  let data;
    // Subscribe to changes in the formData store
    $: data = $formData;

    // Update the formData store when the form data changes
    function updateFormData() {
        formData.set(data);
    }

    const handleCardNumberInput = (event) => {
        let input = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        let formattedNumber = '';

        // Format the card number as "0000 0000 0000 0000"
        for (let i = 0; i < input.length; i += 4) {
            formattedNumber += input.slice(i, i + 4) + ' ';
        }

        // Remove the trailing space and limit to 16 characters
        formattedNumber = formattedNumber.trim().slice(0, 19);
        event.target.value = formattedNumber;
    };

    // Function to validate fullname (only letters)
    const validateFullname = (event) => {
        event.target.value = event.target.value.replace(/[^A-Za-z ]/g, ''); // Remove non-letter characters, allow one white space
    };

    const validateMonth = (event) => {
        event.target.value = event.target.value.replace(/\D/g, '');
    }

    const validateCVC = (event) => {
        event.target.value = event.target.value.replace(/\D/g, '');
    }

</script>


<div>
    <form on:input={updateFormData}>
        <div class="w-[380px] max-w-full flex flex-col gap-[26px] text-veryDarkViolet">
            <div class="flex flex-col gap-2">
                <label class="text-xs font-medium tracking-[2px] uppercase " for="fullname">Cardholder Name</label>
                <input on:input={validateFullname} bind:value={data.fullname} class="py-[11px] pl-4 border-default rounded-lg solid border-[1px] text-lg leading-[23px] placeholder:text-lg" type="text" id="fullname" placeholder="e.g. Jane Appleseed" required minlength="2" maxlength="30">
                <span></span>
            </div>
            <div class="flex flex-col gap-2">
                <label class="text-xs font-medium tracking-[2px] uppercase " for="cardnumber">Card number</label>
                <input on:input={handleCardNumberInput} bind:value={data.cardnumber} class="py-[11px] pl-4 border-default rounded-lg solid border-[1px] text-lg leading-[23px] placeholder:text-lg" type="text" id="cardnumber" placeholder="e.g. 1234 5678 9123 0000" required minlength="19" maxlength="19">
                <span></span>
            </div>
            <div class="flex gap-5">
                <div class="flex flex-col gap-2">
                    <label class="text-xs font-medium tracking-[2px] uppercase " for="expiration">Exp. Date (MM/YY)</label>
                    <div class="flex gap-[10px]">
                        <input on:input={validateMonth} bind:value={data.month} class="w-20 py-[11px] pl-4 border-default rounded-lg solid border-[1px] text-lg leading-[23px] placeholder:text-lg" type="text" id="expiration" placeholder="MM" required minlength="2" maxlength="2">
                        <input on:input={validateMonth} bind:value={data.year} class="w-20 py-[11px] pl-4 border-default rounded-lg solid border-[1px] text-lg leading-[23px] placeholder:text-lg" type="text" placeholder="YY" required minlength="2" maxlength="2">
                    </div>
                    <span></span>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-xs font-medium tracking-[2px] uppercase " for="cvc">CVC</label>
                    <input on:input={validateCVC} bind:value={data.cvc} class="py-[11px] pl-4 border-default rounded-lg solid border-[1px] text-lg leading-[23px] placeholder:text-lg" type="text" id="cvc" placeholder="e.g. 123" required minlength="3" maxlength="3">
                    <span></span>
                </div>
            </div>
        </div>
        <Button text="Confirm"></Button>
    </form>
</div>

