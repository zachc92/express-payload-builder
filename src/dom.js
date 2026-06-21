const showForm = (form) => {
    document.querySelector(`#${form.id}`).style.display = "flex";
};

export  { showForm };