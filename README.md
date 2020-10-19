# MDL
Muro das Lamentações (uma espécie de message board)

Message board **fullstack** que utiliza mongoDB e API própria para enviar em formato JSON.

*Feito para propósitos de estudo de **node**.*



### Como funciona:

- **Client** recebe informações inseridas através do form, transforma informações em um objeto JSON e envia para o servidor através da API própria
- **Server** recebe o objeto JSON, valida a integridade das informações (para evitar strings nulas) e armazena na coleção de posts no banco de dados, em seguida retorna o objeto com todas as postagens
- **Client** recebe o objeto com todas as postagens e cria um box para cada postagem com tags adequadas
- **Client** atualiza a página e insere a postagem na ordem decrescente de data de postagem.


### funcionalidades extras:

- Client renderiza uma cor aleatória a cada postagem
- Intercala o preenchimento do backgroundColor de cada post através de CSS
