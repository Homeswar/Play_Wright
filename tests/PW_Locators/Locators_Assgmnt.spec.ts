import {test,expect} from '@playwright/test'

test('Locator Assignment',async({page}) =>
{
       await page.goto("https://sdetqa.vercel.app/pw-locators-practice-app#");
    //1. getByRole()
    const primButton = page.getByRole('button',{name:"Primary Action"});
    await expect(primButton).toBeVisible();
    primButton.click();

    const toggButton = page.getByRole('button',{name:"Toggle Button"});
    await expect(toggButton).toBeVisible();
    toggButton.click();

    const userName = page.getByRole('textbox',{name:"username"});
    await expect(userName).toBeVisible();
    userName.fill("homeswar_110")

//need to complete remaining


});