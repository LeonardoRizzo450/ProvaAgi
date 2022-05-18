const elem = require('../elements/elemento').ELEMENTS;

class pagina {

acessarSite() {
    cy.visit('https://blogdoagi.com.br')
}

clicarLupa() {
    cy.get(elem.btnLupa).should('be.visible')
    cy.get(elem.btnLupa).click()
}

realizarPesquisa(string) {
    cy.get(elem.txtPesquisar).should('be.visible')
    cy.get(elem.txtPesquisar).type(string)
    cy.get(elem.btnPesquisar).click()
}

validarResultado(string){
    cy.get(elem.titleresul).should('have.text', string)
}
validarResultadonegativo(string){
    cy.get(elem.titlenenhum).should('have.text', string)
}

}
export default pagina