<script setup>
import '@fortawesome/fontawesome-free/css/all.css'; 
</script>


<template>
  <nav class="navbar">
    <div class="container">
      <h1><i class="fab fa-github"></i>Faateeha's Github</h1>
    <div class="navbarmenu">
        
        
        <router-link to="/">Home</router-link>
        <router-link to="/:pathMatch(.*)*">404 Page</router-link>
        <router-link to="/errorboundary">Error Boundary</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
 .navbar {
  display: flex;
  background-color: rgb(128, 0, 128);
  margin: 0 auto;
  padding: 0;
  max-width: 100%;
  color:rgb(255, 255, 255);
  border-radius: 10px;
  justify-content: center;
 }
 i {
  padding-right: 20px;
 }
 h1{
  font-size: 2rem;
 }
 .navbarmenu{
  color: black;
 }
</style>