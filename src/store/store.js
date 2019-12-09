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
          quantity: 1,
          totalPrice: 8
        }
      ],
      discountApplied: false,
      numberOfItems: 1,
      totalCost: 8
    },
    discountCode: [
      'timewax',
      'blackfriday'
    ],
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
    addProduct(state, id) {
      let updated = false
      state.basket.contents.map(el => {
        if (el.id === id) {
          if (el.quantity < 1000) {
            el.quantity += 1
            el.totalPrice += el.price
            state.basket.numberOfItems += 1
            state.basket.totalCost += el.price
          }
          updated = true
        }
      });

      if (!updated) {
        const [item] = state.SKU.filter(el => el.id == id);
        state.basket.contents.push({ ...item, totalPrice: item.price, quantity: 1 })
        state.basket.totalCost += item.price
        state.basket.numberOfItems += 1
      }
    },
    applyDiscount(state, e) {
      e.preventDefault()
      if (!state.basket.discountApplied) {
        const code = e.srcElement[0].value;
        if (state.discountCode.includes(code)) {
          state.basket.discountApplied = code
        }
      }
    },
    deleteProduct(state, id) {
      const filteredItems = state.basket.contents.filter(el => {
        if (el.id !== id) {
          return el
        } else {
          state.basket.numberOfItems -= el.quantity
          state.basket.totalCost -= el.price * el.quantity
        }
      })
      state.basket.contents = filteredItems
    },
    emptyBasket(state) {
      state.basket.contents = []
      state.basket.totalCost = 0
      state.basket.numberOfItems = 0
    },
    removeProduct(state, id) {
      state.basket.contents.map((el, i) => {
        if (el.id === id) {
          if (el.quantity > 1) {
            el.quantity -= 1
            el.totalPrice -= el.price
            state.basket.numberOfItems -= 1
            state.basket.totalCost -= el.price
          } else {
            state.basket.contents.splice(i, 1)
            state.basket.numberOfItems -= 1
            state.basket.totalCost -= el.price
          }
        }
      })
    }
  },
  actions: {},
  getters: {
    basket: state => {
      return state.basket.contents
    },
    confirmTotalCost: state => {
      const withDiscount = state.basket.totalCost * 0.9
      return state.basket.discountApplied ? withDiscount : state.basket.totalCost
    },
    numberOfItems: state => {
      const num = state.basket.numberOfItems
      return num == 1 ? `${num} Item`: `${num} Items`
    },
    totalCost: state => {
      return state.basket.totalCost
    }
  },
});