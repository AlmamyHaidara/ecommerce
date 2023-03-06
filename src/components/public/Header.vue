<template>
  <div class="header position-absolute">
    <img
      src="@/assets/headear.jpg"
      alt=""
      srcset=""
      class="img-fluid object-fit-cover mx-auto"
    />
    <div class="shadaw position-absolute top-0 mx-auto"></div>
    <div class="box position-absolute container">
        <h1 class="text-light">THE NIKE IS A BEST SHOE ON TIME</h1>
        <p class="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nesciunt eius assumenda odio neque! Atque, accusantium dolores quasi quisquam consequuntur quos ratione enim libero! Praesentium earum rerum eaque.</p>
      <div class="bg-danger btn text-light ">Buy now</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  top: -1rem !important;
  width: 100%;
  height: 75vh !important;
}
.header img {
  width: 100%;
  height: 100vh;
}
.shadaw {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  /* backdrop-filter: blur(2px); */
  opacity: 0.2;
  z-index: -1;
}

.box {
  top: 40%;
  left: 20%;
  width: 18rem;
  
}
.btn{
    width: 10rem;
}
.box h1{
    width: 18rem;
}.box p{
    width: 18rem;
}
</style>
