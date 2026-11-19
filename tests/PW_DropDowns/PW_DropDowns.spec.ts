import {test,expect} from '@playwright/test'

test.beforeEach(async({page})=>
{
    await page.goto('https://sdetqa.vercel.app/autoplay');
});

test.afterEach(async({page})=>
{
    await page.close();
});

test('1. Test Cases – Single Select Dropdown (Country) ',async({page})=>
{
    //Locate Country dropdown Dropdown should be visible
    const countryDD = page.locator('#country');
    await expect(countryDD).toBeVisible();
    //Get default selected value Default should be India (india) 
    await expect(countryDD).toHaveValue("india");
    //Select option using label "USA" Value should change to usa
    await countryDD.selectOption({value:'usa'});
    //Select option using value "uk" Value should change to uk
    await countryDD.selectOption({value:'uk'});
    //Select option using index (3) Value should be germany 
    await countryDD.selectOption({index:3});
    await expect(countryDD).toHaveValue('germany');
    //Select option using value + label (France) Value should be france 
    await countryDD.selectOption({value:'france',label:'France'});
    //Count total dropdown options Count should be 5 
    const allcount = countryDD.locator('option');
    await expect(allcount).toHaveCount(5);
    //Get all option texts List should contain "Germany" 
    const allcountry = await allcount.allTextContents();
    expect(allcountry).toContain('Germany');
    //Print dropdown options All options should be displayed in console
    console.log(allcountry);
       
});
test(' 2. Test Cases – Multi Select Dropdown (Colors) ',async({page})=>
{
    //Locate Colors dropdown Dropdown should be visible 
    const colours = page.locator('#colors');
    await expect(colours).toBeVisible();
    //Get default selected value Default should be blue
    await expect(colours).toHaveValue('blue');
    //Select multiple options using labels (Red, Green, Yellow) All should be selected
    await colours.selectOption([{label:'Red'},{label:'Green'},{label:'Yellow'}]);
    //Select multiple options using values (red, green, yellow) All should be selected
    await colours.selectOption([{value:'red'},{value:'green'},{value:'yellow'}]);
    //Select multiple options using index (0,2,3) Correct options should be selected 
    await colours.selectOption([{index:0},{index:2},{index:3}]);
    //Verify multiple selections Selected values should match input
    expect(colours).toHaveValues(['red','green','yellow']);

});
test(' 3. Test Cases – Sorted Dropdown Validation',async({page})=>
{
    //Locate sorted dropdown options Options should be visible
    const sortedDD = page.locator('#sorted');
    await expect(sortedDD).toBeVisible();
    //Get all dropdown option texts Should return list of values
    const allOption = await sortedDD.allTextContents();
    console.log(allOption);
    //Store original list Original order should be preserved 
    const originalList = allOption;
    //Create sorted copy of list New sorted list should be created 
    const sortedList = [...originalList].sort();
    console.log(sortedList);
    expect(sortedList).toEqual(originalList);
});