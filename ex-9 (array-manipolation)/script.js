'use strict';
// metodo some e every iterano l'intero array e controllano se la condizione e' vera o falsa
// some al primo riscontro positivo ritorna true
// every invece solamente se tutti gli elementi soddisfano la condizione

// let arr = [34, 543, 45556, 756, 536367, -434, -43423];

// let bool = arr.some(elm => elm > 0);
// let bool1 = arr.every(elm => elm > 0 || elm < 0);
// console.log(bool, bool1);
// const arr = [200, -500, 500, 100, -400];

// let number = arr.find(numb => numb < 0);
// console.log(number);

// const arr1 = [];
// for (number of arr) {
//   if (number < 0) {
//     arr1.push(number);
//   }
// }
// console.log(arr1[0]);

// let a = {
//   owner: 'matteo',
// };
// let b = {
//   owner: 'giorgia',
// };
// let c = {
//   owner: 'fede',
// };
// const arr2 = [a, b, c];
// let d;
// for (let obj of arr2) {
//   if (obj.owner === 'giorgia') {
//     d = obj;
//   }
// }
// console.log(d);

// let a = Array.from({ length: 100 }, () => Math.round(Math.random() * 6));
// console.log(a);

// let b = a.reduce(
//   (cal, elm) => {
//     elm > 0 ? (cal.piu += elm) : (cal.meno += elm);
//     return cal;
//   },
//   {
//     piu: 0,
//     meno: 0,
//   }
// );

