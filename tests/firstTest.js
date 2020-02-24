module.exports={
    'Check if the page is completely loaded'(browser){
        browser.url('http://www.enroutesystems.com');
        browser.expect.element('body').to.be.visible;
        browser.expect.element('head').to.be.not.visible;
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

//    'Looking for what we offer'()

}