const formValidation = (inputs) => {
    let credentials ={ accountId: null, accountToken: null, acceptorId: null, applicationId: null, applicationName: null }
    let isValid = true;

    for (const element of inputs) {
        switch (element.id) {
            case "account-id":
                if (Number.isNaN(Number(element.value))) {
                    alert('Account ID must be a number between 7 and 10 digits.');
                    isValid = false;
                    break;
                }
                credentials.accountId = Number(element.value);
                break;
                
            case "account-token":
                credentials.accountToken = element.value;
                break;
                
            case "acceptor-id":
                if (Number.isNaN(Number(element.value))) {
                    alert('Acceptor ID must be a number between 9 and 50 digits.');
                    break;
                }
                credentials.acceptorId = Number(element.value);
                break;
                
            case "application-id":
                if (Number.isNaN(Number(element.value))) {
                    alert('Application ID must be a number between 7 and 10 digits.');
                    isValid = false;
                    break;
                }
                credentials.applicationId = Number(element.value);
                break;
                
            case "application-name":
                credentials.applicationName = element.value;
                break;
                
            default:
                break;
        }

        if (!isValid) {
            break;
        }
    }

    if (isValid && !Object.values(credentials).some(value => value === null)) {
        for(const input of inputs){
            input.value = '';
        }
        return credentials;
    } else {
        return false;
    }
};

export { formValidation };