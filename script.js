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
];
// console.log(goods);

const renderGoodsItem = (item, img = "https://placehold.it/200x150") => {
  return `
  <div class="goods-item">
    <img src="${img}" alt="image" class="product-img">
    <div class="info-item">
      <h3 class="product-title">${item.title}</h3>
      <p class="product-price">${item.price}</p>
      <button class="product-button">В корзину</button>
    </div>
  </div>
  `;
};

console.log(renderGoodsItem(goods));

const renderGoodsList = (list) => {
  let goodsList = list.map((item) => renderGoodsItem(item, item.img)).join(" ");
  // console.log(goodsList);
  document.querySelector(".goods-list").innerHTML = goodsList;
};

renderGoodsList(goods);