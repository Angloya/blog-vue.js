<template>
  <div class="not-found">
    <img alt="not found" src="../assets/404_error.png">
    <h1>404 Page not found</h1>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666666;
  min-height: 100vh;
}
@media only screen and (max-width: 550px) {
.not-found img {
  width: 70%;
}

.not-found h1 {
  font-size: 26px;
  }
}
</style>
