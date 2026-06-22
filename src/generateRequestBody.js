const generateRequestBody = (terminalSettings, transactionInfo, credentials) => {
    let followUp = false;
    let xmlTag = '';
    if(transactionInfo.transactionType === 'sale'){ xmlTag = 'CreditCardSale' }
    else if(transactionInfo.transactionType === 'authorization'){ xmlTag = 'CreditCardAuthorization' }
    else if(transactionInfo.transactionType === 'authorization-completion'){ xmlTag = 'CreditCardAuthorizationCompletion'; followUp = true }
    else if(transactionInfo.transactionType === 'reversal'){ xmlTag = 'CreditCardReversal'; followUp = true }
    else if(transactionInfo.transactionType === 'return'){ xmlTag = 'CreditCardReturn'; followUp = true; }
    return`
<${xmlTag} xmlns="https://transaction.elementexpress.com">
    <Credentials>
        <AccountID>${credentials.accountId}</AccountID>
        <AccountToken>Account Token Goes Here</AccountToken>
        <AcceptorID>${credentials.acceptorId}</AcceptorID>
    </Credentials>
    <Application>
        <ApplicationID>${credentials.applicationId}</ApplicationID>
        <ApplicationName>${credentials.applicationName}</ApplicationName>
        <ApplicationVersion>1.0</ApplicationVersion>
    </Application>
    <Card>
        <CardNumber>TEST CARD NUMBER</CardNumber>
        <ExpirationMonth>MM</ExpirationMonth>
        <ExpirationYear>YY</ExpirationYear>
    </Card>
    <Transaction>
        <TransactionAmount>${transactionInfo.transactionAmount}</TransactionAmount>
        <MarketCode>${terminalSettings.marketCode}</MarketCode>
        <ReferenceNumber>${transactionInfo.referenceNumber}</ReferenceNumber>
        <TicketNumber>${transactionInfo.ticketNumber}</TicketNumber>${
          followUp === true 
            ? `\n        <TransactionID>${transactionInfo.transactionId}</TransactionID>` 
            : ''
        }${
          xmlTag === 'CreditCardReversal' 
            ? `\n        <ReversalType>1</ReversalType> <!-- This is a full reversal by default. For partial reversals, use ReversalType '2' -->` 
            : ''
        }
    </Transaction>
    <Terminal>
        <CardholderPresentCode>${terminalSettings.cardholderPresentCode}</CardholderPresentCode>
        <CardInputCode>${terminalSettings.cardInputCode}</CardInputCode>
        <CardPresentCode>${terminalSettings.cardPresentCode}</CardPresentCode>
        <CVVPresenceCode>${terminalSettings.cvvPresenceCode}</CVVPresenceCode>
        <MotoECICode>${terminalSettings.motoEciCode}</MotoECICode> 
        <TerminalCapabilityCode>${terminalSettings.terminalCapabilityCode}</TerminalCapabilityCode>
        <TerminalEnvironmentCode>${terminalSettings.terminalEnvironmentCode}</TerminalEnvironmentCode>
        <TerminalType>${terminalSettings.terminalType}</TerminalType>
        <TerminalID>0001</TerminalID>
    </Terminal>
</${xmlTag}>
`
};

export { generateRequestBody };