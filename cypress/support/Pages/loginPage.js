class LoginPage {

  elements={
    url:() => cy.visit('https://the-internet.herokuapp.com/login'),
    username:() => cy.get('#username'),
    password:() => cy.get('#password'),
    submit:() => cy.get('button[type="submit"]'),
    flashmessage:() => cy.get('#flash')
  }


  visit() {
    this.elements.url();
  }

  fillUsername(username) {
    this.elements.username().clear().type(username);
  }

  fillPassword(password) {
    this.elements.password().clear().type(password);
  }

  submit() {
    this.elements.submit().click();
  }

  getFlashMessage() {
    return this.elements.flashmessage();
  }
}

export default new LoginPage();
