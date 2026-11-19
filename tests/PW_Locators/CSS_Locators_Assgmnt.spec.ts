import {test,expect} from '@playwright/test'

    test.beforeEach(async({page})=>
    {
    await page.goto("https://demowebshop.tricentis.com/");
    });
    test.afterEach(async({page})=>
    {
     await  page.close();  
    });

    test('Test 2: Verify Logo Visibility',async({page})=>
    {
        const logoVisibility = page.locator('a[href="/"]');
        await expect(logoVisibility).toBeVisible();

    });
    test('Test 3: Find Products Containing "computer"',async({page})=>
    {
        const compCount = await page.locator('a[href*="computer"]').count()
        console.log(`Count of coumpters are :-- ${compCount}`);
        
    });
    test('Test 4: Print Product Details',async({page})=>
    {
        const prdDetails = await page.locator('h2 > a[href*="computer"]');
        console.log(await prdDetails.first().textContent());
       console.log(await prdDetails.nth(2).textContent());
       console.log(await prdDetails.last().textContent());

    });
    test('Test 5: Find Products Starting with "/build"',async({page})=>
    {
        const build = page.locator('h2 > a[href*="computer"]');
        const count:number = await build.count();
        expect(count).toBeGreaterThan(0);
    });
    test('Test 6: Verify Register Link',async({page})=>
    {
        await expect(page.locator('a[href="/register"]')).toBeVisible();
    });
    test('Test 7: Verify Last Social Media Link',async({page})=>
    {
        const mediaLink = await page.locator('.follow-us ul li:last-child').innerText();
        expect(mediaLink).toBe("Google+")
    });
    test('Test 8: Verify Second Social Media Link',async({page})=>
    {
         const Twitter = await page.locator('.follow-us ul li:nth-child(2)').innerText();
        expect(Twitter).toBe("Twitter")
    });