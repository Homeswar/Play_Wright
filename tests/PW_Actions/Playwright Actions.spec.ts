import {test,expect} from '@playwright/test'
    const baseUrl:string = "https://sdetqa.vercel.app/autoplay";
    test.beforeEach(async({page})=>
    {
        await page.goto(baseUrl);
    });
    test.afterEach(async({page})=>
    {
        await page.close();
    });
    test('Verify text "AutoPlay" is visible',async({page})=>
    {
        await expect(page).toHaveURL(baseUrl);
        await expect(page.getByText("AutoPlay")).toBeVisible();
    });
    test(' 2. Input Fields Validation',async({page})=>
    {
        const fullName = page.getByLabel("Full name");
        const email = page.getByLabel("Email");
        const phone = page.getByLabel("Phone");
        const address = page.getByLabel("Address");

        await expect(fullName).toHaveAttribute('maxlength','15');
        await expect(email).toBeVisible();
        email.fill("tester@example.com");
        await expect(email).toHaveValue("tester@example.com")

        await expect(phone).toBeVisible();
        phone.fill("+91 1234567898");
        await expect(phone).toHaveValue("+91 1234567898");

        await expect(address).toBeVisible();
        address.fill('243\nindiranagar\nbangalore');
        await expect(address).toHaveValue('243/nindiranagar/nbangalore');

    });
    test('3. Radio Button (Gender) Validation',async({page})=>
    {
        //Locate Male & Female radio buttons--Both should be visible
        const male = page.getByLabel('Male',{exact:true})
        const female = page.getByLabel('Female',{exact:true})

        await expect(male).toBeVisible()
        await expect(female).toBeVisible()
        await female.check()
        await expect(female).toBeChecked();
        await expect(male).not.toBeChecked();
    });
    test('4. Checkbox (Days) Validation',async({page})=>
    {
        //Select Sun checkbox
        const sun = page.getByLabel("sun");
        await expect(sun).toBeVisible();
        await sun.check()
        sun.setChecked(true);
        //Select all checkboxes (Mon–Sun)

        const allDays = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];


        for(const day of allDays)
        {
            const checkBox = page.getByLabel(day)
            await checkBox.check()
            await expect(checkBox).toBeChecked();

        }
        //17 Uncheck last 3 (Fri, Sat, Sun) These should be unchecked
        for(const days of ['Fri','Sat','Sun'])
        {
            const checkBox = page.getByLabel(days)
            await checkBox.uncheck();
            await expect(checkBox).not.toBeChecked();
        }
        //18 Toggle all checkboxes Checked → unchecked, unchecked →checked
        for(const day of allDays)
        {
            const checkBox = page.getByLabel(day);
            if (await checkBox.isChecked())
            {
                await checkBox.uncheck();
                await expect(checkBox).not.toBeChecked();
            }
            else
            {
                await checkBox.check();
                await expect(checkBox).toBeChecked();

            }
        }
        //19 Select checkboxes using index (1,3,6 → Tue, Thu,Sun) Only those indexes should be checked
            




        //20 Select checkbox with label "Fri" Friday checkbox should be checked
        const fri = page.getByLabel('fri');
        await expect(fri).toBeVisible();
        fri.check()
        await expect(fri).toBeChecked();


    });

    test('5. Submit Button Validation',async({page})=>
    {
        //21 Locate Submit button Button should be visible
        const submit = page.getByRole('button',{name:"Submit"}).first();
        await expect(submit).toBeVisible();
        //22 Click on Submit button Button should be clickable
        await submit.click();
        await expect(submit).toBeEnabled();
    })
    test('6. Additional (Recommended) Test Cases',async({page})=>
    {
        //24 Leave all fields empty and click Submit Validation message should appear (if implemented)
        const fullName = page.getByLabel('Full name');
        const email = page.getByLabel('Email');
        const phone = page.getByLabel('Phone');
        const address =page.getByLabel('Address');
        const submit = page.getByRole('button',{name:'Submit'}).first();


        fullName.fill('');
        email.fill('');
        phone.fill('');
        address.fill('');
        await submit.click()
        const error = page.locator('#formErrors');
        await expect(error).toBeVisible();
        await expect(error).toContainText("Please fix the following:");

        //25 Enter invalid email format Error should be shown
        await email.fill('XYZ.com');
        await submit.click();
        await expect(error).toBeVisible();
        await expect(error).toContainText ('Please enter a valid email address.');

        //26 Enter more than 15 chars in name Input should be restricted
        await fullName.fill('ASDHC7897HUI789HSJDH');
        await expect(fullName).toHaveValue('ASDHC7897HUI789');
        await expect(fullName).toHaveValue(/.{15}/);
        //Enter alphabets in phone field Should be restricted (if validation exists)
        await phone.fill('678HUKG897');
        await expect(phone).toHaveValue(/^\d+$/);

    });
    
