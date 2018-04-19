<template>
  <div>
    <div v-for="item in feed" class="item">
      <img v-bind:src="item.picID"/>
    </div>
  </div>
</template>

<script>
 import moment from 'moment';
 import linkify from './linkify.js';
 export default {
 	oneItem: require('/Users/Emily/Documents/labs/cs224/redbird/static/images/hfruit.png'),
   name: 'FeedList',
   props: ['feed'],
   filters: {
     since: function(datetime) {
       moment.locale('en', {
	 relativeTime: {
	   future: 'in %s',
	   past: '%s',
	   s:  'seconds',
	   ss: '%ss',
	   m:  '1m',
	   mm: '%dm',
	   h:  'h',
	   hh: '%dh',
	   d:  'd',
	   dd: '%dd',
	   M:  ' month',
	   MM: '%dM',
	   y:  'a year',
	   yy: '%dY'
	 }
       });
       return moment(datetime).fromNow();
     },
     identify: function(itemID) {
       if (itemID === "RF") {
       	oneItem = "/static/images/round.png";
       }
       if (itemID === "SF") {
       	oneItem = "/static/images/square.png";
       }
       if (itemID === "TF") {
       	oneItem = "/static/images/triangle.png";
       }
       if (itemID === "DF") {
       	oneItem = "/static/images/fruit.png";
       }
       if (itemID === "HF") {
       	oneItem = "/static/images/hfruit.png";
       }
       
       return itemID;
     },
   },
   methods: {
     formatTweet: function(text) {
       return linkify(text, {
         defaultProtocol: 'https'
       });
     },
   },
 }

</script>

<style scoped>
 .item {
     border-bottom: 1px solid #ddd;
     padding: 10px;
 }
 .tweet {
     margin-top: 0px;
 }
 .idline {
     margin-bottom: 0px;
 }
 .user {
     font-weight: bold;
     margin-right: 10px;
 }
 .handle {
     margin-right: 10px;
     color: #666;
 }
 .time {
     float: right;
     color: #666;
 }
</style>
