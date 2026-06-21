import { formValidation } from "./formValidation.js";

test('Correctly filled out form returns an object', () => {
    expect(formValidation([
        { id: 'account-id', value: '123456789'  },
        { id: 'account-token', value: '87C63F945D813636C043E46689513EA76CA3A918678F103A79881321ED0D9DA10A021801' },
        { id: 'acceptor-id', value: '123456789' },
        { id: 'application-id', value: '12345' },
        { id: 'application-name', value: 'test' }
    ])).toEqual({
        accountId: 123456789,
        accountToken: '87C63F945D813636C043E46689513EA76CA3A918678F103A79881321ED0D9DA10A021801',
        acceptorId: 123456789,
        applicationId: 12345,
        applicationName: 'test'
    });
});

test('Incorrectly filled out form returns false', () => {
    expect(formValidation([
        { id: 'account-id', value: null  },
        { id: 'account-token', value: null },
        { id: 'acceptor-id', value: null },
        { id: 'application-id', value: '11' },
        { id: 'application-name', value: 'test' }
    ])).toBe(false)
});