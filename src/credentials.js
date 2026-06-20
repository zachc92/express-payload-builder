import { MerchantCredentialSet } from "./merchantCredentialSet.js";

let credentials = null;

const setCredentials = (accountId, accountToken, acceptorId, applicationId, applicationName) => {
    credentials = new MerchantCredentialSet(accountId, accountToken, acceptorId, applicationId, applicationName);
}

const getCredentials = () => {
    return credentials;
};

export { setCredentials, getCredentials };