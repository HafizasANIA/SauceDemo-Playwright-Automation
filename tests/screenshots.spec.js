
const { test, expect } = require('../fixtures/testFixtures');

test('TC02 - Attach Screenshot to HTML Report', async ({ loggedInPage }, testInfo) => {

    // Step 1: Verify inventory page
    await expect(loggedInPage).toHaveURL(/inventory.html/);

    // Step 2: Capture screenshot
    const screenshot = await loggedInPage.screenshot({
        fullPage: true
    });

    // Step 3: Attach screenshot to HTML Report
    await testInfo.attach('Inventory Page Screenshot', {
        body: screenshot,
        contentType: 'image/png'
    });

    console.log('Screenshot attached successfully');

});
