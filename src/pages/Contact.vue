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
          Contact Us
        </h1>
        <ol class="breadcrumb pb-5 justify-content-center fs-4">
          <li class="breadcrumb-item text-white">Home</li>
          <li class="breadcrumb-item text-white">Contact</li>
        </ol>
      </nav>
    </div>
    <div class="about-wrapper bg-secondary text-white">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6 pe-5">
            <div class="info-contact-us">
              <div class="list-contact-us mb-5">
                <h4 class="fw-bold">
                  <i
                    class="bg-black p-2 rounded text-primary bi bi-envelope-at-fill"
                  ></i>
                  Email
                </h4>
                <span class="fs-5">info@ecomevn.com</span><br />
                <span class="fs-5">cs@ecomevn.com</span>
              </div>
              <div class="list-contact-us mb-5">
                <h4 class="fw-bold">
                  <i
                    class="bg-black p-2 rounded text-primary bi bi-telephone-fill"
                  ></i>
                  Phone
                </h4>
                <span class="fs-5">0896-9510-1205</span><br />
                <span class="fs-5">0878-8866-6531</span>
              </div>
              <div class="list-contact-us mb-5">
                <h4 class="fw-bold">
                  <i
                    class="bg-black p-2 rounded text-primary bi bi-geo-alt-fill"
                  ></i>
                  Address
                </h4>
                <span class="fs-5"
                  >Jln. Ringroad Utara no 34 Maguwoharjo Yogyakarta, 55282</span
                >
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.247203382214!2d110.41854297421555!3d-7.7635878922555905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5988bf08e72f%3A0x3d6b8f2631a429f8!2sJl.%20Ring%20Road%20Utara%20No.34%2C%20Jenengan%2C%20Maguwoharjo%2C%20Kec.%20Depok%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055283!5e0!3m2!1sid!2sid!4v1713135746785!5m2!1sid!2sid"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="rounded-5"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "contact-component",
  props: ["products", "categories", "cart", "cartQty", "cartTotal"],
  components: {
    Navbar,
    Footer,
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
