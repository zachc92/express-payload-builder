export class MerchantCredentialSet {
    constructor(credentials){
        this.accountId = credentials.accountId,
        this.accountToken = credentials.accountToken,
        this.acceptorId = credentials.acceptorId,
        this.applicationId = credentials.applicationId,
        this.applicationName = credentials.applicationName
    }
};