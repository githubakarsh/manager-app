const url = 'http://localhost:3000';

describe('load the application', () => {
    it('loads the application with spinner', () => {
        cy.visit(url);
    })
});

describe('should display the app name', () => {
    it('should display the app name as Daily Manager', () => {
        cy.title('Daily Manager');
    })
});

