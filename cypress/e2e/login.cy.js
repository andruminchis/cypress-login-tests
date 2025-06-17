import loginPage from '../support/Pages/loginPage';

//  Test suite for login functionality
describe('Login Tests - The Internet Herokuapp', () => {
  //  Before each test, visit the login page
  beforeEach(() => {
    loginPage.visit();
  });

 
  // ✅ Test: Successful login with valid credentials
  it('should login successfully with valid credentials', () => {
    loginPage.fillUsername('tomsmith');
    loginPage.fillPassword('SuperSecretPassword!');
    loginPage.submit();

    //  Verify success message appears
    loginPage.getFlashMessage().should('contain', 'You logged into a secure area!');
  });

  
  // ❌ Test: Failed login with invalid username
  it('should fail login with invalid username', () => {
    loginPage.fillUsername('wronguser');
    loginPage.fillPassword('SuperSecretPassword!');
    loginPage.submit();

    //  Verify error message for invalid username
    loginPage.getFlashMessage().should('contain', 'Your username is invalid!');
  });

  
  // ❌ Test: Failed login with invalid password
  it('should fail login with invalid password', () => {
    loginPage.fillUsername('tomsmith');
    loginPage.fillPassword('WrongPassword');
    loginPage.submit();

    //  Verify error message for invalid password
    loginPage.getFlashMessage().should('contain', 'Your password is invalid!');
  });

  
  // 🔍 Verification: error message displays properly
  it('should display error message on failed login', () => {
    loginPage.fillUsername('wronguser');
    loginPage.fillPassword('wrongpass');
    loginPage.submit();

    //  Message must be visible and contain error
    loginPage.getFlashMessage().should('be.visible')
      .and('contain', 'Your username is invalid!');
  });
});