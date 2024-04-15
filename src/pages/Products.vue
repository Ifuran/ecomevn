<template>
  <div>
    <navbar
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      @delete-item="deleteItem"
    ></navbar>
    <div class="breadcrumb-container pt-5">
      <nav
        aria-label="breadcrumb"
        class="breadcrumb-wrapper py-3"
        style="--bs-breadcrumb-divider: '>'"
      >
        <h1 class="breadcrumb-title text-center pt-3 mt-5 fw-bold text-white">
          Products
        </h1>
        <ol class="breadcrumb pb-5 justify-content-center fs-4">
          <li class="breadcrumb-item text-white">Home</li>
          <li class="breadcrumb-item text-white">Products</li>
        </ol>
      </nav>
    </div>
    <product-list
      :products="products"
      :categories="categories"
      @add-item="addItem"
    ></product-list>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import ProductList from "../components/ProductList.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "products-page",
  props: ["products", "categories", "cart", "cartQty", "cartTotal"],
  components: {
    ProductList,
    Navbar,
    Footer,
  },
  methods: {
    addItem: function (item) {
      this.$emit("add", item);
    },
    deleteItem: function (index) {
      this.$emit("delete", index);
    },
  },
};
</script>
<style scoped>
.breadcrumb-container {
  background-color: #35363f;
}
.breadcrumb-item + .breadcrumb-item::before {
  color: #fff;
}
</style>
