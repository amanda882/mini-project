// add the event listener for the onload even
window.onload = function () {
    // Create an array for category of menu items
    let menu = {
        drinks: ['Coke', 'RedBull', 'Peach Tea', 'Water', 'Sprite', 'Long Island Ice Tea', 'Dirty Shirley'],
        entrees: ['Double Cheese Burger w/ Fries', 'Bacon Cheese burger w/ Mac and Cheese', 'Spicy Chicken Sandwich w/ Curley fries', 'Cobb Salad w/ Ranch Dressing', 'Boneless Wings w/ tater Tots'],
        desserts: ['Fried Cheesecake', 'Chocolate Cake', 'Cheesecake', 'Pumpkin Chocolate Chip Cookie', 'Icecream']
    }

    // declare the html elements that are in html
    let selectMenu = document.getElementById('catagories');
    console.log(`the select menu is ${selectMenu}`);

    selectMenu.onchange = otherMenuList;

    function otherMenuList() {
        let itemList = document.getElementById('dropDownTwo')
        let selectItem = selectMenu.options[selectMenu.selectedIndex].text;
        console.log(selectItem);
        while (itemList.options.length) {
            itemList.remove(0);
        }

        if (selectItem == 'Drinks') {
            for (let i = 0; i < menu.drinks.length; i++) {
                let drinksCatagory = new Option(menu.drinks[i]);
                itemList.appendChild(drinksCatagory);
            }
        }
        else if (selectItem == 'Entrees') {
            for (let i = 0; i < menu.entrees.length; i++) {
                let entreeCatagory = new Option(menu.entrees[i]);
                itemList.appendChild(entreeCatagory);
            }
        }
        else if (selectItem == 'Desserts') {
            for (let i = 0; i < menu.desserts.length; i++) {
                let dessertsCatagory = new Option(menu.desserts[i]);
                itemList.appendChild(dessertsCatagory);
            }
        }
    }
}

// function menuDropDown() {


//     let menuDropDown = menu.length;
//     console.log(menuDropDown);
// for(let i = 0; i < length; i++);
// drop down menu option w/ drinks, entrees, and desserts
// let menuItems = menu.drinks.length;




