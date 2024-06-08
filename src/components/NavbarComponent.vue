<script setup>
import '@fortawesome/fontawesome-free/css/all.css'; 
</script>


<template>
  <nav class="navbar">
    <div class="container">
      <h1><i class="fab fa-github"></i>Mubarak's Github</h1>
    <div class="navbarmenu">
        
        
        <router-link to="/">Home</router-link>
        <router-link to="/:catchAll(.*)*">404 Page</router-link>
        <router-link to="/errorboundary">Error Boundary</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav{
  margin-top: 20px;
}
 .navbar {
  
  background-color: green;
  margin:  auto;
  padding: 0;
  height:100px;
  max-width: 100%;
  color:rgb(255, 255, 255);
  border-radius: 10px;
  
 }
 i {
  padding-right: 20px;
  padding-left: 10px;
 }
 h1{
  font-size: 2rem;
  padding-top: 5px;
  text-align: center;
 }
 a,
.green {
  text-decoration: none;
  color: black;
  background-color: green;
  transition: 0.4s;
  padding: 10px;
  margin:10px 15px 15px 15px;
  border-radius: 5px;
  color: white;
  border: 2px solid;
  border-color: white;
  

  
}
a:hover {
    background-color: hsl(120, 100%, 35%);
  }
a:active {
    background-color: hsl(120, 100%, 55%);
  }
  .navbarmenu{
    display: flex;
    justify-content: center;
    margin-top: -30px;
  }
 
</style>