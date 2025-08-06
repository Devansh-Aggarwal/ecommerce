import p_img1 from './p_img1.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img2_4 from './p_img2_4.png'
import p_img3 from './p_img3.png'
import p_img3_1 from './p_img3_1.png'
import p_img4 from './p_img4.png'
import p_img4_1 from './p_img4_1.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img6_1 from './p_img6_1.png'
import p_img7 from './p_img7.png'
import p_img7_1 from './p_img7_1.png'
import p_img8 from './p_img8.png'
import p_img8_1 from './p_img8_1.png'
import p_img9 from './p_img9.png'
import p_img9_1 from './p_img9_1.png'
import p_img10 from './p_img10.png'
import p_img10_1 from './p_img10_1.png'
import p_img10_2 from './p_img10_2.png'
import p_img11 from './p_img11.png'
import p_img12 from './p_img12.png'
import p_img12_1 from './p_img12_1.png'
import p_img13 from './p_img13.png'
import p_img13_1 from './p_img13_1.png'
import p_img14 from './p_img14.png'
import p_img15 from './p_img15.png'
import p_img16 from './p_img16.png'
import p_img16_1 from './p_img16_1.png'
import p_img17 from './p_img17.png'
import p_img17_1 from './p_img17_1.png'
import p_img18 from './p_img18.png'
import p_img19 from './p_img19.png'
import p_img20 from './p_img20.png'
import p_img21 from './p_img21.png'
import p_img22 from './p_img22.png'
import p_img23 from './p_img23.png'
/*import p_img24 from './p_img24.png'
import p_img25 from './p_img25.png'
import p_img26 from './p_img26.png'
import p_img27 from './p_img27.png'
import p_img28 from './p_img28.png'
import p_img29 from './p_img29.png'
import p_img30 from './p_img30.png'
import p_img31 from './p_img31.png'
import p_img32 from './p_img32.png'
import p_img33 from './p_img33.png'
import p_img34 from './p_img34.png'
import p_img35 from './p_img35.png'
import p_img36 from './p_img36.png'
import p_img37 from './p_img37.png'
import p_img38 from './p_img38.png'
import p_img39 from './p_img39.png'
import p_img40 from './p_img40.png'
import p_img41 from './p_img41.png'
import p_img42 from './p_img42.png'
import p_img43 from './p_img43.png'
import p_img44 from './p_img44.png'
import p_img45 from './p_img45.png'
import p_img46 from './p_img46.png'
import p_img47 from './p_img47.png'
import p_img48 from './p_img48.png'
import p_img49 from './p_img49.png'
import p_img50 from './p_img50.png'
import p_img51 from './p_img51.png'
import p_img52 from './p_img52.png'
*/

