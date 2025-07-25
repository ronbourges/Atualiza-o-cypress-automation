


describe('Orange HRM test', () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton:  "[type='submit']",
    sectionTitleTopBar:'.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }

   const userData={
    "userSuccess":{
      "username": "Admin",
      "password": "admin123"
    },
    "userFail": {
    "username": "test",
    "password": "test"

    }
  }
  
  it('Login success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username),
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password),
    cy.get(selectorsList.loginButton).click(),
    cy.location('pathname').should('equal','/web/index.php/dashboard/index'),
    cy.get(selectorsList.dashboardGrid)
  })
  it('Login fail ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username),
    cy.get(selectorsList.passwordField).type(userData.userFail.password),
    cy.get(selectorsList.loginButton).click(),
    cy.get(selectorsList.wrongCredentialAlert)

     })

})
