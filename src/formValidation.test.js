import { merchantFormValidation, transactionFormValidation } from "./formValidation.js";

test('Correctly filled out credentials form returns an object', () => {
    expect(merchantFormValidation([
        { id: 'account-id', value: '123456789'  },
        { id: 'account-token', value: '87C63F945D813636C043E46689513EA76CA3A918678F103A79881321ED0D9DA10A021801' },
        { id: 'acceptor-id', value: '123456789' },
        { id: 'application-id', value: '12345' },
        { id: 'application-name', value: 'test' }
    ])).toEqual({
        accountId: '123456789',
        accountToken: '87C63F945D813636C043E46689513EA76CA3A918678F103A79881321ED0D9DA10A021801',
        acceptorId: '123456789',
        applicationId: '12345',
        applicationName: 'test'
    });
});

test('Incorrectly filled out credentials form returns false', () => {
    expect(merchantFormValidation([
        { id: 'account-id', value: null  },
        { id: 'account-token', value: null },
        { id: 'acceptor-id', value: null },
        { id: 'application-id', value: '11' },
        { id: 'application-name', value: 'test' }
    ])).toHaveProperty('isValid', false)
});

test('Correctly filled out transaction payload request form returns true', () => {
    expect(transactionFormValidation('11.00')).toHaveProperty('isValid', true);
});

test('Transaction Payload Request fails when given a non-number input', () => {
    expect(transactionFormValidation('asdf')).toHaveProperty('isValid', false);
});

test('Transaction Payload Request fails when given a negative numer', () => {
    expect(transactionFormValidation('-1')).toHaveProperty('isValid', false);
});

test('Transaction Payload Request fails when given a numer without two decimal places', () => {
    expect(transactionFormValidation('10.0')).toHaveProperty('isValid', false);
});