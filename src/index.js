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

    if(getCredentials() === null) { showForm(merchantCredentialsForm) }

    merchantCredentialsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const result = merchantFormValidation(merchantInputs);
        if(result.isValid === false){
            renderAlertModal(result.error);
        } else {
            setCredentials(result);
            showForm(transactionPayloadForm);
        }
    });

    transactionPayloadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const marketCode = transactionPayloadForm.querySelector('#market-code');
        const transactionType = transactionPayloadForm.querySelector('#transaction-type');
        const transactionAmount = transactionPayloadForm.querySelector('#transaction-amount');
        const transactionReferenceNumber = transactionPayloadForm.querySelector('#transaction-reference-number');
        const transactionTicketNumber = transactionPayloadForm.querySelector('#transaction-ticket-number');
        const transactionId = transactionPayloadForm.querySelector('#transaction-id');

        const transactionInformation = {
            marketCode: marketCode.value,
            transactionType: transactionType.value,
            transactionAmount: Number(transactionAmount.value).toFixed(2),
            referenceNumber: transactionReferenceNumber.value,
            ticketNumber: transactionTicketNumber.value,
            transactionId: transactionId.value
        };

        const result = transactionFormValidation(transactionAmount.value);
        if(result.isValid === false){
            renderAlertModal(result.error);
        } else if(result.isValid === true) {
            const request = marketCode.value === "ecomm" ? generateRequestBody(ecomm, transactionInformation, getCredentials()) : generateRequestBody(moto, transactionInformation, getCredentials());
            renderTransactionPayloadDisplay(request);
        }
    
    })
})();