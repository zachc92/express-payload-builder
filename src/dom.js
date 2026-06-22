const showForm = (form) => {
    document.querySelectorAll('form').forEach(form => form.style.display = 'none');
    document.querySelector(`#${form.id}`).style.display = "flex";

    if(form.id === 'transaction-payload-form'){ renderTransactionPayloadForm(); form.reset() }
};

const renderTransactionPayloadForm = () => {
    const transactionType = document.querySelector('#transaction-type');

    transactionType.addEventListener('change', () => {
        console.log(transactionType.value);
        if(transactionType.value === 'authorization-completion' || transactionType.value === 'reversal' || transactionType.value === 'return'){
            document.documentElement.style.setProperty('--dynamic-display', 'flex');
            document.querySelector('#transaction-id').required = true;
        } else {
            document.documentElement.style.setProperty('--dynamic-display', 'none');
        }
    })
}

const renderTransactionPayloadDisplay = (requestDetails) => {
    const payloadDisplay = document.querySelector('#generated-request');
    payloadDisplay.textContent = requestDetails;
}

const renderAlertModal = (message) => {
    const modalContainer = document.querySelector('#alert-modal');
    
    modalContainer.innerHTML = `
        <div class="modal-backdrop">
            <div class="modal-card">
                <h4 class="modal-title">System Alert</h4>
                <p class="modal-message" id="modal-text-target"></p>
                <button type="button" class="modal-close-btn" id="close-modal-btn">Dismiss</button>
            </div>
        </div>
    `;

    modalContainer.querySelector('#modal-text-target').textContent = message;

    modalContainer.style.display = "block";

    modalContainer.querySelector('#close-modal-btn').addEventListener('click', () => {
        closeAlertModal();
    });
};

const closeAlertModal = () => {
    const modalContainer = document.querySelector('#alert-modal');
    modalContainer.innerHTML = "";
    modalContainer.style.display = "none";
};

export  { showForm, renderTransactionPayloadDisplay, renderAlertModal };