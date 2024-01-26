<style scoped>
/* card design */


.ag-format-container {
  width: 100%;
  height: 83vh;
  overflow: auto;
  margin: 0 auto;

}

.ag-courses_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  padding: 50px 0;
}
.ag-courses_item {
  cursor: pointer;
  -ms-flex-preferred-size: calc(33.33333% - 30px);
  flex-basis: calc(33.33333% - 30px);
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin: 0 15px 30px;

  overflow: hidden;

  border-radius: 28px;
}
.ag-courses-item_link {
  display: block;
  padding: 30px 20px;
  background-color: #f8f8ff;

  overflow: hidden;

  position: relative;
}
.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date,
.ag-courses-item_link:hover .ag-courses-item_title,
.ag-courses-item_link:hover .ag-courses-item_date-box {
  text-decoration: none;
  color: #fff;
}
.ag-courses-item_link:hover .ag-courses-item_bg{
  -webkit-transform: scale(10);
  -ms-transform: scale(10);
  transform: scale(10);
}
.ag-courses-item_title {
  min-height: 87px;
  margin: 0 0 25px;

  overflow: hidden;

  font-weight: bold;
  font-size: 15px;
  color: #000000;

  z-index: 2;
  position: relative;
}
.ag-courses-item_date-box {
  font-size: 15px;
  color: #000000;

  z-index: 2;
  position: relative;
}
.ag-courses-item_date {
  font-weight: bold;
  color: #f9b234;

  -webkit-transition: color 0.5s ease;
  -o-transition: color 0.5s ease;
  transition: color 0.5s ease;
}
.ag-courses-item_bg {
  height: 128px;
  width: 128px;
  background-color: #f9b234;

  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;

  border-radius: 50%;

  -webkit-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.ag-courses_item:nth-child(2n) .ag-courses-item_bg {
  background-color: rgb(91, 91, 255);
}
.ag-courses_item:nth-child(3n) .ag-courses-item_bg {
  background-color: rgb(255, 101, 101);
}
.ag-courses_item:nth-child(4n) .ag-courses-item_bg {
  background-color: #952aff;
}
.ag-courses_item:nth-child(5n) .ag-courses-item_bg {
  background-color: #cd3e94;
}
.ag-courses_item:nth-child(6n) .ag-courses-item_bg {
  background-color: #49c5ea;
}

@media only screen and (max-width: 979px) {
  .ag-courses_item {
    -ms-flex-preferred-size: calc(50% - 30px);
    flex-basis: calc(50% - 30px);
  }
  .ag-courses-item_title {
    font-size: 24px;
  }
}

@media only screen and (max-width: 767px) {
  .ag-format-container {
    width: 100%;
  }
}
@media only screen and (max-width: 639px) {
  .ag-courses_item {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .ag-courses-item_title {
    min-height: 72px;
    line-height: 1;

    font-size: 24px;
  }
  .ag-courses-item_link {
    padding: 22px 40px;
  }
  .ag-courses-item_date-box {
    font-size: 15px;
  }
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(225, 225, 225); 
  /* border-radius: 10px; */
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #d0d0d0; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a6a6a6; 
}
/* end card design */

.transition, form button, form .question label, form .question input[type="text"] {
  -moz-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  -o-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  -webkit-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
}

form.design1 h1 {
  color: #ff4a56;
  font-weight: 100;
  letter-spacing: 0.01em;
  margin-left: 15px;
  margin-bottom: 35px;
  text-transform: uppercase;
}
form.design1 .question {
    margin: 0 auto;
    width: fit-content;
  position: relative;
  padding: 10px 0;
}
form.design1 .question:first-of-type {
  padding-top: 0;
}
form.design1 .question:last-of-type {
  padding-bottom: 0;
}
form.design1 .question label {
  transform-origin: left center;
  font-weight: 100;
  letter-spacing: 0.01em;
  font-size: 17px;
  box-sizing: border-box;
  padding: 10px 15px;
  display: block;
  position: absolute;
  margin-top: -40px;
  z-index: 2;
  pointer-events: none;
}
form.design1 .question input[type="text"], .question input[type="password"]{
  appearance: none;
  background-color: none;
  line-height: 0;
  font-size: 17px;
  display: block;
  box-sizing: border-box;
  padding: 10px 15px;
  font-weight: 100;
  letter-spacing: 0.01em;
  position: relative;
  z-index: 1;
}
form.design1 .question input[type="text"]:focus, .question input[type="password"]:focus {
  outline: none;
  margin-top: 30px;
}
form.design1 .question input[type="text"]:valid,.question input[type="password"]:valid {
  margin-top: 30px;
}
form.design1 .question input[type="text"]:focus ~ label , .question input[type="password"]:focus ~ label {
  -moz-transform: translate(0, -35px);
  -ms-transform: translate(0, -35px);
  -webkit-transform: translate(0, -35px);
  transform: translate(0, -35px);
}
form.design1 .question input[type="text"]:valid ~ label , .question input[type="password"]:valid ~ label{
  text-transform: uppercase;
  font-style: italic;
  -moz-transform: translate(5px, -35px) scale(0.6);
  -ms-transform: translate(5px, -35px) scale(0.6);
  -webkit-transform: translate(5px, -35px) scale(0.6);
  transform: translate(5px, -35px) scale(0.6);
}

/* modal */
.modal-mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity .3s ease;
  }
  
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  
  .modal-container {
    z-index: 2000;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
  
  .modal-header {
    margin-bottom: 20px;
    border: none;
  }
  
  .modal-body {
    border: none;
    margin-bottom: 10px;
  }
  
  .modal-footer {
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
  }
  
  .modal-default-button {
    margin-left: 20px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 2px;
    padding: 6px 12px;
    font-size: 14px;
    cursor: pointer;
  }

  .bi-bi-x-square:hover{
fill: rgb(131, 0, 0);
  }
</style>

<script setup>
import { ref,onMounted } from 'vue'
import axios from 'axios'
import router from '@/router'
import { useRoute } from 'vue-router';
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue3-qrcode-reader'
import moment from 'moment';
import Paginate from 'vuejs-paginate-next';
import VueBasicAlert from 'vue-basic-alert'

//const rootLink = ref(`https://localhost:7091/api/`)
 const rootLink = ref(`https://apps.fastlogistics.com.ph/scanapi/api/`)

const eventList = ref([])
const codelocal = ref(localStorage.getItem("code"))
const modalcode = ref(false)

onMounted(()=>{

  // if(codelocal.value == "hulaan mo"){
  //   code.value = "hulaan mo"
  // }

  onFirstLoad()

})

function onFirstLoad(){

  axios.get(`${rootLink.value}EmsEventschedulemembers/listOfEvent`).then((response) => {


var evtScheduleId = response.data[0].eventScheduleId
var evtArrayIndex = 0

var evtCount = 0
var evtStart = 0

console.log(response.data);

for(var x = 0; x < response.data.length;x++){
    if(evtScheduleId != response.data[x].eventScheduleId){
      evtScheduleId = response.data[x].eventScheduleId        
        evtArrayIndex = evtArrayIndex + 1       
        evtCount = 0
        evtStart = x
    }
    
        evtCount = evtCount + 1
            eventList.value[evtArrayIndex] = {
            "eventScheduleId": response.data[x].eventScheduleId,
            "eventTitle": response.data[x].title,
            "eventDescription": response.data[x].eventDescription,
            "days": evtCount, 
            "venue": response.data[x].venue,
            "evtStart": response.data[evtStart].eventDate,
            "evtEnd": response.data[x].eventDate
      
     
    }
   
}

}, (error) => {
console.log("error: " + error);
});

}


function date(value) {
      return moment(value).format('MMMM D, YYYY');
    }

//
const codeHolder = ref('')
const code = ref([])
const alert = ref(null)

function codeVerification (){

  if(codeHolder.value != 'hulaan mo'){

    alert.value.showAlert(
            'error', // There are 4 types of alert: success, info, warning, error
            'Invalid Code', //mesage
            'INVALID'// Header of the alert
        )

  }else{

    localStorage.setItem("code",codeHolder.value)
    alert.value.showAlert(
            'success', // There are 4 types of alert: success, info, warning, error
            'Access Granted', //mesage
            'SUCCESS'// Header of the alert
        )
        router.push({'name':'pageScanner', query: { id: code.value.eventScheduleId }})
  }

}

function openmodal(content){

  modalcode.value = true
  code.value = content
}
</script>


<template>

<vue-basic-alert 
       :duration="300" 
       :closeIn="5000" 
       ref="alert" />

<div style="width: 100%;height: 50px; background-color: #f8f8ff; box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);">
    <img style="width: 140px; float: left; padding: 10px;" src="../assets/fastLogo.png">
</div>

<br>


<div>

<div>
    <h1 style="font-weight: bold;">List of Events</h1>
</div>

<div class="ag-format-container">
  <div class="ag-courses_box">

    <div class="ag-courses_item" v-for="content,index in eventList" >
        
      <a @click="openmodal(content)" style="text-decoration: none;"  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
      
           <h3 style="font-weight: bold;"> {{ content.eventTitle }}</h3>
           <h5 style="font-weight: bold;"> {{ content.eventDescription }} </h5>
            <h5 style="text-align: left;">
<span style="font-weight: bold;">Days:</span> {{ content.days }}
</h5>

<h5 style="text-align: left;">
<span style="font-weight: bold;">Venue:</span> {{ content.venue }}
</h5>
      
        </div>

        <div class="ag-courses-item_date-box">
            <span style="font-weight: bold;">Date: </span>
          <span class="ag-courses-item_date">
           {{ date(content.evtStart) }} - {{ date(content.evtEnd) }}
          </span>
        </div>
      </a>

    </div>
  </div>
</div>

</div>




<!-- modal -->

<div>    
      <modal v-if="modalcode" @close="modalcode = false">
        <slot >
        <div class="modal-mask">
          <div class="modal-wrapper" >
            <div class="modal-container" id="modalcode" style=" width: 40%; min-width: 400px; border-radius: 20px;">

              <div class="modal-body">
                <slot>
<div style="width: 100%; height: 20px;">
  
  <svg @click="modalcode = false" style="float: right; cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi-bi-x-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
</div>

                  <div style="width: 95%; margin: 0 auto; padding-top: 20px;">
    <form class="design1" v-on:submit.prevent="">
                <div class="question" style="width: 100%;">

    <input v-model="codeHolder" @keyup="codeVerification ()" type="text" style="width: 100%;" required/>
    
    <label>Enter Code</label>
  </div>

            </form>
</div>  

                </slot>
              </div>

            </div>
          </div>
        </div>
      </slot>
      </modal>
    </div>
</template>