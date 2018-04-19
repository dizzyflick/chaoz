<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
 import AppHeader from './components/AppHeader';
 export default {
   name: 'App',
   components: { AppHeader }
 }
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Gugi');
 
 body {
     font-size: 18px;
     
     font-family: 'Gugi', cursive;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     background-color: #79baf5;
 }
 button {
     min-width: 100px;
     line-height: 1em;
     border: none;
     border-radius: 5px;
     padding: 5px;
     text-align: center;
     text-decoration: none;
     font-size: 1rem;
     margin: 4px 2px;
 }
 button.primary {
     background-color: #09ad3d;
 }
 button.alternate {
     background-color: #64e499;
 }
 button:focus {
     outline: none;
 }
 button:hover {
     box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
 }
 button:active {
     transform: translateY(4px);
 }
 input {
     height: 20px;
     padding: 10px;
 }
 a {
     color: #02313a;
 }
 .flexWrapper {
     display:flex;
 }
 .flexRight {
     margin-left: auto;
 }
 .error {
     color: #F35537;
 }
 .column {
     width: 800px;
 }
 .feed {
     width: 100%;
     
 }
 .feed img {
     width: 100%;
 }
</style>
