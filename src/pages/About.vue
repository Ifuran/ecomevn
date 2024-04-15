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
          About Us
        </h1>
        <ol class="breadcrumb pb-5 justify-content-center fs-4">
          <li class="breadcrumb-item text-white">Home</li>
          <li class="breadcrumb-item text-white">About</li>
        </ol>
      </nav>
    </div>
    <div class="about-wrapper bg-secondary text-white">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6 pe-5">
            <h2 class="fw-bold mb-3">Who we are</h2>
            <p class="pe-5 fs-5">
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the upper surface of the impenetrable foliage
              of my trees, and but a few stray
            </p>
            <p class="pe-5 fs-5">
              gleams steal into the inner sanctuary, I throw myself down among
              the tall grass by the trickling stream; and, as I lie close to the
              earth, a thousand unknown plants are noticed by me .when I hear
              the buzz of the little world among the stalks, and grow familiar
              with the countless indescribable forms of the insects and flies,
              then I feel the presence .
            </p>
          </div>
          <div class="col-lg-6">
            <img
              src="https://s3-alpha-sig.figma.com/img/dca2/99b5/7af4bb9f7d9b93dd6fb6146d33b4aad1?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n1wELuUGUnrfMOYfziluCvmzZ9Kc2-paj90yPQvDKs2GK48vd84li02EXwll4~u8sj0XKM7n4WqzBD~NZCDQnSrl4v1IpeTP8yIem~j2Sgx8ViEjDv3rr4zvcQfk6lruzX20A1zCTO9ZUH8h-laRNuLgXKdkLxXv1IdeT~TxkKBJE2x~6PTWEjIYFfN~u00ZKQj9vikodt6rAI4~ErEzF3ON3pq2po24eG2ZKGF1zbtvQnzT23fbg8iQgmohRkrlDrIPDkgW~j10i2EUDAJ5oj8OVI4UUr2wYpexftreP9fTZG6cON9XWHKT~96Gnrupaj8Qcxxl5Mh1~2~vfreyhA__"
              alt="about-us"
              class="img-fluid rounded-5"
            />
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
  name: "about-component",
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
