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
        }).join("")
        document.querySelector(".goods-list").innerHTML = goodsList
    }

    calculate() {
        // 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров
        let count = 0
        for (let index = 0; index < goods.length; index++) {
          const element = goods[index].price
          count += element
        }
        // console.log(count)
        return count
    }
}

const googsList = new GoodsList()
googsList.calculate()

googsList.fetchGoods()
googsList.render()
