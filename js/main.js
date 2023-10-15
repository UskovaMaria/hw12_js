const doc = document;
const productEl = doc.querySelector ('.products');
const menuEl = doc.querySelector('.menu');

const menu = [
    {
       element: 'ТОП товари',
    },
    {
        element: 'Смартфони',
    },
    {
        element: 'Універсальні мобільні батареї',
    },
    {
        element: 'Телевізори',
    },
    {
        element: 'Зарядні станції',
    },
    {
        element: 'Сонячні панелі',
    },
    {
        element: 'Ноутбуки, ПК та планшети',
    },
    {
        element: 'Генератори',
    },
    {
        element: 'Роботи-пилососи',
    },
    {
        element: 'Пральні машини',
    },
    {
        element: 'Велосипеди',
    },
];

const menuItems = menu.map(function(item) {
    return `
      <li class="menu__item">${item.element}</li>
    `
}).join('');
  
  
menuEl.innerHTML = menuItems;


const products = [
    {
        img: 'k7sr_black_back_.jpg',
        text: 'Xiaomi Redmi Note 12S 8/256 Onyx Black',
        text2: 'х13міс.',
        price: '9 999 ₴',
    },
    {
        img: '22973157.jpg',
        text: 'Power Bank Xiaomi 3 20000mAh 18W PLM18ZM (VXN4258CN) White',
        text2: 'х4міс.',
        price: '899 ₴',
    },
    {
        img: 'q55e-__result_4.jpg',
        text: 'Телевізор Xiaomi Mi TV Q1E 55',
        text2: 'х19міс.',
        price: '20 999 ₴',
    },
    {
        img: 'romoss_rs300_4_result.jpg',
        text: 'Зарядна станція Romoss RS300 (RS300-2B2-G153H) (600 Вт)',
        text2: 'х19міс..',
        price: '8 999 ₴',
    },
    {
        img: '34601727015503_1_2.jpg',
        text: 'Сонячна панель EcoFlow 220W Solar Panel CN (Solar220W)',
        text2: 'х4міс.',
        price: '24 999 ₴',
    },
];

const postItems = products.map(function(item) {
    return `
    <div class="product">
        <img class="product__photo" src="img/${item.img}" alt="">
        <p class="product__name">${item.text}</p>
        <div class="product__item">
            <p class="star">☆</p>
            <p class="text">Акція</p>
            <div class="plan">
                <img src="img/unnamed.jpg" alt="">
                <p>${item.text2}</p>
                <img class="paw"
                    src="img/png-transparent-dog-paw-paws-animals-snout-silhouette-thumbnail.png" alt="">
            </div>
        </div>
        <div class="product__price">
            <p class="price">${item.price}</p>
            <div class="add"><i class="fa-solid fa-cart-plus"></i></div>
        </div>
    </div>    
    `
  }).join('');
  
  productEl.innerHTML = postItems;
  
  
