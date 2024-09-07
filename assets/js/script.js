// ACTIVACIÓN DE TOOLTIPS

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// ACTIVACIÓN POPOVER

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// CAPTURAR FORMULARIO

const formulario_contacto = document.getElementById("form-contacto")


formulario_contacto.addEventListener("submit", (event) => {
    event.preventDefault()

    let dataForm = new FormData(formulario_contacto)

    let nombre = dataForm.get("nombre")
    let email = dataForm.get("email")
    
    document.getElementById("mensaje-modal").innerText = `Gracias ${nombre} con contactarte conmigo, me pondré en contacto a tu email: ${email}`

    formulario_contacto.reset()

})