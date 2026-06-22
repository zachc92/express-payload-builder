const generateRequestBody = (market, transactionInfo) => {

    return`
        <CreditCardSale xmlns="https://transaction.elementexpress.com">
            <Credentials>
                <AccountID></AccountID>
                <AccountToken>{{AccountToken}}</AccountToken>
                <AcceptorID>{{AcceptorID}}</AcceptorID>
            </Credentials>
            <Application>
                <ApplicationID>{{ApplicationID}}</ApplicationID>
                <ApplicationName>{{ApplicationName}}</ApplicationName>
                <ApplicationVersion>1.0</ApplicationVersion>
            </Application>
            <Card>
                <CardNumber>4895281000000006</CardNumber>
                <ExpirationMonth>12</ExpirationMonth>
                <ExpirationYear>26</ExpirationYear>
            </Card>
            <Transaction>
                <TransactionAmount>${transactionAmount}</TransactionAmount>
                <MarketCode>3</MarketCode>
                <ReferenceNumber>R123456</ReferenceNumber>
                <TicketNumber>T123456</TicketNumber>
                <PartialApprovedFlag>0</PartialApprovedFlag>
                <DuplicateCheckDisableFlag>1</DuplicateCheckDisableFlag>
            </Transaction>
            <Terminal>
                <CardholderPresentCode>7</CardholderPresentCode>
                <CardInputCode>4</CardInputCode>
                <CardPresentCode>3</CardPresentCode>
                <CVVPresenceCode>0</CVVPresenceCode>
                <MotoECICode>7</MotoECICode> 
                <TerminalCapabilityCode>5</TerminalCapabilityCode>
                <TerminalEnvironmentCode>6</TerminalEnvironmentCode>
                <TerminalType>2</TerminalType>
                <TerminalID>0001</TerminalID>
            </Terminal>
        </CreditCardSale>
        `
};

export { generateRequestBody };