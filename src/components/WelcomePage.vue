<template>
  <div class="column">
    <h1>Raise a chao of your very own!</h1>
    <form v-on:submit.prevent="register">
      <p>Create an account.</p>
      <input class="narrow" v-model="username" placeholder="Username"> <br/>
      <input class="wide" v-model="name" placeholder="Your Name"><br/>
      <input class="narrow" v-model="email" placeholder="Email">
      <input class="narrow" type="password" v-model="password" placeholder="Password"><br/>
      <input class="wide" v-model="Cname" placeholder="Optional: chao's name"><br/>
      <button class="alternate" type="submit">Register</button>

    </form>
    <p class="error">{{registerError}}</p>
  </div>
</template>

<script>
 export default {
   name: 'WelcomePage',
   data () {
     return {
       username: '',
       email: '',
       password: '',
       name: '',
     }
   },
   computed: {
     registerError: function() {
       return this.$store.getters.registerError;
     },
   },
   methods: {
     register: function() {
       this.$store.dispatch('register',{
	 username: this.username,
         email: this.email,
         password: this.password,
	 name: this.name,
       });
     }
   }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 img {
     width: 100px;
 }

 h1 {
     margin-bottom: 0px;
 }
 h2 {
     margin-top: 0px;
     font-size: 1.2em;
     font-weight: normal;
     margin-bottom: 50px;
 }
 .narrow {
     width: 170px;
 }
 .wide {
     width: 370px;
 }
</style>
