<script setup>
   import { onMounted, ref, computed } from 'vue'
   import api  from '../Repo/api'

   const github = ref(null)
   const page = ref(1)
   const perPage = 5
   const searchQuery = ref('')


    const loadRepos = () => {
      console.log('Component mounted');
      api.getUserRepos('mubee316', page.value, perPage).then(response => {
        console.log('User:', response.data);
        github.value = response.data;
      }).catch(error => {
        console.error('Error fetching repos', error)
      })
    }

    onMounted(loadRepos)

    const nextPage = () => {
        page.value++
        loadRepos()
    }

    const prevPage = () => {
        if(page.value > 1)  {
            page.value--
            loadRepos()
        }
    }
    const filteredRepos = computed(() => {
    if (!github.value) return [];
    if (!searchQuery.value) return github.value;
    const query = searchQuery.value.toLowerCase();
    return github.value.filter(repo => repo.name.toLowerCase().includes(query));
});
</script>

<template>

    <section>
        
        <div v-if="github === null">Loading...</div>
        <div v-if="github" class="github">
          <input type="text" placeholder="Search repository" v-model="searchQuery" style="width:300px; margin-top: 20px; height:40px; border-radius: 10px; margin-left: 50px;" />
            
            <ul>
                <li v-for="repo in filteredRepos" :key="repo.name" class="name">
                    <router-link :to="'/repodetails/' + repo.name" style="color: white;font-size: 1.5rem;background-color:green; padding: 0; margin: 0; text-decoration: none;">{{ repo.name }}</router-link>
                    <p>Language: {{ repo.language }}</p>
                    <p>Last updated: {{ repo.updated_at }}</p>
                    <p>Description: {{ repo.description }}</p>
                    
                </li>
            </ul>
            <div class="button">
                <button @click="prevPage" :disabled="page === 1">Previous</button>
                <button @click="nextPage">Next</button>
            </div>
        </div>   
    </section>
</template>

<style scoped>
 .button {
    color: green;
    display: flex;
    justify-content: center;
    margin: 2rem;
 }
 button{
    background-color: green;
    color: white;
    padding: 5px 10px;
    width: 100px;
    outline: none;
 }
 button:hover {
    cursor: pointer;
    background-color: hsl(120, 100%, 35%);
 }
 button:active {
    cursor: pointer;
    background-color: hsl(120, 100%, 55%);
 }
 .name{
    border: 1px solid;
    border-radius: 10px;
    background-color: green;
    color: white;
    margin: 15px;
    padding-left: 10px;
    padding-block: 20px;
    font-size: 1.1rem;
 }
 ul {
    list-style-type: none;
    text-decoration: none;
    display: grid;
    grid-template-columns: repeat(3,1fr);
 }
 .name{
    color: white;
    text-align:center;
 }
 
 
</style>