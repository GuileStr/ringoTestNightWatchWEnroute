module.exports={
    'Check if the page is completely loaded'(browser){
        browser.url('http://www.enroutesystems.com');
        browser.expect.element('body').to.be.visible;
        browser.expect.element('head').to.be.not.visible;
    },
    'Testing tabs with their desc'(browser){
        //Checking if they are actually opened
        browser
        .verify.visible('div[data-title="QA & Testing"]')//Solo este debe estar activo en esta etapa del test. (Por el select default)
        .verify.not.visible('div[data-title="Software Development"]')//Este debe estar oculto. Por lo que debe marcar palomita en el not visible
        .verify.not.visible('div[data-title="Inventory Management"]')//Este debe estar oculto. Por lo que debe marcar palomita en el not visible
        .verify.not.visible('div[data-title="Data Management"]')//Este debe estar oculto. Por lo que debe marcar palomita en el not visible
        .verify.not.visible('div[data-title="Application Maintenance"]');//Este debe estar oculto. Por lo que debe marcar palomita en el not visible
        //TESTING IF QA TAB WORKS
        browser
        .assert.visible('a[href="#qa-and-testing"]')
        .click('a[href="#qa-and-testing"]')
        .assert.visible('div[data-title="QA & Testing"]');
        //TESTING IF SW DEVELOPMENT TAB WORKS
        browser
        .assert.visible('a[href="#software-development"]')
        .click('a[href="#software-development"]')
        .assert.visible('div[data-title="Software Development"]');
        //TESTING IF INVENTORY MANAGMENT TAB WORKS
        browser
        .assert.visible('a[href="#inventory-management"]')
        .click('a[href="#inventory-management"]')
        .assert.visible('div[data-title="Inventory Management"]');
        //TESTING IF DATA MANAGEMENT TAB WORKS
        browser
        .assert.visible('a[href="#data-management"]')
        .click('a[href="#data-management"]')
        .assert.visible('div[data-title="Data Management"]');
        //TESTING IF APPLICATION MAINTANCE TAB WORKS
        browser
        .assert.visible('a[href="#application-maintenance"]')
        .click('a[href="#application-maintenance"]')
        .assert.visible('div[data-title="Application Maintenance"]');
    },
    'Using Contact Us'(browser){
        browser.url('http://www.enroutesystems.com/contact/');
        browser.expect.element('body').to.be.visible;
        browser.expect.element('head').to.be.not.visible;
        browser.waitForElementVisible('body');
        browser

        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'This is an example name')

        .assert.visible('input[type=email]')
        .setValue('input[type=email]', 'ricardo_test@gmail.com')

        .assert.visible('input[name=your-subject]')
        .setValue('input[name=your-subject]', 'Automation Assignment')
        
        
        .assert.visible('textarea')
        .setValue('textarea', 'This is an automation message created for the Automation Assignment')

        .assert.visible('input[type=submit]')
        .end();
    }

}