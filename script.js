const goods = [
    {
        title: "Shirt",
        price: 150,
        img: "C:/Users/Елена/Documents/Courses/project/Images/Shirts.jpg",
    },
    {
        title: "Socks",
        price: 50,
        img: "C:/Users/Елена/Documents/Courses/project/Images/Socks.jpg",
    },
    {
        title: "Jacket",
        price: 350,
        img: "C:/Users/Елена/Documents/Courses/project/Images/Jackets.jpg",
    },
    {
        title: "Shoes",
        price: 250,
        img: "C:/Users/Елена/Documents/Courses/project/Images/Shoes.jpg",
    },
]

class GoodsItem {
    constructor({
        title = "Item",
        price = 0,
        img = "https://placehold.it/200x150",
    }) {
        this.title = title
        this.price = price
        this.img = img
    }
    render() {
        return `
  <div class="goods-item">
    <img src="${this.img}" alt="image" class="product-img">
    <div class="info-item">
      <h3 class="product-title">${this.title}</h3>
      <p class="product-price">${this.price}</p>
      <button class="product-button">В корзину</button>
    </div>
  </div>
  `
    }
}

class GoodsList {
    goods = []
    fetchGoods() {
        this.goods = goods
    }

    render() {
        let goodsList = goods.map((item) => {
            const goodsItem = new GoodsItem(item)
            return goodsItem.render()
        })
        document.querySelector(".goods-list").innerHTML = goodsList.join("")
    }

    calculate() {
        // 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров
    }
}

const googsList = new GoodsList()
googsList.fetchGoods()
googsList.render()

// Практическое задание
// 3. * Некая сеть фастфуда предлагает несколько видов гамбургеров:
// a. Маленький (50 рублей, 20 калорий).
// b. Большой (100 рублей, 40 калорий).

// Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// a. С сыром (+10 рублей, +20 калорий).
// b. С салатом (+20 рублей, +5 калорий).
// c. С картофелем (+15 рублей, +10 калорий).

// Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить
// майонезом (+20 рублей, +5 калорий).

// Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно
// использовать примерную архитектуру класса со следующей страницы, но можно использовать
// и свою.

// class Hamburger {
// constructor(size, stuffing) { ... }
// addTopping(topping) { // Добавить добавку }
// removeTopping(topping) { // Убрать добавку }
// getToppings(topping) { // Получить список добавок }
// getSize() { // Узнать размер гамбургера }
// getStuffing() { // Узнать начинку гамбургера }
// calculatePrice() { // Узнать цену }
// calculateCalories() { // Узнать калорийность }
// }
