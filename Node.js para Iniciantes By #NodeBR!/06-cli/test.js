const { deepEqual, ok } = require('assert')
const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = { nome: 'Flash', poder: 'Speed', id: 1 }

describe('Suíte de Manipulação de Herois', () => {
    it('Deve pesquisar um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar()
        deepEqual(resultado, expected)
    })

    // it('Deve cadastrar um herói, usando arquivos', async () => {
    //     const expected = DEFAULT_ITEM_CADASTRAR
    //     //
    //     ok(null, expected)
    // })
})