import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "Walnut Kernels(Akhrot)",
        description: "Walnut Kernels (Akhrot) are premium quality nuts packed with rich flavor and a satisfying crunch. Naturally high in omega-3 fatty acids and antioxidants, they’re perfect for snacking, baking, or enhancing your daily nutrition. Enjoy these wholesome, preservative-free kernels for a healthy boost any time of day.",
        price: 750,
        image: [p_img10,p_img10_1,p_img10_2],
        category: "Nuts & Dates",
        subCategory: "Jumbo Packs",
        sizes: ["500gm"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaab",
        name: "Cashews(Kaju) - W180",
        description: "Cashews are low in sugar and rich in fiber, heart-healthy fats, and plant protein. They’re also a good source of copper, magnesium, and manganese — nutrients important for energy production, brain health, immunity, and bone health.",
        price: 900,
        image: [p_img4,p_img4_1],
        category: "Nuts & Dates",
        subCategory: "Snacks & Breakfast",
        sizes: ["500gm"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Almonds Kernels(Badam)",
        description: "Almond refers to the edible seed of the Prunus dulcis tree, which is rich in proteins and commonly consumed as a nutritious snack or ingredient in various food products.",
        price: 1200,
        image: [p_img3,p_img3_1],
        category: "Nuts & Dates",
        subCategory: "Jumbo Packs",
        sizes: ["1kg"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Pistachio Inshell(Pista)",
        description: "Pistachio Kernels are nutritious, premium nuts known for their rich flavor and vibrant green color. They are naturally high in protein, healthy fats, and antioxidants, making them an ideal choice for snacking, baking, or garnishing desserts. Enjoy these preservative-free kernels to add a wholesome, delicious touch to your diet.",
        price: 1000,
        image: [p_img6,p_img6_1],
        category: "Nuts & Dates",
        subCategory: "Snacks & Breakfast",
        sizes: ["500gm"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Wet Dates(Khajoor)",
        description: "Wet Dates (Khajoor) are soft, naturally sweet, and full of energy—making them a delicious and healthy snack choice. Rich in fiber, potassium, iron, and antioxidants, wet dates support heart health, digestion, and immunity.",
        price: 600,
        image: [p_img7,p_img7_1],
        category: "Nuts & Dates",
        subCategory: "Snacks & Breakfast",
        sizes: ["500gm"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaaf",
        name: "Dry Dates(Chuara)",
        description: "Chuara or Sukha Khajur, are nutrient-dense dried fruits that offer natural sweetness and chewy texture. They are an excellent source of dietary fiber, vitamins, and minerals like iron, calcium, and magnesium—making them a wholesome snack and natural energy booster.",
        price: 500,
        image: [p_img8,p_img8_1],
        category: "Nuts & Dates",
        subCategory: "Snacks & Breakfast",
        sizes: ["500gm"],
        date: 1716623423448,
        bestseller: false
    },
    {
        _id: "aaaag",
        name: "Hazelnut Kernels",
        description: "Hazelnut Kernels are nutrient-rich nuts known for their sweet flavor and crunchy texture. They are packed with healthy fats, especially omega-6 and omega-9 fatty acids, and are a great source of protein, dietary fiber, vitamins, and minerals such as vitamin E, manganese, copper, magnesium, and thiamine. Hazelnuts support heart health by helping to lower bad cholesterol and provide powerful antioxidants that protect against cell damage and reduce inflammation.",
        price: 400,
        image: [p_img9, p_img9_1],
        category: "Nuts & Dates",
        subCategory: "Mixed Nuts",
        sizes: ["250gm"],
        date: 1716621542448,
        bestseller: true
    },
    {
        _id: "aaaah",
        name: "Fox Nuts(Phool Makhana) ",
        description: "light, crunchy seeds sourced from the lotus plant, celebrated for being low in calories and fat while rich in protein, fiber, and essential minerals like magnesium, potassium, and calcium. They are a popular choice for healthy snacking, supporting weight management, heart health, and digestion. ",
        price: 650,
        image: [p_img14],
        category: "Nuts & Dates",
        subCategory: "Snacks & Breakfast",
        sizes: ["250gm"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaai",
        name: "Raisins (Kishmish)",
        description: "Kishmish (raisins) are naturally sweet, chewy dried grapes packed with essential nutrients like iron, potassium, calcium, fiber, and antioxidants. They support digestive health, boost energy, enhance immunity, and help maintain healthy bones and skin.",
        price: 700,
        image: [p_img15],
        category: "Dried Fruits & Berries",
        subCategory: "Snacks & Breakfast",
        sizes: ["500gm"],
        date: 1716621235448,
        bestseller: true
    },
    {
        _id: "aaaaj",
        name: "Dried Prunes(Aloo Bukhara)",
        description: "Dried prunes, also known as dried plums, are sweet, chewy fruits packed with fiber, vitamins, and powerful antioxidants. They are renowned for supporting healthy digestion, promoting bone strength, and helping to lower cholesterol levels. Dried prunes make a wholesome snack or ingredient for desserts and cereals, offering a naturally sweet way to boost your daily nutrition and keep your digestive system healthy.",
        price: 300,
        image: [p_img18],
        category: "Dried Fruits & Berries",
        subCategory: "Snacks & Breakfast",
        sizes: ["250gm"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Dried Figs (Anjeer)",
        description: "Anjeer (dried figs) is a naturally sweet, chewy dry fruit renowned for its rich flavor and high nutritional value. Packed with dietary fiber, antioxidants, calcium, magnesium, potassium, and iron, anjeer supports healthy digestion, strengthens bones, and boosts heart and immune health.",
        price: 1100,
        image: [p_img5],
        category: "Dried Fruits & Berries",
        subCategory: "Jumbo Packs",
        sizes: ["500gm"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Dried Blueberries",
        description: "Dried blueberries are a sweet, chewy, and convenient superfood snack packed with dietary fiber, vitamin C, vitamin K, manganese, and powerful antioxidants like anthocyanins. They support immune health, improve digestion, boost brain function, and help protect against chronic disease and inflammation. ",
        price: 500,
        image: [p_img12,p_img12_1],
        category: "Dried Fruits & Berries",
        subCategory: "Snacks & Breakfast",
        sizes: ["250gm"],
        date: 1716624445448,
        bestseller: true
    },
    {
        _id: "aaaam",
        name: "Dried Cranberries",
        description: "Dried cranberries are sweet-tart, chewy berries loaded with antioxidants, dietary fiber, and vitamin C. They support urinary tract health, boost immunity, and help maintain heart health and proper digestion. Dried cranberries are free from trans fats and cholesterol, making them a healthy, guilt-free snack or addition to cereals, salads, and baked goods.",
        price: 450,
        image: [p_img13,p_img13_1],
        category: "Dried Fruits & Berries",
        subCategory: "Snacks & Breakfast",
        sizes: ["250gm"],
        date: 1716625545448,
        bestseller: true
    },
    {
        _id: "aaaan",
        name: "Dried Apricots(Khubani)",
        description: "Dried apricots are sweet and chewy fruits naturally loaded with dietary fiber, vitamin A, potassium, iron, and beneficial antioxidants like beta carotene and flavonoids. They support healthy digestion, boost immunity, promote skin and eye health, and help maintain bone strength and heart wellness.",
        price: 300,
        image: [p_img11],
        category: "Dried Fruits & Berries",
        subCategory: "Snacks & Breakfast",
        sizes: ["250gm"],
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Dried Kiwis",
        description: "Dried kiwis are sweet-tart, chewy slices packed with vitamin C, vitamin K, vitamin E, potassium, dietary fiber, and powerful antioxidants. They help boost immunity, support heart health, improve digestion, and promote glowing skin. ",
        price: 300,
        image: [p_img16, p_img16_1],
        category: "Dried Fruits & Berries",
        subCategory: "Snacks & Breakfast",
        sizes: ["250gm"],
        date: 1716627745448,
        bestseller: true
    },
    {
        _id: "aaaap",
        name: "Dried Black Currants",
        description: "Dried black currants are tangy-sweet, nutrient-dense berries that are naturally high in vitamin C, fiber, potassium, iron, and a wide spectrum of antioxidants—especially anthocyanins. These powerful compounds support immune health, promote glowing skin, aid healthy digestion, and help reduce inflammation while protecting cells from oxidative stress.",
        price: 1000,
        image: [p_img17, p_img17_1 ],
        category: "Dried Fruits & Berries",
        subCategory: "Snacks & Breakfast",
        sizes: ["250gm"],
        date: 1716628845448,
        bestseller: true
    },
    {
        _id: "aaaaq",
        name: "Chia Seeds",
        description: "Chia seeds are tiny but mighty superfoods packed with dietary fiber, plant-based protein, and heart-healthy omega-3 fatty acids (ALA). They are also rich in essential minerals like calcium, magnesium, phosphorus, and iron, and contain powerful antioxidants that protect against cellular damage. ",
        price: 525,
        image: [p_img21],
        category: "Seeds",
        subCategory: "Snacks & Breakfast",
        sizes: ["500gm"],
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "Pumpkin Seeds",
        description: "Pumpkin seeds, also known as pepitas, are nutritious, crunchy seeds packed with protein, healthy polyunsaturated and monounsaturated fats, and dietary fiber. They are an excellent source of magnesium, zinc, iron, phosphorous, potassium, and powerful antioxidants. ",
        price: 350,
        image: [p_img20],
        category: "Seeds",
        subCategory: "Snacks & Breakfast",
        sizes: ["500gm"],
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "Cucumber Seeds",
        description: "Cucumber seeds are a powerhouse of nutrients, packed with essential vitamins and minerals such as vitamin K, vitamin C, potassium, and magnesium. They are rich in dietary fiber, which promotes healthy digestion and regular bowel movements. ",
        price: 400,
        image: [p_img19],
        category: "Seeds",
        subCategory: "Snacks & Breakfast",
        sizes: ["500gm"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaat",
        name: "Quinoa Seeds",
        description: "Quinoa seeds are a highly nutritious, gluten-free superfood known for their excellent protein content—including all nine essential amino acids—making them one of the few complete plant-based proteins. ",
        price: 400,
        image: [p_img22],
        category: "Seeds",
        subCategory: "Snacks & Breakfast",
        sizes: ["500gm"],
        date: 1716633245448,
        bestseller: false
    },
    {
        _id: "aaaau",
        name: "Muskmelon Seeds",
        description: "Muskmelon seeds are a nutrient-rich superfood, packed with plant-based protein, healthy fats, dietary fiber, and an impressive variety of vitamins and minerals—including vitamins A, C, E, K, B1, calcium, magnesium, potassium, iron, and zinc. ",
        price: 650,
        image: [p_img23],
        category: "Seeds",
        subCategory: "Snacks & Breakfast",
        sizes: ["500gm"],
        date: 1716634345448,
        bestseller: false
    },
 /*   {
        _id: "aaaav",
        name: "Women Palazzo Pants with Waist Belt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [p_img22],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716635445448,
        bestseller: false
    },
    {
        _id: "aaaaw",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 180,
        image: [p_img23],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716636545448,
        bestseller: false
    },
    {
        _id: "aaaax",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 210,
        image: [p_img24],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716637645448,
        bestseller: false
    },
    {
        _id: "aaaay",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 190,
        image: [p_img25],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716638745448,
        bestseller: false
    },
    {
        _id: "aaaaz",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 220,
        image: [p_img26],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716639845448,
        bestseller: false
    },
    {
        _id: "aaaba",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [p_img27],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716640945448,
        bestseller: false
    },
    {
        _id: "aaabb",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 230,
        image: [p_img28],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716642045448,
        bestseller: false
    },
    {
        _id: "aaabc",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 210,
        image: [p_img29],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716643145448,
        bestseller: false
    },
    {
        _id: "aaabd",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 240,
        image: [p_img30],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716644245448,
        bestseller: false
    },
    {
        _id: "aaabe",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 220,
        image: [p_img31],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716645345448,
        bestseller: false
    },
    {
        _id: "aaabf",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 250,
        image: [p_img32],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716646445448,
        bestseller: false
    },
    {
        _id: "aaabg",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 230,
        image: [p_img33],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716647545448,
        bestseller: false
    },
    {
        _id: "aaabh",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 260,
        image: [p_img34],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716648645448,
        bestseller: false
    },
    {
        _id: "aaabi",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 240,
        image: [p_img35],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716649745448,
        bestseller: false
    },
    {
        _id: "aaabj",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 270,
        image: [p_img36],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716650845448,
        bestseller: false
    },
    {
        _id: "aaabk",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 250,
        image: [p_img37],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716651945448,
        bestseller: false
    },
    {
        _id: "aaabl",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 280,
        image: [p_img38],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716653045448,
        bestseller: false
    },
    {
        _id: "aaabm",
        name: "Men Printed Plain Cotton Shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 260,
        image: [p_img39],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716654145448,
        bestseller: false
    },
    {
        _id: "aaabn",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 290,
        image: [p_img40],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716655245448,
        bestseller: false
    },
    {
        _id: "aaabo",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 270,
        image: [p_img41],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716656345448,
        bestseller: false
    },
    {
        _id: "aaabp",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 300,
        image: [p_img42],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716657445448,
        bestseller: false
    },
    {
        _id: "aaabq",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 280,
        image: [p_img43],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716658545448,
        bestseller: false
    },
    {
        _id: "aaabr",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 310,
        image: [p_img44],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716659645448,
        bestseller: false
    },
    {
        _id: "aaabs",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 290,
        image: [p_img45],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716660745448,
        bestseller: false
    },
    {
        _id: "aaabt",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 320,
        image: [p_img46],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716661845448,
        bestseller: false
    },
    {
        _id: "aaabu",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 300,
        image: [p_img47],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716662945448,
        bestseller: false
    },
    {
        _id: "aaabv",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 330,
        image: [p_img48],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716664045448,
        bestseller: false
    },
    {
        _id: "aaabw",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 310,
        image: [p_img49],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716665145448,
        bestseller: false
    },
    {
        _id: "aaabx",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 340,
        image: [p_img50],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716666245448, bestseller: false
    },
    {
        _id: "aaaby",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 320,
        image: [p_img51],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716667345448,
        bestseller: false
    },
    {
        _id: "aaabz",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 350,
        image: [p_img52],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716668445448,
        bestseller: false
    }
*/
]