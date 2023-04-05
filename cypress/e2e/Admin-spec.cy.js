
describe('test new module Admin', () => {
  beforeEach(() => {
    cy.login('Admin','admin123')

  })

  it('Admin should be on displayed', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').should('exist')
  })

  it('should render the correct url when selected', () => {
    cy.AdminClick()
    cy.url().should('contain','/admin/viewSystemUsers')
  })    
////////////////////////////////////////////
///////// System Users 
  it('should render System Users module', () => {
    cy.AdminClick()
    cy.get('.oxd-table-filter').should('have.length', 1)
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain','System Users')
  })
  it('should render four input selectors name', () => {
    cy.AdminClick()
    const users = ['Username','User Role','Employee Name','Status']
    cy.get(':nth-child(-n + 4) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').should('have.length', 4)
    
    cy.get(':nth-child(-n + 4) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').each(($el, index) => {
      cy.wrap($el.text()).should('contain',users[index])
    })
  })

  it('should render 4 input boxes', () => {
    cy.AdminClick()
    cy.get(' div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(-n + 4) > div > div:nth-child(2)').should('have.length', 4)
  })

  it('should render a Reset button', () => {
    cy.AdminClick()
    cy.get('.oxd-button--ghost').should('exist').and('be.enabled')
  })

  it('should render a Search button', () => {
    cy.AdminClick()
    cy.get('.oxd-form-actions > .oxd-button--secondary').should('exist').and('be.enabled')
  })
/////////// Test each input box and button 
 it('search by Username and appeared on Record module', () => {
  cy.AdminClick()
  cy.get(' div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2)').type('Admin')
  cy.get('.oxd-form-actions > .oxd-button--secondary').click()
  cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('contain','Admin')
 }) 

 it('search by User Role', () => {
  cy.AdminClick()
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click({force:true})
  cy.findAllByText('Admin').eq(2).click()
  cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true})
  cy.get('.oxd-table-body > :nth-child(-n + 6) > .oxd-table-row > :nth-child(3) > div').each(($el) => {
    cy.wrap($el).should('contain', 'Admin')
  })
 })

 it.only('search by employee name', () => {
  cy.AdminClick()
 })
})
// task: four input boxes, two buttons(assert)
// create a case on the top box and verify it.  

// display module: records found  