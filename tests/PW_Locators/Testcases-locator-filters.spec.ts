import { test, expect } from '@playwright/test';

    test.beforeEach(async({page})=>
    {
    await page.goto("https://sdetqa.vercel.app/filters_practice");
    });


    test('01 Verify "Add to cart" for Product 2', async ({ page }) => {
        await page.getByRole('listitem').filter({hasText:"Product 2"}).getByRole('button').click();
    });

    test('02 Count items not having "Out ofstock', async ({ page }) => {
    await expect(page.locator(".card").nth(1).getByRole('listitem').filter({hasNotText:'Out of stock'})).toHaveCount(3);  
    });

    test('03 Find items with "In stock', async ({ page }) => {
    await expect(page.locator(".card").nth(1).getByRole('listitem').filter({hasText:'In stock'})).toHaveCount(3);  
    });

    test('04 Find items with "Out of stock', async ({ page }) => {
    await expect(page.locator(".card").nth(1).getByRole('listitem').filter({hasText:'Out of stock'})).toHaveCount(2);  
    });

    test('05 Verify elements using data-testid', async ({ page }) => {
        //locating elements using testid
        const apple = page.getByTestId('apple');
        const banana = page.getByTestId('banana');
        const orange = page.getByTestId('orange');
        const mango = page.getByTestId('mango');
        const kiwi = page.getByTestId('kiwi');
        //verify the visibility
        await expect(apple).toBeVisible();
        await expect(banana).toBeVisible()
        await expect(orange).toBeVisible()
        await expect(mango).toBeVisible()
        await expect(kiwi).toBeVisible()
        //verify the text content
        await expect(apple).toContainText("apple");
        await expect(banana).toContainText("banana");
        await expect(orange).toContainText("orange");
        await expect(mango).toContainText("mango");
        await expect(kiwi).toContainText("kiwi");
     });

        test('06 Count all elements with test ids',async({page})=>
        {
          const testId = page.locator("[data-testid]");
          await expect(testId).toHaveCount(5);

        });
   

    test('07 Find "Say goodbye" button for John',async({page}) =>
    {
        const gudbye = page.getByRole('listitem').filter({hasText:"John"}).getByRole('button',{name:"Say goodbye"});
        await expect(gudbye).toBeVisible();
    });

    test('08  Find "Say hello" button for Mary',async({page})=>
    {
        const mary = page.getByRole('listitem').filter({hasText:"Mary"}).getByRole("button",{name:"Say hello"});
        await expect(mary).toBeVisible();
    })

    test('09  Count "Say hello" buttons for John',async({page})=>
    {
        const sayHelloCount = page.getByRole('listitem').filter({hasText:"John"}).getByRole('button',{name:"Say hello"});
        await expect(sayHelloCount).toHaveCount(1);

    });
    test('10 Count "Say goodbye" buttons for Mary',async({page})=>
    {
        const gydbyeCount = page.getByRole('listitem').filter({hasText:"Mary"}).getByRole('button',{name:"Say goodbye"});
        await expect(gydbyeCount).toHaveCount(1);
    });
    test('11 Count all buttons for John',async({page})=>
    {
        const countOfJohn = page.getByRole('listitem').filter({hasText:"John"});
        await expect(countOfJohn).toHaveCount(2);
    });

    test('12  Find "Subscribe" buttons using multiple conditions',async({page})=>
    {
        const subCount = page.getByRole('button').and(page.getByTitle('Subscribe',{exact:true}))
        await expect(subCount).toHaveCount(2);   
    });
    test('13 Find "Unsubscribe" button',async({page})=>
    {
        const unSub = page.getByRole("button").and(page.getByText("unsubscribe"));
        await expect(unSub).toBeVisible();
        await expect(unSub).toHaveCount(1);
    });

    test('14 Find "details" buttons for done tasks',async({page})=>
    {
        const details = page.getByRole('listitem').filter({hasText:"done"}).getByRole('button',{name:"details"})
        await expect(details).toHaveCount(2);
    });
    test('15 Find "details" button for pending tasks',async({page})=>
    {
        const details = page.getByRole('listitem').filter({hasText:"pending"}).getByRole('button',{name:"details"})
        await expect(details).toHaveCount(1);
    });
    test('16 Count tasks with "done" status',async({page})=>
    {
        const doneCount = page.getByRole('listitem').filter({hasText:"done"})
        await expect(doneCount).toHaveCount(2)
    });

    test('17 Find tasks not marked "done"',async({page})=>
    {  
        const notDone = page.getByRole('listitem').filter({hasNotText:'done'}).getByRole('button',{name:"details"});
        await expect(notDone).toHaveCount(2);
    
    });

    test('18 Verify Product 2 button',async({page})=>
    {
    const prd2 = page.getByRole('listitem').filter({hasText:"Product 2"}).getByRole('button',{name:"Add to cart"});
        await expect(prd2).toHaveText("Add to cart");
    });
    test('19 Verify stock status counts',async({page})=>
    {
        const inStock = page.getByRole('listitem').filter({hasText:'in stock'});
        await expect(inStock).toHaveCount(3);
         const outOfStock = page.getByRole('listitem').filter({hasText:'Out of stock'});
        await expect(outOfStock).toHaveCount(2);

    });
