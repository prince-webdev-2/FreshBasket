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
import hero2black from './hero-2-black.png'
import hero2white from './hero-2-white.png'
import apple1 from './apple-1.jpg'
import banana1 from './banana-1.jpg'
import grapes1 from './grapes-1.jpg'
import mango1 from './mango-1.jpg'
import orange1 from './orange-1.jpg'
import potato1 from './potato-1.jpg'
import tomato1 from './tomato-1.jpg'
import onion1 from './onion-1.jpg'
import carrot1 from './carrot-1.jpg'
import cauliflower1 from './cauliflower-1.jpg'
import cocolo1 from './cococola-1.jpg'
import sprite1 from './sprite-1.jpg'
import pepsi1 from './pepsi-1.jpg'
import fanta1 from './fanta-1.jpg'
import maaza1 from './maaza-1.jpg'
import affordable from './affordable.png'
import expressDelivery from './express-delivery.png'
import natural from './natural-ingredients.png'
import trust from './trust.png'
import location from './location-map.png'

export const asserts={
        user,
        heroDiv1,
        hero2black, hero2white,
        location
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

export const whyUs= [
        {
                icon: affordable,
                title: 'Affordable Prices',
                desc:"Quality groceries at unbeatable princes."
        },
        {
                icon: expressDelivery,
                title: 'Fast Delivery',
                desc:"Groceries delivery in under 30 minutes."
        },
        {
                icon: natural,
                title: 'Freshness Guaranteed',
                desc: 'Fresh produce straight from the source'
        },
        {
                icon: trust,
                title: 'Trusted by Thousands',
                desc: 'Loved by 10,000+ happy customers.'
        }
];

export const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { text: 'Home', url: '#' },
      { text: 'Best Sellers', url: '#' },
      { text: 'Offers & Deals', url: '#' },
      { text: 'Contact Us', url: '#' },
      { text: 'FAQs', url: '#' },
    ]
  },
  {
    title: 'Need help?',
    links: [
      { text: 'Delivery information', url: '#' },
      { text: 'Return & Refund Policy', url: '#' },
      { text: 'Payment Methods', url: '#' },
      { text: 'Track your Orders', url: '#' },
      { text: 'Contact Us', url: '#' },
    ]
  },
  {
    title: 'Follow Us',
    links: [
      { text: 'Instagram', url: '#' },
      { text: 'Twitter', url: '#' },
      { text: 'Facebook', url: '#' },
      { text: 'YouTube', url: '#' }
    ]
  }
];

