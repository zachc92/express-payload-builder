import "./styles.css"
import { MerchantCredentialSet } from "./merchantCredentialSet.js";
import { setCredentials, getCredentials } from "./credentials.js";
import { merchantFormValidation, transactionFormValidation } from "./formValidation.js";
import { ecomm, moto } from "./terminalProfiles.js";
import { generateRequestBody } from "./generateRequestBody.js";
import { showForm, renderTransactionPayloadDisplay, renderAlertModal } from "./dom.js";

const controller = (() => {
    const merchantCredentialsForm = document.querySelector('#merchant-credentials-form');
    const merchantInputs = merchantCredentialsForm.querySelectorAll('input');
    const transactionPayloadForm = document.querySelector('#transaction-payload-form');

    // if(getCredentials() === null) { showForm(merchantCredentialsForm) }

    showForm(transactionPayloadForm);

    merchantCredentialsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const result = merchantFormValidation(merchantInputs);
        if(result === false){
            renderAlertModal('Please fill out the form correctly!');
        } else {
            setCredentials(result);
            showForm(transactionPayloadForm);
        }
    });

    transactionPayloadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const marketCode = document.querySelector('#market-code');
        const transactionType = document.querySelector('#transaction-type');
        const transactionAmount = document.querySelector('#transaction-amount');
        const transactionReferenceNumber = document.querySelector('#transaction-reference-number');
        const transactionTicketNumber = document.querySelector('#transaction-ticket-number');
        const transactionId = document.querySelector('#transaction-id');

        const transactionInformation = {
            transactionType: transactionType.value,
            transactionAmount: transactionAmount.value,
            transactionReferenceNumber: transactionReferenceNumber.value,
            transactionTicketNumber: transactionTicketNumber.value,
            transactionId: transactionId.value
        };

        transactionFormValidation(transactionInformation);

        const request = marketCode.value === "ecomm" ? generateRequestBody(ecomm, transactionInformation) : generateRequestBody(moto, transactionInformation);

        console.log(request);

        // const request = generateRequestBody(marketCode.value, transactionType.value, transactionAmount.value, transactionReferenceNumber.value, transactionTicketNumber.value, transactionId.value);
    })
})();