/* ===== script de animação ====*/

const timeline = gsap.timeline({ defaults: { ease: "power1.out"} });

timeline.to(".slider", { y: '-100%', duration: 0.7 });

/*==== script do mural =====*/

const api_url = 'https://murodl.herokuapp.com/posts';

const Form = document.querySelector('form') //captura a tag form, mas podia usar getelementbyclasname ou id caso quisesse.
const postsMural = document.querySelector('.posts');

console.log(Form)

listAllPosts();

const form = document.querySelector('.post_form')

Form.addEventListener('submit', (event) => {

     
    event.preventDefault(); //impede a página de recarregar automaticamente quando envia o post

    const formData = new FormData(Form) //formdata é uma função presente no js https://developer.mozilla.org/pt-BR/docs/Web/API/FormData/FormData

    const name = formData.get('fname')
    const message = formData.get('fmessage')

    const post = {
        name,
        message
    }


    //fetch para gerar um api que envie um objeto json com os posts para o servidor
    fetch(api_url,{ 

        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'content-type': 'application/json'
        }

    })

        .then(response => response.json()).then(createdPost => {
            
            console.log(createdPost);
            Form.reset();
            listAllPosts(); //recarrega a lista de posts
            
        })     
             
    
})




function listAllPosts(){

    postsMural.innerHTML = ' '; //deixa a div dos posts limpa antes de recarregar


    fetch(api_url).then(response => response.json()).then(posts => {

        posts.reverse()

        posts.forEach(posts => {

            const div = document.createElement('div');

            const header = document.createElement('h2');            
            header.textContent = posts.nome || posts.name;

            const date = document.createElement('p2');
            date.textContent = new Date(posts.created_date);

            const content = document.createElement('p');
            content.textContent = posts.message; //text content evita que alguma injeção de html seja feita, ele transforma o conteúdo em texto e não em interpeta como código.

        
            div.appendChild(header);
            div.appendChild(date);
            div.appendChild(content);
        

            postsMural.appendChild(div)

 
        })

        

    })

    

}

