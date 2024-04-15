<template>
  <div class="container-fluid">
    <div class="row login-wrapper vh-100">
      <div class="col-md-6 first-column"></div>
      <div class="col-md-6 second-column">
        <h1 class="text-center pt-5 mt-5 mb-3 text-white fw-bold">Sign Up</h1>
        <form class="w-50 mx-auto">
          <div class="input-group mb-3">
            <span
              class="input-group-text register-icon bg-black text-white border-black"
            >
              <i class="bi bi-envelope-at"></i>
            </span>
            <input
              type="email"
              class="form-control register-input p-2 bg-black text-white border-black"
              placeholder="Enter Email"
            />
          </div>
          <div class="input-group mb-3">
            <span
              class="input-group-text register-icon bg-black text-white border-black"
            >
              <i class="bi bi-telephone"></i>
            </span>
            <input
              type="text"
              class="form-control register-input p-2 bg-black text-white border-black"
              placeholder="Phone Number"
            />
          </div>
          <div class="input-group mb-3">
            <span
              class="input-group-text register-icon bg-black text-white border-black"
            >
              <i class="bi bi-key"></i>
            </span>
            <input
              type="password"
              class="form-control register-input p-2 bg-black text-white border-black"
              placeholder="Enter Password"
            />
          </div>
          <div class="input-group mb-3">
            <span
              class="input-group-text register-icon bg-black text-white border-black"
            >
              <i class="bi bi-key"></i>
            </span>
            <input
              type="password"
              class="form-control register-input p-2 bg-black text-white border-black"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" class="login-btn btn btn-primary p-2 w-100">
            Sign Up
          </button>
          <button
            type="button"
            class="btn btn-outline-primary text-white w-100 p-2 my-2"
          >
            <i class="bi bi-google"></i> Sign Up with Google
          </button>
          <div class="text-center">
            <small class="sign-in text-white">
              Already have an account?
              <span class="text-primary"
                ><RouterLink to="/sign-in">Sign In</RouterLink></span
              >
            </small>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register-page",
};
</script>

<style scoped>
.login-wrapper {
  background-image: url("https://s3-alpha-sig.figma.com/img/20c5/3e9d/06022caee3cac5313da6bb1a278a2a1c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O7~nefVQSkB~FCSfxYMbIZ-SESZQCr9om7Jm87KpFF6F0adc114r7I~cZxE6xMivMKwUwwwax6zMIj-P0hZUeMZrmJ1LPHXMu0xf7-3VosUSBSpcHzrkkB5JKJuk2opqXRsSlt90tAQ-W~4DHVgxhTdjDMq1lOCbhulLrQIYWt49CLGSuGG7GPRbJllKS2y1J-LI~n4mPEBqHsqyUV-p12wWxtsYdrgSEVu0pzcsyVbwpf9qzi8~RFdNXfQeDlzOyIUsvSf67T8frWTSaaKHYmc0TNXg3nMN9tR91WAGXTn0S9xrekR31SHnstWx20AfF3ZdIq6RqOOI77kT6orVgw");
  background-size: cover;
}
.second-column {
  background-color: #35363f;
}
input::placeholder {
  color: #fff;
}
</style>
