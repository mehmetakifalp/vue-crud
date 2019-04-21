<template>
  <div class="container">


    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="navbar-header">
      <a class="navbar-brand" href="#">Vue Crud MEVN</a>
    </div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Create Product</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">Products</router-link>
        </li>
      </ul>
          <button class="btn btn-danger navbar-btn">mehmetakifalp@gmail.com</button>
    </nav><br />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .1s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script>

    export default{
    }
</script>