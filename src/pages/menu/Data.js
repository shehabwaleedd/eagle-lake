import sesameEggToast from '../../assets/menu/Snapinsta.app_365458990_817424473216067_4087620759488714421_n_1080.webp';
import mangoPodding from '../../assets/menu/364960912_1234070913857951_759749088496526533_n.webp';
import avvocadoToast from '../../assets/menu/364270819_1644992125980445_904121171288080464_n.webp';
import frenchToast from "../../assets/menu/363883885_798770038573052_4465978458432389113_n.webp"
import blondeCoffee from "../../assets/menu/blonde_coffee.webp"
import cappuccino from "../../assets/menu/Cappucino.webp"
import hotLatte from "../../assets/menu/hot_latte.webp"
import icedLatte from "../../assets/menu/pariwat-pannium-hMVvFEgCveQ-unsplash.webp"
import macchiato from "../../assets/menu/macciato.webp"
import cinnamonCoffe from "../../assets/menu/cinnamon__coffee.webp"
import pinkCocktail from "../../assets/menu/pink_cocktail.webp"
import espresso from "../../assets/menu/espresso.webp"
import icedWhiteChocolateMocha from "../../assets/menu/iced-white-chocolate-mocha.webp"
import chocolateMilkshake from "../../assets/menu/victor-rutka-4FujjkcI40g-unsplash.webp"
import pineappleJuice from "../../assets/menu/yesmore-content-ywS7HzUNjuM-unsplash.webp"
import mangoJuice from "../../assets/menu/mango_fresh_juice.webp"
import cortado from "../../assets/menu/nathan-dumlao-8d8v3YSgIBo-unsplash.webp"


const Data = [
    {
        category: 'Coffee',
        items: [
            {
                name: 'Blonde Coffee',
                image: blondeCoffee,
                description: 'A mild and light coffee made from blonde roasted beans, offering a smooth flavor and delicate aroma.',
                ingredients: ['Blonde roasted coffee beans', ' Hot water'],
                price: "LKR 750"
            },
            {
                name: 'Cappuccino',
                image: cappuccino,
                description: 'A classic espresso-based drink topped with steamed milk and a layer of frothy milk foam.',
                ingredients: ['Espresso', 'Steamed milk', ' Milk foam'],
                price: "LKR 750"
            },
            {
                name: 'Hot Latte',
                image: hotLatte,
                description: 'A comforting beverage made with espresso and steamed milk, perfect for a chilly morning.',
                ingredients: ['Espresso', ' Steamed milk'],
                price: "LKR 750"
            },
            {
                name: 'Iced Latte',
                image: icedLatte,
                description: 'A refreshing iced version of the classic latte, served cold over ice.',
                ingredients: ['Espresso', ' Cold milk', ' Ice'],
                price: "LKR 750"
            },
            {
                name: 'Macchiato',
                image: macchiato,
                description: 'An espresso "stained" with a small amount of milk, creating a strong and bold coffee flavor.',
                ingredients: ['Espresso', ' A touch of milk'],
                price: "LKR 750"
            },
            {
                name: 'Cinnamon Coffee',
                image: cinnamonCoffe,
                description: 'A fragrant coffee infused with the warm and comforting flavor of cinnamon.',
                ingredients: ['Coffee', ' Cinnamon', ' Hot water'],
                price: "LKR 750"
            },
            {
                name: 'Espresso',
                image: espresso,
                description: 'A concentrated shot of bold and rich coffee, the foundation for many coffee drinks.',
                ingredients: ['Espresso'],
                price: "LKR 750"
            },
            {
                name: 'Iced White Chocolate Mocha',
                image: icedWhiteChocolateMocha,
                description: 'A cold and indulgent coffee beverage with white chocolate and espresso, perfect for a sweet treat.',
                ingredients: ['Espresso', 'White chocolate', 'Cold milk', 'Ice'],
                price: "LKR 750"
            },
            {
                name: 'Cortado',
                image: cortado,
                description: 'A balanced espresso drink made with equal parts espresso and steamed milk.',
                ingredients: ['Espresso', 'Steamed milk'],
                price: "LKR 750"
            },
            {
                name: 'Chocolate Milkshake',
                image: chocolateMilkshake,
                description: 'A creamy and rich milkshake made with chocolate and topped with whipped cream.',
                ingredients: ['Chocolate syrup', ' Milk', ' Vanilla ice cream', ' Whipped cream'],
                price: "LKR 750"
            }
        ]
    },
    {
        category: "Breakfast",
        items: [
            {
                name: 'Sesame Egg Toast',
                image: sesameEggToast,
                description: 'A delightful breakfast option featuring toasted bread topped with eggs and sprinkled with sesame seeds.',
                ingredients: ['Eggs', ' Bread', ' Sesame seeds', ' Butter'],
                price: "LKR 750"
            },
            {
                name: 'Mango Podding',
                image: mangoPodding,
                description: 'A fresh and fruity breakfast dish made with creamy mango and a blend of natural flavors.',
                ingredients: ['Mango', ' Greek yogurt', ' Honey'],
                price: "LKR 750"
            },
            {
                name: 'Avocado Toast',
                image: avvocadoToast,
                description: 'A nutritious and satisfying breakfast choice with creamy avocado spread over toasted bread.',
                ingredients: ['Avocado', ' Bread', ' Lemon juice', ' Salt'],
                price: "LKR 750"
            },
            {
                name: 'French Toast',
                image: frenchToast,
                description: 'Classic French toast made with slices of bread soaked in a mixture of eggs and milk, then cooked to perfection.',
                ingredients: ['Bread slices', 'Eggs', ' Milk', ' Vanilla extract', ' Cinnamon', ' Maple syrup'],
                price: "LKR 750"
            },
            {
                name: 'Pineapple Juice',
                image: pineappleJuice,
                description: 'A refreshing and tropical pineapple juice, made from fresh pineapple fruit.',
                ingredients: ['Fresh pineapple', ' Water', ' Sugar'],
                price: "LKR 750"
            },
            {
                name: 'Mango Juice',
                image: mangoJuice,
                description: 'A sweet and tangy mango juice, freshly squeezed from ripe mangoes.',
                ingredients: ['Ripe mangoes', ' Water', ' Sugar'],
                price: "LKR 750"
            },
            {
                name: 'Pink Cocktail',
                image: pinkCocktail,
                description: 'A colorful and vibrant pink cocktail made with a blend of fruity flavors.',
                ingredients: ['Grenadine', ' Pineapple juice', ' Orange juice', ' Gin', ' Ice'],
                price: "LKR 750"
            }
        ]
    }
];

export default Data;
