import "./styles.css"
import { MerchantCredentialSet } from "./merchantCredentialSet.js";
import { setCredentials, getCredentials } from "./credentials.js";
import { formValidation } from "./formValidation.js"

const controller = (() => {
    const merchantCredentialsForm = document.querySelector('#merchant-credentials-form');
    const inputs = merchantCredentialsForm.querySelectorAll('input');

    merchantCredentialsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const result = formValidation(inputs);
        result === false ? alert('Fill the form out correctly') : setCredentials(result);
        console.log(getCredentials())
    });
})();