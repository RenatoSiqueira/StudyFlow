/*
    1. Obter um user
    2. Obter o número de telefone de um user a partir do ID
    3. Obter o endereço do user pelo id
*/

function obterUsuario() {
    setTimeout( function() {
        return {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        }
    }, 1000)
}

function obterTelefone(idUsuario) {
    setTimeout( () => {
        return {
            telefone: 12312123123,
            ddd: 11
        }
    }, 2000)
}

function obterEndereco(idUsuario) {

}

const usuario = obterUsuario()
const telefone = obterTelefone(usuario.id)

console.log('usuario', usuario)
console.log('Telefone', telefone)