export const dummyProducts = [
  // ================= Fruits =================
  {
    _id: "f1",
    name: "Apple 1kg",
    category: "Fruits",
    price: 120,
    offerPrice: 100,
    image: [apple1],
    description: ["Fresh and juicy", "Rich in fiber", "Boosts immunity"],
    createdAt: "2025-09-13T12:00:00Z",
    updatedAt: "2025-09-13T12:00:00Z",
    inStock: true,
  },
  {
    _id: "f2",
    name: "Banana 1 dozen",
    category: "Fruits",
    price: 100,
    offerPrice: 70,
    image: [banana1],
    description: ["Naturally sweet", "Good for digestion", "Rich in potassium"],
    createdAt: "2025-09-13T12:01:00Z",
    updatedAt: "2025-09-13T12:01:00Z",
    inStock: true,
  },
  {
    _id: "f3",
    name: "Mango 1kg",
    category: "Fruits",
    price: 150,
    offerPrice: 130,
    image: [mango1],
    description: ["King of fruits", "Sweet and juicy", "Rich in Vitamin A"],
    createdAt: "2025-09-13T12:02:00Z",
    updatedAt: "2025-09-13T12:02:00Z",
    inStock: true,
  },
  {
    _id: "f4",
    name: "Orange 1kg",
    category: "Fruits",
    price: 80,
    offerPrice: 70,
    image: [orange1],
    description: ["Citrus fruit", "Rich in Vitamin C", "Juicy and tangy"],
    createdAt: "2025-09-13T12:03:00Z",
    updatedAt: "2025-09-13T12:03:00Z",
    inStock: true,
  },
  {
    _id: "f5",
    name: "Grapes 500g",
    category: "Fruits",
    price: 90,
    offerPrice: 75,
    image: [grapes1],
    description: ["Sweet and seedless", "Rich in antioxidants", "Great snack"],
    createdAt: "2025-09-13T12:04:00Z",
    updatedAt: "2025-09-13T12:04:00Z",
    inStock: true,
  },

  // ================= Vegetables =================
  {
    _id: "v1",
    name: "Potato 1kg",
    category: "Vegetables",
    price: 30,
    offerPrice: 25,
    image: [potato1],
    description: ["Fresh and organic", "Rich in carbs", "Ideal for fries"],
    createdAt: "2025-09-13T12:05:00Z",
    updatedAt: "2025-09-13T12:05:00Z",
    inStock: true,
  },
  {
    _id: "v2",
    name: "Tomato 1kg",
    category: "Vegetables",
    price: 40,
    offerPrice: 35,
    image: [tomato1],
    description: ["Fresh and juicy", "Used in curries", "Rich in Vitamin C"],
    createdAt: "2025-09-13T12:06:00Z",
    updatedAt: "2025-09-13T12:06:00Z",
    inStock: true,
  },
  {
    _id: "v3",
    name: "Onion 1kg",
    category: "Vegetables",
    price: 50,
    offerPrice: 45,
    image: [onion1],
    description: ["Kitchen essential", "Adds flavor", "Fresh and organic"],
    createdAt: "2025-09-13T12:07:00Z",
    updatedAt: "2025-09-13T12:07:00Z",
    inStock: true,
  },
  {
    _id: "v4",
    name: "Carrot 1kg",
    category: "Vegetables",
    price: 60,
    offerPrice: 55,
    image: [carrot1],
    description: ["Rich in Vitamin A", "Good for eyesight", "Crunchy and sweet"],
    createdAt: "2025-09-13T12:08:00Z",
    updatedAt: "2025-09-13T12:08:00Z",
    inStock: true,
  },
  {
    _id: "v5",
    name: "Cauliflower 1pc",
    category: "Vegetables",
    price: 70,
    offerPrice: 60,
    image: [cauliflower1],
    description: ["Fresh and organic", "Good for curries", "Rich in fiber"],
    createdAt: "2025-09-13T12:09:00Z",
    updatedAt: "2025-09-13T12:09:00Z",
    inStock: true,
  },

  // ================= Cold Drinks =================
  {
    _id: "c1",
    name: "Coca Cola 1L",
    category: "Drinks",
    price: 60,
    offerPrice: 55,
    image: [cocolo1],
    description: ["Refreshing taste", "Popular soft drink", "Best served chilled"],
    createdAt: "2025-09-13T12:10:00Z",
    updatedAt: "2025-09-13T12:10:00Z",
    inStock: true,
  },
  {
    _id: "c2",
    name: "Pepsi 1L",
    category: "Drinks",
    price: 60,
    offerPrice: 55,
    image: [pepsi1],
    description: ["Bold taste", "Carbonated drink", "Best for parties"],
    createdAt: "2025-09-13T12:11:00Z",
    updatedAt: "2025-09-13T12:11:00Z",
    inStock: true,
  },
  {
    _id: "c3",
    name: "Sprite 1L",
    category: "Drinks",
    price: 55,
    offerPrice: 50,
    image: [sprite1],
    description: ["Lemon flavor", "Refreshing drink", "Caffeine free"],
    createdAt: "2025-09-13T12:12:00Z",
    updatedAt: "2025-09-13T12:12:00Z",
    inStock: true,
  },
  {
    _id: "c4",
    name: "Fanta 1L",
    category: "Drinks",
    price: 55,
    offerPrice: 50,
    image: [fanta1],
    description: ["Orange flavor", "Refreshing", "Perfect for kids"],
    createdAt: "2025-09-13T12:13:00Z",
    updatedAt: "2025-09-13T12:13:00Z",
    inStock: true,
  },
  {
    _id: "c5",
    name: "Maaza Mango 1L",
    category: "Drinks",
    price: 70,
    offerPrice: 65,
    image: [maaza1],
    description: ["Mango drink", "Rich taste", "Loved by all"],
    createdAt: "2025-09-13T12:14:00Z",
    updatedAt: "2025-09-13T12:14:00Z",
    inStock: true,
  },

  // ================= Instant Food =================
//   {
//     _id: "i1",
//     name: "Maggie Noodles 70g",
//     category: "Instant-Food",
//     price: 15,
//     offerPrice: 12,
//     image: [maggie],
//     description: ["2-min noodles", "Tasty and quick", "Kids favorite"],
//     createdAt: "2025-09-13T12:15:00Z",
//     updatedAt: "2025-09-13T12:15:00Z",
//     inStock: true,
//   },
//   {
//     _id: "i2",
//     name: "Cup Noodles",
//     category: "Instant-Food",
//     price: 45,
//     offerPrice: 40,
//     image: [cupnoodles_image],
//     description: ["Quick meal", "Ready in 3 min", "Different flavors"],
//     createdAt: "2025-09-13T12:16:00Z",
//     updatedAt: "2025-09-13T12:16:00Z",
//     inStock: true,
//   },
//   {
//     _id: "i3",
//     name: "Pasta Pack",
//     category: "Instant-Food",
//     price: 90,
//     offerPrice: 80,
//     image: [pasta_image],
//     description: ["Easy to cook", "Tasty flavors", "Popular Italian food"],
//     createdAt: "2025-09-13T12:17:00Z",
//     updatedAt: "2025-09-13T12:17:00Z",
//     inStock: true,
//   },
//   {
//     _id: "i4",
//     name: "Instant Soup",
//     category: "Instant-Food",
//     price: 50,
//     offerPrice: 45,
//     image: [soup_image],
//     description: ["Quick soup", "Comfort food", "Multiple flavors"],
//     createdAt: "2025-09-13T12:18:00Z",
//     updatedAt: "2025-09-13T12:18:00Z",
//     inStock: true,
//   },
//   {
//     _id: "i5",
//     name: "Ready-to-Eat Curry",
//     category: "Instant-Food",
//     price: 120,
//     offerPrice: 100,
//     image: [curry_image],
//     description: ["Instant meal", "Authentic taste", "Good for travel"],
//     createdAt: "2025-09-13T12:19:00Z",
//     updatedAt: "2025-09-13T12:19:00Z",
//     inStock: true,
//   },

//   // ================= Dairy Products =================
//   {
//     _id: "d1",
//     name: "Amul Milk 1L",
//     category: "Dairy",
//     price: 60,
//     offerPrice: 55,
//     image: [amul_milk_image],
//     description: ["Fresh milk", "Rich in calcium", "High quality"],
//     createdAt: "2025-09-13T12:20:00Z",
//     updatedAt: "2025-09-13T12:20:00Z",
//     inStock: true,
//   },
//   {
//     _id: "d2",
//     name: "Cheese Pack 200g",
//     category: "Dairy",
//     price: 120,
//     offerPrice: 110,
//     image: [cheese_image],
//     description: ["Creamy cheese", "Rich in protein", "Great for sandwiches"],
//     createdAt: "2025-09-13T12:21:00Z",
//     updatedAt: "2025-09-13T12:21:00Z",
//     inStock: true,
//   },
//   {
//     _id: "d3",
//     name: "Curd 500g",
//     category: "Dairy",
//     price: 40,
//     offerPrice: 35,
//     image: [curd_image],
//     description: ["Fresh curd", "Good for digestion", "Rich in probiotics"],
//     createdAt: "2025-09-13T12:22:00Z",
//     updatedAt: "2025-09-13T12:22:00Z",
//     inStock: true,
//   },
//   {
//     _id: "d4",
//     name: "Butter 200g",
//     category: "Dairy",
//     price: 90,
//     offerPrice: 85,
//     image: [butter_image],
//     description: ["Smooth and creamy", "Perfect for baking", "Rich taste"],
//     createdAt: "2025-09-13T12:23:00Z",
//     updatedAt: "2025-09-13T12:23:00Z",
//     inStock: true,
//   },
//   {
//     _id: "d5",
//     name: "Paneer 250g",
//     category: "Dairy",
//     price: 100,
//     offerPrice: 90,
//     image: [paneer_image],
//     description: ["Fresh paneer", "Rich in protein", "Essential for curries"],
//     createdAt: "2025-09-13T12:24:00Z",
//     updatedAt: "2025-09-13T12:24:00Z",
//     inStock: true,
//   },

//   // ================= Bakery & Breads =================
//   {
//     _id: "b1",
//     name: "Brown Bread",
//     category: "Bakery",
//     price: 40,
//     offerPrice: 35,
//     image: [brown_bread_image],
//     description: ["Healthy bread", "Rich in fiber", "Freshly baked"],
//     createdAt: "2025-09-13T12:25:00Z",
//     updatedAt: "2025-09-13T12:25:00Z",
//     inStock: true,
//   },
//   {
//     _id: "b2",
//     name: "Butter Croissant",
//     category: "Bakery",
//     price: 70,
//     offerPrice: 65,
//     image: [butter_croissant_image],
//     description: ["Soft and buttery", "Perfect breakfast", "French delight"],
//     createdAt: "2025-09-13T12:26:00Z",
//     updatedAt: "2025-09-13T12:26:00Z",
//     inStock: true,
//   },
//   {
//     _id: "b3",
//     name: "Chocolate Muffin",
//     category: "Bakery",
//     price: 50,
//     offerPrice: 45,
//     image: [muffin_image],
//     description: ["Soft and fluffy", "Rich chocolate flavor", "Great snack"],
//     createdAt: "2025-09-13T12:27:00Z",
//     updatedAt: "2025-09-13T12:27:00Z",
//     inStock: true,
//   },
//   {
//     _id: "b4",
//     name: "White Bread",
//     category: "Bakery",
//     price: 35,
//     offerPrice: 30,
//     image: [white_bread_image],
//     description: ["Soft bread", "Classic choice", "Freshly baked"],
//     createdAt: "2025-09-13T12:28:00Z",
//     updatedAt: "2025-09-13T12:28:00Z",
//     inStock: true,
//   },
//   {
//     _id: "b5",
//     name: "Garlic Bread",
//     category: "Bakery",
//     price: 80,
//     offerPrice: 70,
//     image: [garlic_bread_image],
//     description: ["Crispy and tasty", "Great with soup", "Baked fresh"],
//     createdAt: "2025-09-13T12:29:00Z",
//     updatedAt: "2025-09-13T12:29:00Z",
//     inStock: true,
//   },

//   // ================= Grains & Cereals =================
//   {
//     _id: "g1",
//     name: "Basmati Rice 1kg",
//     category: "Grains",
//     price: 120,
//     offerPrice: 110,
//     image: [basmati_rice_image],
//     description: ["Premium quality", "Aromatic rice", "Perfect for biryani"],
//     createdAt: "2025-09-13T12:30:00Z",
//     updatedAt: "2025-09-13T12:30:00Z",
//     inStock: true,
//   },
//   {
//     _id: "g2",
//     name: "Brown Rice 1kg",
//     category: "Grains",
//     price: 90,
//     offerPrice: 80,
//     image: [brown_rice_image],
//     description: ["Healthy rice", "Rich in fiber", "Low GI index"],
//     createdAt: "2025-09-13T12:31:00Z",
//     updatedAt: "2025-09-13T12:31:00Z",
//     inStock: true,
//   },
//   {
//     _id: "g3",
//     name: "Barley 1kg",
//     category: "Grains",
//     price: 70,
//     offerPrice: 60,
//     image: [barley_image],
//     description: ["Rich in nutrients", "Good for soups", "Healthy option"],
//     createdAt: "2025-09-13T12:32:00Z",
//     updatedAt: "2025-09-13T12:32:00Z",
//     inStock: true,
//   },
//   {
//     _id: "g4",
//     name: "Wheat Flour 1kg",
//     category: "Grains",
//     price: 50,
//     offerPrice: 45,
//     image: [wheat_flour_image],
//     description: ["Staple food", "Rich in carbs", "Freshly ground"],
//     createdAt: "2025-09-13T12:33:00Z",
//     updatedAt: "2025-09-13T12:33:00Z",
//     inStock: true,
//   },
//   {
//     _id: "g5",
//     name: "Oats 500g",
//     category: "Grains",
//     price: 80,
//     offerPrice: 70,
//     image: [oats_image],
//     description: ["Healthy breakfast", "Rich in fiber", "Good for heart"],
//     createdAt: "2025-09-13T12:34:00Z",
//     updatedAt: "2025-09-13T12:34:00Z",
//     inStock: true,
//   },

//     // ================= Spices =================
//   {
//     _id: "s1",
//     name: "Turmeric Powder 200g",
//     category: "Spices",
//     price: 60,
//     offerPrice: 50,
//     image: [turmeric_image],
//     description: ["Pure turmeric", "Rich in curcumin", "Used in curries & for health"],
//     createdAt: "2025-09-13T12:35:00Z",
//     updatedAt: "2025-09-13T12:35:00Z",
//     inStock: true,
//   },
//   {
//     _id: "s2",
//     name: "Coriander Powder 200g",
//     category: "Spices",
//     price: 55,
//     offerPrice: 48,
//     image: [coriander_powder_image],
//     description: ["Aromatic and mild", "Perfect for gravies", "Adds depth of flavor"],
//     createdAt: "2025-09-13T12:36:00Z",
//     updatedAt: "2025-09-13T12:36:00Z",
//     inStock: true,
//   },
//   {
//     _id: "s3",
//     name: "Red Chili Powder 200g",
//     category: "Spices",
//     price: 50,
//     offerPrice: 45,
//     image: [red_chili_image],
//     description: ["Spicy and vibrant", "Adds heat & color", "Great for curries and marinades"],
//     createdAt: "2025-09-13T12:37:00Z",
//     updatedAt: "2025-09-13T12:37:00Z",
//     inStock: true,
//   },
//   {
//     _id: "s4",
//     name: "Garam Masala 100g",
//     category: "Spices",
//     price: 80,
//     offerPrice: 70,
//     image: [garam_masala_image],
//     description: ["Warm blended spice", "Aromatic finish for dishes", "Traditional mix"],
//     createdAt: "2025-09-13T12:38:00Z",
//     updatedAt: "2025-09-13T12:38:00Z",
//     inStock: true,
//   },
//   {
//     _id: "s5",
//     name: "Cumin Seeds (Jeera) 100g",
//     category: "Spices",
//     price: 40,
//     offerPrice: 35,
//     image: [jeera_image],
//     description: ["Fragrant seeds", "Used for tempering", "Essential Indian spice"],
//     createdAt: "2025-09-13T12:39:00Z",
//     updatedAt: "2025-09-13T12:39:00Z",
//     inStock: true,
//   },
];




export default asserts;