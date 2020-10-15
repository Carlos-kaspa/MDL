dconst express = require('express');
const cors = require('cors'); // pacote para adicionar headers e evitar o erro de cors na comunicação do live erver com o express
const { networkInterfaces } = require('os'); //coisa do cors


const app = express();

app.use(cors()); //invoca o pacote do cors para o express
app.use(express.json());//adiciona a capacidade de interpretar ( separar/parse ) o arquivo json, permitindo a leitura pelo server


app.listen(5000,() => {

    console.log('server is up on port 5000');

})




app.get('/', (req,res) => {

    res.json({
        message: 'olá'
    })

})

function isValid(post){
    //validação se o campo nome e mensagem nao estão em branco ( também é possível usar pacotes npm como o "joi")
    return post.name&&post.name.toString().trim() !== '' && post.message&&post.message.toString().trim() !== ''
    //importante passar para toString() para evitar injeções de código e .trim() para tirar os espaços vazios do início e fim
}

app.post('/posts', (req,res) => {

    if(isValid(req.body)){ //validação para saber se o post tem conteúdo
        const post = {

            nome:req.body.name.toString(),
            message: req.body.message.toString()
        }

        console.log(post)//debug

    }else{
        res.status(777) //mensagem de erro caso não tiver
        res.json({
            message: 'Nome e mensagem são obrigatórios, seu sabichão!'
        })
    }
  

})

