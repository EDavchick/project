// Практическое задание
// Напишите программу, рассчитывающую стоимость и калорийность гамбургера.

// Некая сеть фастфуда предлагает несколько видов гамбургеров:
// a. Маленький (50 рублей, 20 калорий).
// b. Большой (100 рублей, 40 калорий).
const hamburgers = [
    {
        size: "Small",
        price: 50,
        calories: 20,
    },
    {
        size: "Big",
        price: 100,
        calories: 40,
    },
]

// Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// a. С сыром (+10 рублей, +20 калорий).
// b. С салатом (+20 рублей, +5 калорий).
// c. С картофелем (+15 рублей, +10 калорий).

// Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить
// майонезом (+20 рублей, +5 калорий).

class Hamburgers {
    constructor({ size = "Size", price = 0, calories = 0, stuffing = "Any" }) {
        this.size = size
        this.price = price
        this.calories = calories
        this.stuffing = stuffing
        this.topping = []
    }
    //   <h3 class="hamburger-size">${this.size}</h3>
    //   <p class="hamburger-price">${this.price}</p>
    //   <p class="hamburger-calories">${this.calories}</p>
    //   <div>
    //     <input type="radio" id="big" name="fav_language" value="BIG">
    //     <label class="hamburger-size" for="big">${this.size} Большой (100 рублей, 40 калорий)</label><br>
    //   </div>

    render() {
        return `
  <div class="hamburgers-item">

  <form action=""> 
  <fieldset>
      <legend>Выберите размер гамбургера:</legend>
      <div>
        <input type="radio" id="small" name="fav_language">
        <label class="hamburger-info" for="small">${this.size} (${this.price} рублей, ${this.calories} калорий)</label><br>
      </div>
  </fieldset>
  
  <fieldset>
      <legend>Выберите начинку:</legend>
      <div>
        <input type="checkbox" id="cheese" name="cheese" checked />
        <label class="stuffing-info" for="cheese">${this.stuffing} Cheese (+10 рублей, +20 калорий)</label>
      </div>
    
      <div>
        <input type="checkbox" id="salat" name="salat" />
        <label for="salat">${this.stuffing} Salat (+20 рублей, +5 калорий)</label>
      </div>

      <div>
          <input type="checkbox" id="hum" name="hum" />
          <label for="hum">${this.stuffing} Hum (+15 рублей, +10 калорий)</label>
        </div>
    </fieldset>

    <fieldset>
      <legend>Дополнительно:</legend>
      <div>
        <input type="checkbox" id="add1" name="add1" />
        <label for="add1">Приправа ${this.topping} (+15 рублей, +0 калорий)</label>
      </div>
    
      <div>
        <input type="checkbox" id="add2" name="add2" />
        <label for="add2">Майонез ${this.topping} (+20 рублей, +5 калорий)</label>
      </div>
    </fieldset>

  <input type="submit" value="Итоговая стоимость и калории">
</form>   

  </div>
  `
    }
    // addTopping(topping) { // Добавить добавку }
    // removeTopping(topping) { // Убрать добавку }
    // getToppings(topping) { // Получить список добавок }
    // getSize() { // Узнать размер гамбургера }
    // getStuffing() { // Узнать начинку гамбургера }
    // calculatePrice() { // Узнать цену }
    // calculateCalories() { // Узнать калорийность }
}

class HamburgersList {
    hamburgers = []
    fetchGoods() {
        this.hamburgers = hamburgers
    }

    render() {
        let hamburgersList = this.hamburgers
            .map((item) => {
                const hamburgersItem = new Hamburgers(item)
                return hamburgersItem.render()
            })
            .join("")
        document.querySelector(".hamburgers-list").innerHTML = hamburgersList
    }
}

const hamburgersList = new HamburgersList()
hamburgersList.fetchGoods()
hamburgersList.render()
