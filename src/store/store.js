import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    basket: {
      contents: [
        {
          id: 'LL1786575566',
          title: 'City Guide',
          image: 'https://images-na.ssl-images-amazon.com/images/I/711ZjU9uamL._AC_UL400_SR278,400_.jpg',
          price: 8,
          quantity: 1
        }
      ],
      count: 1,
      totalCost: 8
    },
    SKU: [
      {
        id: 'LL1786575566',
        title: 'City Guide',
        image: 'https://images-na.ssl-images-amazon.com/images/I/711ZjU9uamL._AC_UL400_SR278,400_.jpg',
        price: 8
      },
      {
        id: '37010T633I760',
        title: 'Amsterdam Flag',
        image: 'https://images-na.ssl-images-amazon.com/images/I/317B89McJVL._AC_UL600_SR450,600_.jpg',
        price: 12
      },
      {
        id: 'B082FRRRCY',
        title: 'World Cup Shirt',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91Oiov2C0ZL._AC_UL400_SR300,400_.jpg',
        price: 55
      },
      {
        id: '0T63082F3I760',
        title: 'Heineken 330ml',
        image: 'https://images-na.ssl-images-amazon.com/images/I/516O2PLeD6L._AC_UL400_SR300,400_.jpg',
        price: 1
      },
      {
        id: '43BB3082F3I760',
        title: 'Pint Glass',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61sBH5QigXL._AC_UL600_SR450,600_.jpg',
        price: 5
      },
      {
        id: 'B01MTX92W0',
        title: 'Teddy Bear',
        image: 'https://images-na.ssl-images-amazon.com/images/I/816ZMMWQMyL._AC_UL600_SR450,600_.jpg',
        price: 6
      }
    ]
  },
  mutations: {
    // addProduct(state, product) {
    //   state.basket.
    // }
  },
  actions: {
    addProduct({ commit }, product) {
      commit('addProduct', product)
    }
  },
  getters: {
    basket: state => {
      return state.basket.contents
    }
  },
});