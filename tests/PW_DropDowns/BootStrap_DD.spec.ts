import {test,expect} from '@playwright/test'

test('BootStrap Dropdown',async({page})=>
{   //Open the browser and navigate to OrangeHRM Demo Application 
    page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const userName = page.locator('input[name="username"]');
    const password = page.getByPlaceholder('Password');
   
    await userName.fill('Admin');
    await password.fill('admin123');

    await expect(userName).toHaveValue('Admin');
    await expect(password).toHaveValue('admin123');

    const login = page.getByRole('button',{name:' Login '});
    await expect(login).toBeVisible();
    await login.click()
    //Click on PIM menu
    const PIM = page.getByRole('link',{name:'PIM'});
    await PIM.click()
    //Click on Job Title dropdown (hidden/bootstrap dropdown) 
    const jobTitlDD = page.locator('form i').nth(2);
    await expect(jobTitlDD).toBeVisible();
    await jobTitlDD.click();
    //Capture all dropdown options
    const options = page.locator('div[role="listbox"] span');
    await expect(options.first()).toBeVisible();
    //Count number of options
    const optionsCount = await options.count();
    console.log(optionsCount);
    //Get text of all options 
    console.log(await options.allTextContents());
    //Iterate through options 
    for(let i =0;i<optionsCount;i++)
    {
        const opt = options.nth(i);
        const optText = await opt.textContent();
        console.log(optText);
        //Find option "Automaton Tester"

        if(optText == 'Automaton Tester')
        {
            await opt.click();
            break;
            
        }

        
    }
    
   await expect(page.locator('.oxd-select-text-input').nth(2)).toHaveText('Automaton Tester');
    await page.pause();
});