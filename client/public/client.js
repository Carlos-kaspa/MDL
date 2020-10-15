const api_url = 'http://localhost:5000/posts';

const Form = document.querySelector('form') //captura a tag form, mas podia usar getelementbyclasname ou id caso quisesse.

console.log(Form)

Form.addEventListener('submit', (event) => {

    event.preventDefault(); //impede a página de recarregar automaticamente quando envia o post

    const formData = new FormData(Form) //formdata é uma função presente no js https://developer.mozilla.org/pt-BR/docs/Web/API/FormData/FormData

    const name = formData.get('fname')
    const message = formData.get('fmessage')

    const post = {
        name,
        message
    }

    fetch(api_url,{ //fetch para gerar um api que envie um objeto json com os posts para o servidor
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'content-type': 'application/json'
        }
    })

   console.log(post) //debug
})



