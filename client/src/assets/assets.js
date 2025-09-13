import user from './user.png'
import heroDiv1 from './hero-div-1.jpg'
import bakery from './bakery.png'
import cereals from './cereals.png'
import colddrinks from './colddrinks.png'
import dairyproducts from './dairyproducts.png'
import fruits from './fruits.png'
import instentfood from './instentfood.png'
import vegetables from './vegetables.png'
import spices from './spices.png'

export const asserts={
        user,
        heroDiv1,
}

export const categories = [
        {
                text: "Fresh Fruits",
                path: "Fruits",
                image: fruits,
                bgColor: "#FFE0E0",
        },
        {
                text: "Vegetables",
                path: "Vegetables",
                image: vegetables,
                bgColor: "#FEF6DA",
        },
        {
                text: "Cold Drinks",
                path: "Drinks",
                image: colddrinks,
                bgColor: "#DAF6FE",
        },
        {
                text: "Instant Food",
                path: "Instant-Food",
                image: instentfood,
                bgColor: "#E0FFE0",
        },
        {
                text: "Dairy Products",
                path: "Dairy",
                image: dairyproducts,
                bgColor: "#F0E0FF",
        },
        {
                text: "Bakery & Breads",
                path: "Bakery",
                image: bakery,
                bgColor: "#FFF0DA",
        },
        {
                text: "Grains & Cereals",
                path: "Grains",
                image: cereals,
                bgColor: "#EFFFF0",
        },
        {
                text: "Spices",
                path: "Spices",
                image: spices,
                bgColor: "#FFF5E0",
        },
];


export default asserts;