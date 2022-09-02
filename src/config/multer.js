// Multer: é um middleware node.js para manipulação multipart/form-data, que é usado principalmente para fazer upload de arquivos;
const multer = require('multer');
//O módulo Crypto é um dos módulos de terceiros que ajudam a criptografar, descriptografar ou hash quaisquer dados. que queremos proteger de fora do mundo.
const crypto = require('crypto');

//o resolve serve para retornar o caminho da MINHA máquina e o extname  diz qual o tipo de arquivo
const { resolve, extname } = require('path');
const { update } = require('../app/services/UpdateLegendaryService');

const multerConfig = multer.diskStorage(
    // o diskstorage salva o arquivo dentro da pasta, não apenas em memória
    // ele tem 2 parametros: destination, que é onde quero salvar o arquivo 
    // o resolve diz  partir de onde eu quero alterar. Dir name é a pasta corrente do projeto, no caso desse código, a pasta config
    // ..  volta a pasta para a raiz e direciona pra outra
    //file name define o padrão de nome que o arquivo terá
    // é uma função, que tem um request, um file e um callback
    {
        destination: resolve(__dirname, '..', 'uploads'),
        filename: (request, arquivo, callback) => {
            // segurança para a aplicação, o random vai criar um codigo hexadecimal para segurança do arquivo, principalmente arquivos sensiveis(fotos)
            crypto.randomBytes(16, (erro, valor) => {
                if (erro) {
                    callback(erro)
                }
                return callback(null, valor.toString('hex') + extname(arquivo.originalname)) // retorna o nome + extensão do arquivo xxxx.pdf
            })
        }
    }

); 
module.exports = multerConfig;