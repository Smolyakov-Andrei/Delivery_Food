const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-button");

  const openModal = () => {
    modal.classList.add("open");
  };
  const closeModal = () => {
    modal.classList.remove("open");
  };
  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header--close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");
  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "pizza-plus.jpg",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "tanuki.jpg",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "food_band.jpg",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "miser_pizza.jpg",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "point_food.jpg",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "pizza_burger.jpg",
    },
  ];
  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center; ">Загрузка...</p>';
  };

  const randerRestrs = (array) => {
    container.innerHTML = "";
    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `<a href="/goods.html?id=${card.id}" class="products-card">
                <div class="products-card_image">
                  <img src="./images/rest/${card.image}" alt="${card.image}" />
                </div>
                <div class="products-card_description">
                  <div class="products-card_description-row">
                    <h4 class="products-card_description--title">${card.title}</h4>
                    <div class="products-card_description--badge">${card.time} мин</div>
                  </div>
                  <div class="products-card_description-row">
                    <div class="products-card_description-info">
                      <div class="products-card_description-info-raiting">
                        <img src="./images/icons/star.svg" alt="star" />
                        ${card.raiting}
                      </div>
                      <div class="products-card_description-info--price">
                        От ${card.price} ₽
                      </div>
                      <div class="products-card_description-info--group">
                        ${card.type}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            `
      );
    });
  };
  if (container) {
    loading();

    setTimeout(() => {
      randerRestrs(restArray);
    }, 1000);
  }
};

const goodsFunc = () => {
  const container = document.querySelector("#goods-container");
  const goodsArray = [
    {
      id: 0,
      title: "Ролл угорь стандарт",
      composition: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      image: "goods-1.jpg",
    },
    {
      id: 1,
      title: "Калифорния лосось стандарт",
      composition: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 395,
      image: "goods-2.jpg",
    },
    {
      id: 2,
      title: "Окинава стандарт",
      composition: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      image: "goods-3.jpg",
    },
    {
      id: 3,
      title: "Цезарь маки хl",
      composition: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 900,
      image: "goods-4.jpg",
    },
    {
      id: 4,
      title: "Ясай маки стандарт 185 г",
      composition: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      image: "goods-5.jpg",
    },
    {
      id: 5,
      title: "Ролл с креветкой стандарт",
      composition: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      image: "goods-6.jpg",
    },
  ];
  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center; ">Загрузка...</p>';
  };

  const randerGoods = (array) => {
    container.innerHTML = "";
    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="products-card">
                <div class="products-card_image">
                  <img src="./images/goods/${card.image}" alt="${card.image}" />
                </div>
                <div class="products-card_description">
                  <div class="products-card_description-row">
                    <h5 class="products-card_description--name">
                      ${card.title}
                    </h5>
                  </div>
                  <div class="products-card_description-row">
                    <p class="products-card_description--text">
                     ${card.composition}
                    </p>
                  </div>
                  <div class="products-card_description-row">
                    <div class="products-card_description-controls">
                      <button class="btn btn-primary">
                        В корзину
                        <img
                          src="./images/icons/shopping-cart-2.svg"
                          alt="shopping-cart-2"
                        />
                      </button>
                      <span class="products-card_description-controls--price"
                        >${card.price} ₽</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            `
      );
    });
  };
  if (container) {
    loading();

    setTimeout(() => {
      randerGoods(goodsArray);
    }, 500);
  }
};

modalFunc();
restsFunc();
goodsFunc();
