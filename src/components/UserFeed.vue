<template>
  <div class="feed">
  <div class="garden">
  	<div class="side">
  		<button v-on:click="explore">EXPLORE</button>
  		<p> Current affection: {{ heartGet }} </p>
	</div>
	<img class = "chao" src="/static/images/babychaoLG.gif"/>
  </div>
  <p> Hover! </p>
  <div class="bag">
  <div class="dropdown">
    <img class="bag" src="/static/images/bag.png"/>
    <div class="dropdown-content">
    <img v-on:click="eatr" class = "item" src="/static/images/round.png"/>
    <img v-on:click="eatt" class = "item" src="/static/images/triangle.png"/>
    <img v-on:click="eats" class = "item" src="/static/images/square.png"/>
    <img v-on:click="eath" class = "item" src="/static/images/hfruit.png"/>
    <img v-on:click="eatd" class = "item" src="/static/images/dfruit.png"/>
    </div>
  </div>
  </div>
   <feed-list v-bind:feed="feed" />
  </div>
</template>

<script>
 import FeedList from './FeedList';
 export default {
   name: 'UserFeed',
   data () {
     return {
       text: '',
       imageData: '',
       imagePreview: false,
       file: '',
       heart: 0,
       strength: 0,
     }
   },
   components: { FeedList },
   computed: {
     feed: function() {
       return this.$store.getters.feed;
     },
     heartGet: function() {
       return this.$store.getters.heart;
     },
     strengthGet: function() {
       return this.$store.getters.stength;
     },
   },
   created: function() {
     this.$store.dispatch('getFeed');
     this.$store.dispatch('getHeart');
   },
   methods: {
     add: function() {
     	console.log("hey");
       this.$store.dispatch('addItem',{
         tweet: "",
	 image: "",
       }).then(tweet => {
	 this.text = "";
	 this.imageData = "";
	 this.imagePreview = false;
       });
     },
     greet: function (event) {
      // `this` inside methods point to the Vue instance
      alert('Hello ' + this.user + '!')
      // `event` is the native DOM event
      alert(event.target.tagName);
    },
    eatr: function (event) {
    	var rando = (Math.floor(Math.random() * 3));
    	if (rando == 0) {
       	alert('Your chao seems happy!');
       }
       else if (rando == 1) {
       	alert('Your chao seems to have loved it!');
       }
       else if (rando == 2) {
       	alert('Seems like your chao did not like that one...');
       }
    },
    eatt: function (event) {
    	var rando = (Math.floor(Math.random() * 3));
    	if (rando == 0) {
       	alert('Your chao seems happy!');
       }
       else if (rando == 1) {
       	alert('Your chao seems to have loved it!');
       }
       else if (rando == 2) {
       	alert('Seems like your chao did not like that one...');
       }
    },
    eats: function (event) {
    	var rando = (Math.floor(Math.random() * 3));
    	if (rando == 0) {
       	alert('Your chao seems happy!');
       }
       else if (rando == 1) {
       	alert('Your chao seems to have loved it!');
       }
       else if (rando == 2) {
       	alert('Seems like your chao did not like that one...');
       }
    },
    eath: function (event) {
    	var rando = (Math.floor(Math.random() * 3));
    	if (rando == 0) {
       	alert('Your chao seems happy!');
       }
       else if (rando == 1) {
       	alert('Your chao seems to have loved it!');
       }
       else if (rando == 2) {
       	alert('Seems like your chao did not like that one...');
       }
    },
    eatd: function (event) {
    	var rando = (Math.floor(Math.random() * 3));
    	if (rando == 0) {
       	alert('Your chao seems happy!');
       }
       else if (rando == 1) {
       	alert('Your chao seems to have loved it!');
       }
       else if (rando == 2) {
       	alert('Seems like your chao did not like that one...');
       }
    },
    explore: function () {
    	var rando = (Math.floor(Math.random() * 5));
    	var itemID = "";
    	var picID = "";
      if (rando === 0) {
       	itemID = "RF";
       }
       else if (rando === 1) {
       	itemID = "SF";
       }
       else if (rando === 2) {
       	itemID = "TF";
       }
       else if (rando === 3) {
       	itemID = "DF";
       }
       else {
       	itemID = "HF";
       }
      if (itemID === "RF") {
       	picID = "round.png";
       }
       if (itemID === "SF") {
       	picID = "square.png";
       }
       if (itemID === "TF") {
       	picID = "triangle.png";
       }
       if (itemID === "DF") {
       	picID = "dfruit.png";
       }
       if (itemID === "HF") {
       	picID = "hfruit.png";
       }
      alert('Your chao found something!')
      this.$store.dispatch('addItem',{
         tweet: itemID,
	 image: picID,
       });
       this.$store.dispatch('addHeart')
     },
     previewImage: function(event) {
       const input = event.target;
       // Ensure that you have a file before attempting to read it
       if (input.files && input.files[0]) {
	 this.file = input.files[0];
         // create a new FileReader to read this image and convert to base64 format
         const reader = new FileReader();
         // Define a callback function to run, when FileReader finishes its job
         reader.onload = (e) => {
           // Read image as base64 and set to imageData
           this.imageData = e.target.result;
	   this.imagePreview = true;
         }
         // Start the reader job - read file as a data url (base64 format)
         reader.readAsDataURL(input.files[0]);
       }
     }
   }
 }
</script>

<style scoped>
 .tweetForm {
     background: #eee;
     padding: 10px;
     margin-bottom: 10px;
 }
 .buttons {
     display: flex;
     justify-content: space-between;
 }
 .icon {
     font-size: 2em;
     padding: 0px;
 }
 .icon:active {
     transform: translateY(4px);
 }
 .buttonWrap {
     width: 20%;
 }
 button {
     height: 2em;
     font-size: 0.9em;
     float:right;
 }
 textarea {
     width: 100%;
     height: 5em;
     padding: 2px;
     margin-bottom: 5px;
     resize: none;
     box-sizing: border-box;
 }
 input[type="file"] {
     display: none;
 }
 .imagePreview {
     padding: 0px;
     height: 150px;
 }
 active {
     display: block;
 }
 inactive {
     display: none;
 }
 img {
     max-width: 100%;
     max-height: 100%;
 }
 .garden {
 	display:inline-block;
 	width: 100%;
 	background-image: url("/static/images/star.png");
 	background-size: auto;
 	border: none;
    border-radius: 10px;
    box-sizing: border-box;
 }

.chao {
	display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
}

.side {
	float: left;
	padding: 20px;
}

.bag {
	float: left; 
	display: inline-block;
	max-width: 100%;
	float: left;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.bag img {
	max-width: 100px;
}

.item {
	float: left; 
	display: inline-block;
}

button.explore {
     background-color: #64e499;
 }


.dropbtn {
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
	padding: 16px;
    display: none;
    min-width: 160px;
    z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content img:hover {background-color: #f1f1f1;}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-info {
    display: none;
    min-width: 160px;
}

.dropdown-content:hover .dropdown-info {
	cursor: pointer;
    position: absolute;
    display: block;
    width: 10%; /* Full width (cover the whole page) */
    height: 10%; /* Full height (cover the whole page) */
    background-color: white;
}

feed {
	margin: 0px;
}
.side p {
	color: white;
}
</style>
