import {test,expect} from '@playwright/test'

test('Web Tables',async({page})=>
{
    //Open the CRUD Web Table page. 
    await page.goto("https://sdetqa.vercel.app/autoplay");
    const table = page.locator('table').first();
    const column = table.locator('thead th');
    const row = table.locator('tbody tr');
    //Count number of rows in the table → Expected: 4 
    //Count number of columns in the table → Expected: 5 
    await expect(column).toHaveCount(5);
    await expect(row).toHaveCount(4);
    //Read all data from 2nd row (index 2 → 3rd row including header)
    //  Expected: Keyboard | Electronics | $79 | 0 | Out of Stock
    const thirdRowCels = row.nth(2).locator('td');
    console.log(thirdRowCels.allTextContents());
    await expect(thirdRowCels).toHaveText(['Keyboard','Electronics','$79','0','Out of Stock']);










});