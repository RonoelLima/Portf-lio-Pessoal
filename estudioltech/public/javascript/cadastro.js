import {formss} from './service.js'

const form = document.querySelector('.contact_form')

form.addEventListener('submit', (event) => {

    event.preventDefault();

    let name = {
        contato: form.contato.value,
        email: form.email.value,
        projeto: form.email.value,
        mensagem: form.mensagem.value,

    }
    console.log(name)
    formss.add(name).then((docRef) => {
        console.log("document written with ID", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ",error);
    });
})