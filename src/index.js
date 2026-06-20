import "./styles.css"
import { MerchantCredentialSet } from "./merchantCredentialSet.js";
import { setCredentials, getCredentials } from "./credentials.js";

const controller = (() => {
    const merchantCredentialsForm = document.querySelector('#merchant-credentials-form');

    merchantCredentialsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let accountId, accountToken, acceptorId, applicationId, applicationName;
        Array.from(e.target.children).forEach(element => {
            switch(element.id){
                case "account-id":
                    accountId = element.value;
                    break;
                case "account-token":
                    accountToken = element.value;
                    break;
                case "acceptor-id":
                    acceptorId = element.value;
                    break;
                case "application-id":
                    applicationId = element.value;
                    break;
                case "application-name":
                    applicationName = element.value;
                    break;
                default:
                    break;
            }
        })
        setCredentials(accountId, accountToken, acceptorId, applicationId, applicationName);
    })
})();