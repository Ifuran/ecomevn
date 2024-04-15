<template>
  <div class="products-wrapper bg-dark">
    <div class="container pt-5">
      <div class="row">
        <div class="col-lg-3 col-sm-12">
          <div class="form-search input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search Product"
            />
            <span class="input-group-text bg-primary" id="basic-addon2"
              ><i class="bi bi-search text-white"></i
            ></span>
          </div>
          <div class="product-filter my-5">
            <div
              class="product-filter-wrapper p-3 text-white border border-black border-3 rounded"
            >
              <h3 class="filter-title fw-bold my-3">Categories</h3>
              <div class="filter-category mb-3">
                <input
                  class="form-check-input me-3 mt-2"
                  type="radio"
                  name="categoryName"
                  id="all"
                  value=""
                  checked
                />
                <label
                  class="form-check-label text-capitalize fs-5"
                  htmlFor="all"
                >
                  Semua
                </label>
              </div>
              <div
                class="filter-category mb-3"
                v-for="item in categories"
                :key="item.id"
              >
                <input
                  class="form-check-input me-3 mt-2"
                  type="radio"
                  name="categoryName"
                  :id="'category_' + item.product_category_id"
                  :value="item.product_category_id"
                />
                <label
                  class="form-check-label text-capitalize fs-5"
                  :for="'category_' + item.product_category_id"
                >
                  {{ item.product_category_name }}
                </label>
              </div>
              <h3 class="filter-title fw-bold my-3 pt-3">Filter By Price</h3>
              <div class="filter-price mb-3">
                <input
                  type="text"
                  class="input-filter-price form-control p-2 mb-3 bg-black text-white border-black"
                  placeholder="Price Min"
                />
                <input
                  type="text"
                  class="input-filter-price form-control p-2 mb-3 bg-black text-white border-black"
                  placeholder="Price Max"
                />
                <button class="btn btn-primary p-2 w-100 fw-bold" type="submit">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-sm-12">
          <div class="row">
            <div class="dropdown input-group mb-3">
              <input
                type="button"
                class="col-lg-3 rounded-start ms-auto"
                value="Sorting"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <span
                class="input-group-text bg-primary rounded-end"
                id="basic-addon2"
                ><i class="bi bi-funnel text-white"></i
              ></span>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Terbaru</a></li>
                <li><a class="dropdown-item" href="#">Termurah</a></li>
                <li><a class="dropdown-item" href="#">Terpopuler</a></li>
              </ul>
            </div>
          </div>
          <div class="row pt-4">
            <div
              v-for="item in products"
              :key="item.id"
              class="col-lg-4 col-md-4 col-sm-6 col-6"
            >
              <a
                href="#"
                @click="getDetail(item.id)"
                class="text-decoration-none"
                data-bs-toggle="modal"
                data-bs-target="#productModal"
              >
                <div class="product-card bg-black text-center rounded my-2">
                  <img
                    :src="item.photo"
                    :alt="item.name"
                    class="p-3 img-fluid border-rounded"
                  />
                  <div class="card-body py-3">
                    <h5 class="card-title text-light mb-2">
                      {{ capitalingWord(item.name) }}
                    </h5>
                    <p class="card-title text-light">
                      {{ formatRupiah(item.price) }}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="pagination-wrapper py-5">
            <nav class="container mt-3 text-center">
              <ul class="pagination justify-content-center">
                <li class="page-item p-2">
                  <button class="btn btn-primary px-3">1</button>
                </li>
                <li class="page-item mx-1 p-2">
                  <button class="btn btn-secondary px-3">2</button>
                </li>
                <li class="page-item p-2">
                  <button class="btn btn-secondary px-3">></button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal  -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg bg-dark rounded-3 border-dark">
        <div class="modal-content">
          <div class="modal-body bg-dark text-white rounded-3 border-dark">
            <div class="wrapper-btn-close text-end" data-bs-theme="dark">
              <button
                type="button text-white"
                class="btn-close me-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="wrapper-content px-2 mx-2">
              <div class="row">
                <div class="col-lg-6">
                  <img
                    :src="`https://sistemtoko.com/img/user/demo/product/${productDetail.product_img}`"
                    :alt="productDetail.product_name"
                    class="p-3 img-fluid border-rounded"
                  />
                </div>
                <div class="col-lg-6 mt-3">
                  <h2 class="text-light my-2">
                    {{
                      productDetail.product_name
                        ? capitalingWord(productDetail.product_name)
                        : ""
                    }}
                  </h2>
                  <h3 class="text-light my-3">
                    {{
                      productDetail.product_price
                        ? formatRupiah(productDetail.product_price)
                        : ""
                    }}
                  </h3>
                  <p class="text-light my-3 pb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Porro autem architecto sint, assumenda odio non tenetur
                    ratione consectetur corporis harum iste reprehenderit natus
                    similique deleniti in impedit repellendus laboriosam quis.
                  </p>
                  <button
                    class="btn btn-primary d-block w-100 mt-3"
                    @click="$emit('add-item', productDetail)"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-list",
  data: function () {
    return {
      productDetail: [],
    };
  },
  props: ["products", "categories"],
  methods: {
    getDetail: function (id) {
      fetch(`https://sistemtoko.com/public/demo/single/${id}`)
        .then((response) => response.json())
        .then((data) => {
          this.productDetail = data;
        });
    },
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
<style>
.custom-dropdown-toggle::after {
  content: "";
}
.input-filter-price::placeholder {
  color: grey;
  text-align: center;
}
</style>
