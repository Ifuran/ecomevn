<template>
  <div id="app">
    <router-view
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      :products="products"
      :categories="categories"
      @add="addItem"
      @delete="deleteItem"
    ></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      maximum: 20,
      products: [],
      categories: [],
      cart: [],
    };
  },
  mounted: function () {
    fetch("https://sistemtoko.com/public/demo/product")
      .then((response) => response.json())
      .then((data) => {
        // Mengonversi harga produk ke format yang sesuai untuk operasi matematika
        this.products = data.aaData.map((product) => {
          return {
            ...product,
            // Menghapus tanda titik dari harga produk dan mengonversi ke angka
            price: parseInt(product.price.replace(/\./g, ""), 10),
          };
        });
      });
    fetch("https://sistemtoko.com/public/demo/cat")
      .then((response) => response.json())
      .then((data) => {
        this.categories = data.aaData;
      });
  },
  computed: {
    cartTotal: function () {
      let sum = 0;
      for (let key in this.cart) {
        sum = sum + this.cart[key].product.product_price * this.cart[key].qty;
      }
      return sum;
    },
    cartQty: function () {
      let qty = 0;
      for (let key in this.cart) {
        qty = qty + this.cart[key].qty;
      }
      return qty;
    },
  },
  methods: {
    addItem: function (product) {
      let productIndex;
      let productExist = this.cart.filter(function (item, index) {
        if (item.product.product_id === Number(product.product_id)) {
          productIndex = index;
          return true;
        } else {
          return false;
        }
      });

      if (productExist.length) {
        this.cart[productIndex].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },
    deleteItem: function (key) {
      if (this.cart[key].qty > 1) {
        this.cart[key].qty--;
      } else {
        this.cart.splice(key, 1);
      }
    },
  },
};
</script>