// console.log(b);
let arr =[
    {
    id: 1,
    name: "La pizzeria",
    city: "Lucia ligure",
    street_address: "Contrada Isabel 4",
    postal_code: "10168",
    vat_number: "59325325624",
    image: "https://via.placeholder.com/640x480.png/009977?text=food+sed",
    slug: "la-pizzeria-lucia-ligure-10168",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    user_id: 1,
    image_url: null,
    products: [
    {
    id: 1,
    restaurant_id: 1,
    name: "Lasagne",
    is_available: 1,
    image: "https://via.placeholder.com/640x480.png/00aa44?text=food+modi",
    typology: "pizza",
    description: "Adipisci voluptatem eos dolorum assumenda sed rem voluptatem. Eos vero expedita aut perspiciatis.",
    ingredients: "Nihil et saepe exercitationem dolor eos. Nostrum quia consequatur blanditiis cupiditate blanditiis ullam.",
    price: "61.25",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 2,
    restaurant_id: 1,
    name: "Torta paradiso",
    is_available: 1,
    image: "https://via.placeholder.com/640x480.png/00cc99?text=food+consequatur",
    typology: "sushi",
    description: "Et quis quia odit expedita incidunt eum eveniet. Est asperiores hic sint est aliquam ut corrupti beatae.",
    ingredients: "Laborum ullam architecto dolorum et. Illo aut necessitatibus veritatis corporis quia debitis est.",
    price: "82.12",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 3,
    restaurant_id: 1,
    name: "Hot Dog",
    is_available: 1,
    image: "https://via.placeholder.com/640x480.png/00ffdd?text=food+ad",
    typology: "dessert",
    description: "Corporis optio est mollitia recusandae quo omnis. Officia laudantium voluptate molestiae qui.",
    ingredients: "Ut quasi ut qui voluptatem aliquam.",
    price: "44.73",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 4,
    restaurant_id: 1,
    name: "Polenta",
    is_available: 0,
    image: "https://via.placeholder.com/640x480.png/008822?text=food+deleniti",
    typology: "vegetariano",
    description: "Est excepturi sit fugit nam magnam iste. Rerum quis aut accusantium consequatur ipsam.",
    ingredients: "Velit nobis deleniti facilis quod.",
    price: "74.06",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 5,
    restaurant_id: 1,
    name: "Caprese",
    is_available: 0,
    image: "https://via.placeholder.com/640x480.png/0044bb?text=food+voluptatibus",
    typology: "vegetariano",
    description: "Impedit consequuntur sed minus. Maiores voluptates itaque adipisci velit sit voluptas doloremque repudiandae. Et iure neque sit expedita nesciunt.",
    ingredients: "Voluptatibus doloribus sint nihil in consequatur id sed. Eaque aut quasi quo optio unde.",
    price: "77.72",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    }
    ],
    kitchens: [
    {
    id: 1,
    name: "italiano",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 1,
    kitchen_id: 1
    }
    },
    {
    id: 1,
    name: "italiano",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 1,
    kitchen_id: 1
    }
    },
    {
    id: 1,
    name: "italiano",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 1,
    kitchen_id: 1
    }
    },
    {
    id: 1,
    name: "italiano",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 1,
    kitchen_id: 1
    }
    }
    ]
    },
    {
    id: 2,
    name: "La trattoria",
    city: "Celeste terme",
    street_address: "Via Marvin 3",
    postal_code: "01320",
    vat_number: "21308318564",
    image: "https://via.placeholder.com/640x480.png/00cc99?text=food+cumque",
    slug: "la-trattoria-celeste-terme-01320",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    user_id: 2,
    image_url: null,
    products: [
    {
    id: 6,
    restaurant_id: 2,
    name: "Hamburger",
    is_available: 1,
    image: "https://via.placeholder.com/640x480.png/00ffcc?text=food+sapiente",
    typology: "panini",
    description: "Vero sunt nobis eligendi et porro quia. Id ut sed eos aliquid quidem.",
    ingredients: "Et commodi odio ut numquam.",
    price: "42.84",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 7,
    restaurant_id: 2,
    name: "Hot Dog",
    is_available: 0,
    image: "https://via.placeholder.com/640x480.png/00ffee?text=food+ut",
    typology: "alcolici",
    description: "Debitis blanditiis quas tenetur. At ea repellendus unde qui.",
    ingredients: "Qui quaerat tenetur enim ipsum. Voluptas voluptatibus explicabo est.",
    price: "25.19",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 8,
    restaurant_id: 2,
    name: "Torta paradiso",
    is_available: 0,
    image: "https://via.placeholder.com/640x480.png/00bb55?text=food+aut",
    typology: "vegetariano",
    description: "Porro hic dicta reiciendis cumque voluptas. Temporibus labore sit alias ut ducimus non odio ab.",
    ingredients: "Ipsum id sunt id non est asperiores. Dolor animi accusantium dolorem laudantium.",
    price: "40.09",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 9,
    restaurant_id: 2,
    name: "Caprese",
    is_available: 1,
    image: "https://via.placeholder.com/640x480.png/002222?text=food+aut",
    typology: "pizza",
    description: "Vel expedita magnam molestiae sit ad. Quo sint enim tenetur. Fugit consequatur repudiandae sed.",
    ingredients: "Omnis qui porro sit explicabo asperiores. Praesentium sed ducimus consequatur dolorum tempore qui modi.",
    price: "98.35",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 10,
    restaurant_id: 2,
    name: "Pizza capricciosa",
    is_available: 1,
    image: "https://via.placeholder.com/640x480.png/00aa99?text=food+atque",
    typology: "dessert",
    description: "Voluptates et occaecati cum aut sunt et repellat. Laboriosam provident aut sint velit exercitationem et cupiditate.",
    ingredients: "Sequi iusto ipsum velit corporis ab magnam.",
    price: "8.85",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    }
    ],
    kitchens: [
    {
    id: 2,
    name: "internazionale",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 2,
    kitchen_id: 2
    }
    },
    {
    id: 2,
    name: "internazionale",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 2,
    kitchen_id: 2
    }
    },
    {
    id: 2,
    name: "internazionale",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 2,
    kitchen_id: 2
    }
    },
    {
    id: 2,
    name: "internazionale",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 2,
    kitchen_id: 2
    }
    }
    ]
    },
    {
    id: 3,
    name: "Trancio",
    city: "Giulietta salentino",
    street_address: "Strada Leone 373 Appartamento 98",
    postal_code: "31453",
    vat_number: "56090413507",
    image: "https://via.placeholder.com/640x480.png/008888?text=food+aut",
    slug: "trancio-giulietta-salentino-31453",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    user_id: 3,
    image_url: null,
    products: [
    {
    id: 11,
    restaurant_id: 3,
    name: "Tiramisù",
    is_available: 1,
    image: "https://via.placeholder.com/640x480.png/008855?text=food+velit",
    typology: "dessert",
    description: "Placeat vitae sed voluptas cumque provident sunt. Culpa illum excepturi molestiae velit.",
    ingredients: "Possimus at impedit voluptatem esse non.",
    price: "92.89",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 12,
    restaurant_id: 3,
    name: "Insalata di pollo",
    is_available: 1,
    image: "https://via.placeholder.com/640x480.png/005577?text=food+ea",
    typology: "bevande",
    description: "Commodi quis amet neque incidunt ut voluptatibus eum. Quidem porro in enim voluptatem. Laboriosam officia a nostrum est dolor.",
    ingredients: "Nemo quae pariatur quam mollitia. Aut molestiae ipsum aliquid architecto.",
    price: "50.57",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 13,
    restaurant_id: 3,
    name: "Pizza margherita",
    is_available: 1,
    image: "https://via.placeholder.com/640x480.png/009933?text=food+eos",
    typology: "sushi",
    description: "Quia earum autem culpa itaque alias quia. Quo quisquam mollitia molestias corrupti animi dolore accusantium dolorem.",
    ingredients: "Accusantium expedita suscipit dicta ex eos.",
    price: "2.48",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 14,
    restaurant_id: 3,
    name: "Cheeseburger",
    is_available: 1,
    image: "https://via.placeholder.com/640x480.png/000000?text=food+ipsum",
    typology: "vegetariano",
    description: "Perferendis itaque nostrum reiciendis tempore earum voluptate. Sunt sit omnis in animi.",
    ingredients: "Eaque consequatur cumque similique dolorem et.",
    price: "92.11",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 15,
    restaurant_id: 3,
    name: "Panino vegano",
    is_available: 1,
    image: "https://via.placeholder.com/640x480.png/0066ee?text=food+labore",
    typology: "dessert",
    description: "Odio aut a id eos quaerat cum et. Voluptates quae tempore placeat occaecati eum repellat occaecati. Modi quis et deleniti fugiat dolor qui nihil esse.",
    ingredients: "Adipisci molestias consequatur dolore at veritatis cupiditate. Mollitia voluptatum est ut iste unde deserunt quae.",
    price: "83.89",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    }
    ],
    kitchens: [
    {
    id: 3,
    name: "cinese",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 3,
    kitchen_id: 3
    }
    },
    {
    id: 3,
    name: "cinese",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 3,
    kitchen_id: 3
    }
    },
    {
    id: 3,
    name: "cinese",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 3,
    kitchen_id: 3
    }
    },
    {
    id: 3,
    name: "cinese",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 3,
    kitchen_id: 3
    }
    }
    ]
    },
    {
    id: 4,
    name: "Soralella",
    city: "Settimo Ivonne",
    street_address: "Borgo Isira 5",
    postal_code: "89261",
    vat_number: "71328555295",
    image: "https://via.placeholder.com/640x480.png/0066dd?text=food+necessitatibus",
    slug: "soralella-settimo-ivonne-89261",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    user_id: 4,
    image_url: null,
    products: [
    {
    id: 16,
    restaurant_id: 4,
    name: "Insalata di pollo",
    is_available: 1,
    image: "https://via.placeholder.com/640x480.png/00ee99?text=food+consequuntur",
    typology: "vegetariano",
    description: "Sint deleniti voluptatibus corporis id quasi praesentium eum. Quia aut eos aut sint quidem veritatis.",
    ingredients: "Ducimus qui dolores est voluptas voluptate.",
    price: "95.29",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 17,
    restaurant_id: 4,
    name: "Pizza margherita",
    is_available: 0,
    image: "https://via.placeholder.com/640x480.png/004411?text=food+beatae",
    typology: "sushi",
    description: "Minus voluptas qui quaerat voluptates esse quo magni. Quaerat autem qui non qui. Aliquid dolorem molestiae distinctio.",
    ingredients: "Accusamus debitis provident vitae aperiam quos voluptas minima.",
    price: "88.82",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 18,
    restaurant_id: 4,
    name: "Sgombro al forno",
    is_available: 1,
    image: "https://via.placeholder.com/640x480.png/00dd00?text=food+aut",
    typology: "vegetariano",
    description: "Quia libero dolore eos corrupti. Dolores commodi iure et.",
    ingredients: "Ut sequi eveniet est.",
    price: "50.05",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 19,
    restaurant_id: 4,
    name: "Pizza margherita",
    is_available: 0,
    image: "https://via.placeholder.com/640x480.png/005566?text=food+dolor",
    typology: "panini",
    description: "Laboriosam quaerat ad reiciendis. Odit voluptas est libero corrupti commodi quia.",
    ingredients: "Dolorem voluptates ipsam suscipit delectus velit rem. Tempora non commodi non.",
    price: "18.21",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 20,
    restaurant_id: 4,
    name: "Pizza capricciosa",
    is_available: 0,
    image: "https://via.placeholder.com/640x480.png/007744?text=food+quis",
    typology: "dessert",
    description: "Possimus vero ea consequatur rem magni et corrupti. Doloribus corrupti dolorum sunt et tempore quia inventore expedita. Quia sunt totam a ipsa.",
    ingredients: "Et mollitia dolor qui doloribus ut nobis.",
    price: "10.40",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    }
    ],
    kitchens: [
    {
    id: 4,
    name: "giapponese",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 4,
    kitchen_id: 4
    }
    },
    {
    id: 4,
    name: "giapponese",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 4,
    kitchen_id: 4
    }
    },
    {
    id: 4,
    name: "giapponese",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 4,
    kitchen_id: 4
    }
    },
    {
    id: 4,
    name: "giapponese",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 4,
    kitchen_id: 4
    }
    }
    ]
    },
    {
    id: 5,
    name: "MC donald",
    city: "Sesto Bortolo",
    street_address: "Strada Marchetti 9",
    postal_code: "83506",
    vat_number: "53704788813",
    image: "https://via.placeholder.com/640x480.png/0044bb?text=food+culpa",
    slug: "mc-donald-sesto-bortolo-83506",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    user_id: 5,
    image_url: null,
    products: [
    {
    id: 21,
    restaurant_id: 5,
    name: "Hot Dog",
    is_available: 0,
    image: "https://via.placeholder.com/640x480.png/001155?text=food+architecto",
    typology: "bevande",
    description: "Est quis perferendis voluptatum fugiat magni quod id. Ullam maxime voluptas quod dolor.",
    ingredients: "Quo fugit mollitia sed tenetur sit. Et odio possimus aliquid aut vero.",
    price: "7.00",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 22,
    restaurant_id: 5,
    name: "Hamburger",
    is_available: 1,
    image: "https://via.placeholder.com/640x480.png/0077ff?text=food+sunt",
    typology: "bevande",
    description: "Nobis aut accusamus ipsa voluptatem. Voluptate rerum suscipit inventore rerum. Nemo molestiae rem laborum harum.",
    ingredients: "Magnam praesentium quia sit quam qui molestiae qui voluptatibus. Qui perferendis quis totam modi et et.",
    price: "76.58",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 23,
    restaurant_id: 5,
    name: "Pizza margherita",
    is_available: 1,
    image: "https://via.placeholder.com/640x480.png/0022bb?text=food+quo",
    typology: "alcolici",
    description: "Et nobis est quia error impedit voluptas atque. Consequatur perferendis ut autem aut aliquam corrupti. Ipsum nihil vel enim unde enim nobis quae.",
    ingredients: "Tempora ut mollitia cupiditate pariatur commodi dicta perferendis quibusdam. Ea minus tempore ad quia et non temporibus.",
    price: "49.26",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 24,
    restaurant_id: 5,
    name: "Hamburger",
    is_available: 0,
    image: "https://via.placeholder.com/640x480.png/00eeaa?text=food+eos",
    typology: "sushi",
    description: "Eos excepturi et amet consequuntur quia cumque. Et temporibus aliquid vero cum quia expedita consequuntur.",
    ingredients: "Cupiditate laboriosam ea dolorem rerum ipsa earum.",
    price: "4.28",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    },
    {
    id: 25,
    restaurant_id: 5,
    name: "Spaghetti al ragù",
    is_available: 0,
    image: "https://via.placeholder.com/640x480.png/0099ee?text=food+aspernatur",
    typology: "pizza",
    description: "Dolor dignissimos dolores qui maxime delectus culpa velit velit. Sunt occaecati ab amet nulla eveniet aut.",
    ingredients: "Et debitis neque tenetur saepe ut vitae consequatur. Culpa eos voluptatem qui in.",
    price: "45.32",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    image_url: null
    }
    ],
    kitchens: [
    {
    id: 5,
    name: "messicano",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 5,
    kitchen_id: 5
    }
    },
    {
    id: 5,
    name: "messicano",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 5,
    kitchen_id: 5
    }
    },
    {
    id: 5,
    name: "messicano",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 5,
    kitchen_id: 5
    }
    },
    {
    id: 5,
    name: "messicano",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 5,
    kitchen_id: 5
    }
    }
    ]
    },
    {
    id: 6,
    name: "pino",
    city: "padova",
    street_address: "via due torri 25",
    postal_code: "35020",
    vat_number: "44444444444",
    image: "uploads/JfGi2JAodxjzgAz8Cb7V0DwEViaKxpUYXCW1QFAW.jpg",
    slug: "pino-padova-35020",
    created_at: "2023-02-24T20:16:37.000000Z",
    updated_at: "2023-02-24T20:16:37.000000Z",
    user_id: 6,
    image_url: "http://localhost:8000/storage/uploads/JfGi2JAodxjzgAz8Cb7V0DwEViaKxpUYXCW1QFAW.jpg",
    products: [
    {
    id: 26,
    restaurant_id: 6,
    name: "pane",
    is_available: 1,
    image: "uploads/smhPa2N3lvVjClf1JOz9k5S6cOOEaPUEy8rM0y1T.webp",
    typology: "bevande",
    description: "dsdadsadaddadadadda",
    ingredients: "adadadadsdsdadaddad",
    price: "3.99",
    created_at: "2023-02-24T20:17:01.000000Z",
    updated_at: "2023-02-24T20:17:01.000000Z",
    image_url: "http://localhost:8000/storage/uploads/smhPa2N3lvVjClf1JOz9k5S6cOOEaPUEy8rM0y1T.webp"
    },
    {
    id: 27,
    restaurant_id: 6,
    name: "nutella",
    is_available: 1,
    image: "uploads/HE24UWJXGpbg1GtDqJ3k9LVt5KngmhqPb9cO9OWg.png",
    typology: "bevande",
    description: "dsdadsaasasasd",
    ingredients: "dadadasdsdadasasd",
    price: "16.99",
    created_at: "2023-02-24T20:18:55.000000Z",
    updated_at: "2023-02-24T20:18:55.000000Z",
    image_url: "http://localhost:8000/storage/uploads/HE24UWJXGpbg1GtDqJ3k9LVt5KngmhqPb9cO9OWg.png"
    },
    {
    id: 28,
    restaurant_id: 6,
    name: "aria",
    is_available: 1,
    image: "uploads/AIfK2pr9I8dinFUZzj13vP2boT58a3l3hUrjKlAZ.webp",
    typology: "panini",
    description: "dsdasdsadasdasda",
    ingredients: "adadadasddad",
    price: "16.99",
    created_at: "2023-02-24T20:19:38.000000Z",
    updated_at: "2023-02-24T20:19:38.000000Z",
    image_url: "http://localhost:8000/storage/uploads/AIfK2pr9I8dinFUZzj13vP2boT58a3l3hUrjKlAZ.webp"
    }
    ],
    kitchens: [
    {
    id: 1,
    name: "italiano",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 6,
    kitchen_id: 1
    }
    }
    ]
    },
    {
    id: 7,
    name: "matteo grigoletto",
    city: "padova",
    street_address: "via due torri 25",
    postal_code: "35020",
    vat_number: "44444444422",
    image: "uploads/bQ7cK02BGGVuWz5ztz7PD8q8relkLvEbhLT3LKtm.webp",
    slug: "matteo-grigoletto-padova-35020",
    created_at: "2023-02-25T13:53:53.000000Z",
    updated_at: "2023-02-25T13:53:53.000000Z",
    user_id: 7,
    image_url: "http://localhost:8000/storage/uploads/bQ7cK02BGGVuWz5ztz7PD8q8relkLvEbhLT3LKtm.webp",
    products: [ ],
    kitchens: [
    {
    id: 8,
    name: "francese",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 7,
    kitchen_id: 8
    }
    }
    ]
    },
    {
    id: 8,
    name: "matteo grigoletto",
    city: "padova",
    street_address: "via due torri 25",
    postal_code: "35020",
    vat_number: "44444442221",
    image: "uploads/jbrcrpQeFom0CZKBzVDJOxSJz4FHqh7RE6SqgWas.webp",
    slug: "matteo-grigoletto-padova-35020",
    created_at: "2023-02-25T14:38:02.000000Z",
    updated_at: "2023-02-25T14:38:12.000000Z",
    user_id: 8,
    image_url: "http://localhost:8000/storage/uploads/jbrcrpQeFom0CZKBzVDJOxSJz4FHqh7RE6SqgWas.webp",
    products: [ ],
    kitchens: [
    {
    id: 7,
    name: "coreano",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 8,
    kitchen_id: 7
    }
    },
    {
        id: 7,
        name: "italiano",
        created_at: "2023-02-24T20:15:57.000000Z",
        updated_at: "2023-02-24T20:15:57.000000Z",
        pivot: {
        restaurant_id: 8,
        kitchen_id: 7
        }
        }
    ]
    },
    {
    id: 9,
    name: "matteo grigoletto",
    city: "padova",
    street_address: "via due torri 25",
    postal_code: "35020",
    vat_number: "33333313333",
    image: "uploads/otUBbDuuooK1rWrbfIlNwyAKyx999jEFd4q6cLlT.jpg",
    slug: "matteo-grigoletto-padova-35020",
    created_at: "2023-02-25T14:38:38.000000Z",
    updated_at: "2023-02-25T14:38:38.000000Z",
    user_id: 9,
    image_url: "http://localhost:8000/storage/uploads/otUBbDuuooK1rWrbfIlNwyAKyx999jEFd4q6cLlT.jpg",
    products: [ ],
    kitchens: [
    {
    id: 3,
    name: "cinese",
    created_at: "2023-02-24T20:15:57.000000Z",
    updated_at: "2023-02-24T20:15:57.000000Z",
    pivot: {
    restaurant_id: 9,
    kitchen_id: 3
    }
    }
    ]
    }
    ]
    console.log(arr);
    let cucina = ['coreano','italiano']

    for(let restaurant of arr){
     let arr2 = restaurant.kitchens.map(elm => elm.name)
    console.log(cucina.every(elm => arr2.includes(elm))); 
    }