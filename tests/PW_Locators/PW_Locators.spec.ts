import {test, expect} from '@playWright/test'

test('Locators',async ({page}) => {

    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app");
// getByRole Role locators include buttons, checkboxes, headings, links, lists, tables, and many more and follow W3C specifications for ARIA role, ARIA attributes and accessible name.
    await expect(page.getByRole("link",{name:'Projects'})).toBeVisible();
    const signIn = page.getByRole("button",{name:"Sign In"});
    await expect(signIn).toBeVisible();
    await signIn.click();
//getByText()
//Find an element by the text it contains. You can match by a substring, exact string, or a regular expression when using page.getByText().

    await expect(page.getByText('Welcome, John! 👋')).toBeVisible();

//page.getByPlaceholder().
//Most form controls usually have dedicated labels that could be conveniently used to interact with the form. In this case, you can locate the control by its associated label using page.getByLabel().
    const email = page.getByLabel("Email Address");
    await expect(email).toBeVisible();
    email.fill("tester@gmail.com");

//getByPlaceholder()
//Inputs may have a placeholder attribute to hint to the user what value should be entered. You can locate such an input using page.getByPlaceholder().

    const search = page.getByPlaceholder("Search tests...");
    await expect(search).toBeVisible();
    search.fill("abcd");

//getByAltText()
//All images should have an alt attribute that describes the image. You can locate an image based on the text alternative using page.getByAltText().
    const altText = page.getByAltText("Red apple fruit");
    await expect(altText).toBeVisible();

//getByTitle()
//Locate an element with a matching title attribute using page.getByTitle().
    const title = page.getByTitle("Total test runs");
    await expect(title).toBeVisible();
    await expect(title).toHaveText("4,821Total Runs")

//getByTestId()
//Testing by test ids is the most resilient way of testing as even if your text or role of the attribute changes, the test will still pass. QA's and developers should define explicit test ids 
// and query them with page.getByTestId(). However testing by test ids is not user facing. If the role or text value is important to you then consider using user facing locators such as role and text locators.
    const testId = page.getByTestId("search-input");
    await expect(testId).toBeVisible();
    testId.fill("defgh...")
    page.getByTestId("add-to-cart-pro").click();

//
//





});