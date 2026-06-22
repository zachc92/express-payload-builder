const merchantFormValidation = (inputs) => {
    let credentials ={ accountId: null, accountToken: null, acceptorId: null, applicationId: null, applicationName: null }
    let isValid = true;
    let message = '';

    for (const element of inputs) {
        switch (element.id) {
            case "account-id":
                if (Number.isNaN(Number(element.value))) {
                    message = 'Account ID must be a number between 7 and 10 digits';
                    isValid = false;
                    break;
                }
                credentials.accountId = element.value;
                break;
                
            case "account-token":
                credentials.accountToken = element.value;
                break;
                
            case "acceptor-id":
                if (Number.isNaN(Number(element.value))) {
                    message = 'Acceptor ID must be a number between 9 and 50 digits.';
                    isValid = false;
                    break;
                }
                credentials.acceptorId = element.value;
                break;
            case "application-id":
                if (Number.isNaN(Number(element.value))) {
                    message = 'Application ID must be a number between 7 and 10 digits.';
                    isValid = false;
                    break;
                }
                credentials.applicationId = element.value;
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
        return { isValid: false, error: message};
    }
};

const transactionFormValidation = (amount) => {
    const amountRegex = /^\d+\.\d{2}$/;
    if(!amountRegex.test(amount) || parseFloat(amount) <= 0){
        return { isValid: false, error: 'Please enter a valid transaction amount, including two decimal places (E.g., 32.01)' };
    } else {
        return { isValid: true };
    }
};

export { merchantFormValidation, transactionFormValidation };