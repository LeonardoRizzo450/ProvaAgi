import pagina from "../support/pageobjects/pagina";

describe("acesso o Blog Agi e realizo uma pesquisa", function () {
    it('Com dados existentes', function () {
        const inicial = new pagina
        inicial.acessarSite();
        inicial.clicarLupa();
        inicial.realizarPesquisa('Investimento');
        inicial.validarResultado('Resultados da busca por: Investimento')
    });

    describe("acesso o Blog Agi e realizo uma pesquisa", function () {
        it('Com dados inexistentes', function () {
            const inicial = new pagina
            inicial.acessarSite();
            inicial.clicarLupa();
            inicial.realizarPesquisa('123456');
            inicial.validarResultadonegativo('Nenhum resultado')
        });


})
})