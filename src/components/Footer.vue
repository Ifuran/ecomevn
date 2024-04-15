<template>
  <div class="footer-wrapper bg-black text-white">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-5">
          <h3 class="fw-bold mb-3">Ecomevn</h3>
          <p class="w-75">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            optio explicabo vitae magnam illo aspernatur!
          </p>
          <div class="social-media py-3">
            <a href="https:://www.whatsapp.com">
              <span class="bg-white p-2 rounded-circle"
                ><i class="bi bi-whatsapp text-black"></i
              ></span>
            </a>
            <a href="https:://www.instagram.com">
              <span class="bg-white p-2 mx-2 rounded-circle"
                ><i class="bi bi-instagram text-black"></i
              ></span>
            </a>
            <a href="https:://www.facebook.com">
              <span class="bg-white p-2 rounded-circle"
                ><i class="bi bi-facebook text-black"></i
              ></span>
            </a>
          </div>
          <div class="copyright pt-5">
            &copy; 2023 Ecomevn Copyright Permissions
          </div>
        </div>
        <div class="col-lg-3">
          <h5 class="fw-bold">Quick Link</h5>
          <ul class="footer-wrapper-links">
            <li class="list-quick-link ms-0">
              <RouterLink to="/" class="list-link">Home</RouterLink>
            </li>
            <li class="list-quick-link ms-0">
              <RouterLink to="/" class="list-link">Shop</RouterLink>
            </li>
            <li class="list-quick-link ms-0">
              <RouterLink to="/about" class="list-link">About</RouterLink>
            </li>
            <li class="list-quick-link ms-0">
              <RouterLink to="/contact" class="list-link">Contact</RouterLink>
            </li>
          </ul>
        </div>
        <div class="col-lg-4">
          <h5 class="fw-bold">Custom Area</h5>
          <ul class="footer-wrapper-links">
            <li class="list-custom-area">
              <RouterLink to="/" class="list-link">My Account</RouterLink>
            </li>
            <li class="list-custom-area">
              <RouterLink to="/" class="list-link">Tracking</RouterLink>
            </li>
            <li class="list-custom-area">
              <RouterLink to="/" class="list-link">Order</RouterLink>
            </li>
            <li class="list-custom-area">
              <RouterLink to="/" class="list-link">My Cart</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-component",
};
</script>

<style scoped>
.footer-wrapper-links {
  list-style: none;
}
.footer-wrapper-links li {
  margin-left: -30px !important;
}

.footer-wrapper-links li .list-link {
  color: #fff;
  text-decoration: none;
}
</style>
