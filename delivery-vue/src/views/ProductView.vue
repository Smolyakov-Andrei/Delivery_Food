
<template>
  <section class="products">
    <div class="container">
      <div class="products-wrapper" id="goods-container">
        <router-link
          class="products-card"
          v-for="goods in goodsArray"
          :key="goods.id"
          :to="`/rest?id=${goods.id}`"
        >
          <div class="products-card_image">
            <img :src="getUrl(goods.image)" alt="rest-1" />
          </div>
          <div class="products-card_description">
            <div class="products-card_description-row">
              <h5 class="products-card_description--name">
                {{ goods.title }}
              </h5>
            </div>
            <div class="products-card_description-row">
              <p class="products-card_description--text">
                {{ goods.composition }}
              </p>
            </div>
            <div class="products-card_description-row">
              <div class="products-card_description-controls">
                <button class="btn btn-primary">
                  В корзину
                  <img
                    src="../assets/images/icons/shopping-cart-2.svg"
                    alt="shopping-cart-2"
                  />
                </button>
                <span class="products-card_description-controls--price"
                  >{{ goods.price }} ₽</span
                >
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { goodsArray } from "../constants/goods";
const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}`, import.meta.url);
};
</script>

