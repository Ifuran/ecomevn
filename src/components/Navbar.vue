<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-black py-3">
    <div class="container">
      <a class="navbar-brand text-white fw-bold" href="#">Ecomevn</a>
      <div class="navbar-right-menu mx-auto d-sm-none d-flex gap-3">
        <RouterLink to="/sign-in" class="mt-2"
          ><i class="bi bi-person-circle text-white mx-lg-3 fs-5"></i
        ></RouterLink>

        <div class="position-relative">
          <span class="dropdown">
            <button
              type="button"
              class="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-cart text-white fs-5"></i>
              <span
                class="position-absolute top-0 start-75 ms-2 translate-middle badge rounded-pill bg-primary"
              >
                {{ cartQty }}
              </span>
            </button>
            <div
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownCart"
            >
              <div class="dropdown-item" v-if="cart.length === 0">
                <span>Cart is empty</span>
              </div>
              <div v-else>
                <div class="text-end p-3">
                  Total :
                  <b class="ms-2"> {{ formatRupiah(cartTotal) }}</b>
                </div>
                <div v-for="(item, index) in cart" :key="index">
                  <div class="dropdown-item-text text-nowrap text-end">
                    <span
                      class="badge rounded-pill text-bg-warning align-text-top me-2"
                    >
                      {{ item.qty }}
                    </span>
                    {{ capitalingWord(item.product.product_name) }}
                    <b class="ms-2">{{
                      formatRupiah(item.product.product_price * item.qty)
                    }}</b>
                    <a
                      href="#"
                      class="badge text-bg-danger"
                      @click.stop="$emit('delete-item', index)"
                      >-</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
      <button
        class="navbar-toggler bg-secondary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link text-white mx-lg-2"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/" class="nav-link text-white mx-lg-2"
              >Shop</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link text-white mx-lg-2"
              >About</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link text-white mx-lg-2"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="navbar-right-menu d-none d-lg-flex">
        <RouterLink to="/sign-in" class="mt-2"
          ><i class="bi bi-person-circle text-white mx-lg-3 fs-5"></i
        ></RouterLink>
        <div class="position-relative">
          <span class="dropdown">
            <button
              type="button"
              class="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-cart text-white fs-5"></i>
              <span
                class="position-absolute top-0 start-75 ms-2 translate-middle badge rounded-pill bg-primary"
              >
                {{ cartQty }}
              </span>
              <span class="ms-4 text-white">
                {{ formatRupiah(cartTotal) }}
              </span>
            </button>
            <div
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownCart"
            >
              <div class="dropdown-item" v-if="cart.length === 0">
                <span>Cart is empty</span>
              </div>
              <div v-else>
                <div v-for="(item, index) in cart" :key="index">
                  <div class="dropdown-item-text text-nowrap text-end">
                    <span
                      class="badge rounded-pill text-bg-warning align-text-top me-2"
                    >
                      {{ item.qty }}
                    </span>
                    {{ capitalingWord(item.product.product_name) }}
                    <b class="ms-2">{{
                      formatRupiah(item.product.product_price * item.qty)
                    }}</b>
                    <a
                      href="#"
                      class="badge text-bg-danger"
                      @click.stop="$emit('delete-item', index)"
                      >-</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigation-bar",
  props: ["cart", "cartQty", "cartTotal"],
  methods: {
    capitalingWord: function (word) {
      return word.replace(/\b\w/g, (char) => char.toUpperCase());
    },
    formatRupiah: function (price) {
      price = Number(price);
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(Number(price));
    },
  },
};
</script>
