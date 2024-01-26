<style scoped>
.grid-container {

  display: grid;
  grid-template-columns: auto auto;
  /* background-color: #c0c0c0; 
   padding: 10px; */
}

.grid-item:nth-child(1){
  width: 600px;

}
.grid-item:nth-child(2){
  width: 100%;

}
.grid-item {
  /* background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);  */
   padding: 20px;
  text-align: center;
}
.tblData th{
  color: black;
  background-color: #7bc3f5;
  height: 35px;
  padding-left: 15px;
  text-align: left  ;
  font-size: 20px;
}
.tblData th:first-child{
border-top-left-radius: 20px;
}
.tblData th:last-child{
  border-top-right-radius: 20px;
}
.tblData tr:nth-child(even){
  background-color: rgb(241, 241, 241);
}
.tblData tr{
  font-size: 20px;
  padding-left: 15px;
  text-align: left;
}
.tblData td:nth-child(2){
  min-width: 100px;
  width: 40%;
}
.tblData th:nth-child(2){
  min-width: 100px;
  width: 40%;
}
.tblData{
  width: 100%;
}
#iconMaintenance{
  width: 200px;
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
  background: #cbd1fe; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #acb5f7; 
}


.bi-bi-arrow-left-square:hover{
background-color: red;
fill: white;
}

@media only screen and (max-width: 639px) {
  .grid-container {
display: inline-block;
}
.tblData th{
  font-size: 15px;
}
.tblData tr{
  font-size: 10px;
}
.grid-item:nth-child(1){
  width: 100%;
}
.grid-item:nth-child(2){
  width: 100%;
}
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

async function clickCallback (pageNum) {
 
      }
//const rootLink = ref(`https://localhost:7091/api/`)
const rootLink = ref(`https://apps.fastlogistics.com.ph/scanapi/api/`)

const check = ref('none')
const myinput = ref(null)
const header = ref('')
const route = useRoute();
onMounted(() =>{
firstrun()
if (myinput.value) {
  myinput.value.focus()
  
  window.addEventListener('keydown', () => {
        if (myinput.value) {
          myinput.value.focus()
        }
      })

      }
})

const pageHeadersData = ref([])
const todayEmployees = ref([])
const attendeesPercentage = ref('')
const paginationPage = ref(0)
function date(value) {
      return moment(value).format('MMMM D, YYYY');
    }
    function dateTime(value) {
      return moment(value).format('MM/DD/yyyy hh:mm A');
    }

async function firstrun(){

  pageHeadersData.value =(await axios.get(`${rootLink.value}EmsEventschedulemembers/getEventDetails?eventId=${route.query.id}`))

     await axios.get(`${rootLink.value}EmsEventschedulemembers/dataTotalCount?evt=${route.query.id}`).then((res) =>{ 
      if(res.status == 200){

        attendeesPercentage.value = res.data
      
      }else if(res.status == 204){
        console.log(res.status);
      
      }

     }, err => err)


    //  paginationPage.value = 
    //  (await axios.get(`${rootLink.value}EvtEventschedules/datalength?evt=${route.query.id}`))
       

     let formData = new FormData();
                let config = {
                          headers : {
                              'Content-Type' : 'multipart/form-data'
                          }
                      }

        formData.append("evtId",route.query.id)

              axios.post(`${rootLink.value}EmsEventschedulemembers/loggedDatas`,
            formData,config).then(function(res){
             
if(res.status == 200){
  todayEmployees.value = res.data

}

})
onEnter.value = ''
}



const onEnter = ref('')
// function clicks(){
  
//   let timer = 2;
// let interval = setInterval(() => {
//   if (timer === 0) {
//     clearInterval(interval)   
//     onEnter.value =''
//   } else {
//     timer--
  
//   }             
// }, 1000)
// }

const stopper = ref(false)
const stopper1 = ref(false)
const highligth = ref(false)
const alreadyLog = ref(false)
const errorLog = ref(false)

function onDecode (decodedString) {
  camera.value = 'false'

let timer = 1;
let interval = setInterval(() => {
if (timer === 0) {
clearInterval(interval) 
if(cameraOnorOff.value != 'none')  {
camera.value = 'auto'}
} else {
timer--

}             
}, 1000)
  try{
    
    var newDecodedString= decodedString.replace('https://apps.fastlogistics.com.ph/emsmobile2/#/?id=', '')
    var arrQrData = newDecodedString.split('-')
console.log(arrQrData);
  if(stopper1.value == false && !decodedString == false){

    stopper1.value = true
    stopper.value = true

    if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(async(position) => {
 let formData = new FormData();
                let config = {
                          headers : {
                              'Content-Type' : 'multipart/form-data'
                          }
                      }
                      
        formData.append("evtId",route.query.id)
        formData.append("memberevtId",newDecodedString.includes('-')?arrQrData[0]:'')
        formData.append("memberId",newDecodedString.includes('-')? arrQrData[1]:newDecodedString)
        formData.append("longitude",position.coords.longitude)
        formData.append("latitude",position.coords.latitude)

              axios.post(`${rootLink.value}EmsEventschedulemembers/userLogin`,
            formData,config).then(function(res){
          
                if(res.status == "200"){
                  errorLog.value = false
                  todayEmployees.value = res.data   
                  stopper.value = false
                  onEnter.value =''
                  check.value = 'inline-block'
                  highligth.value = true
                  firstrun()
                 // header.value = `${res.data.employeeId} ${res.data.firstname} ${res.data.middlename} ${res.data.lastname}`
                
                  let timer = 2;
let interval = setInterval(() => {
  if (timer === 0) {
    clearInterval(interval)   
  
    stopper1.value = false
    check.value = 'none'
  } else {
    timer--
  
  }             
}, 1000)

let timerh = 7;
let intervalh = setInterval(() => {
  if (timerh === 0) {
    clearInterval(intervalh)   

    highligth.value = false
  } else {
    timerh--
  
  }             
}, 1000)
               
                  
                  }else if(res.status == "208"){
                    onEnter.value =''
                    check.value = 'inline-block'
                    stopper1.value = false
                    stopper.value = false
                    alreadyLog.value = true
                
                    let timer = 3;
let interval = setInterval(() => {
  if (timer === 0) {
    clearInterval(interval)   
    alreadyLog.value = false
    check.value = 'none'
  } else {
    timer-- 
  
  }             
}, 1000)
                  }
                  else{
  errorLog.value = true
  stopper1.value = false
  check.value = 'inline-block'
  stopper1.value = false
  stopper.value = false
  onEnter.value =''
  let timer = 3;
  let interval = setInterval(() => {
    if (timer === 0) {
    clearInterval(interval)   
    check.value = 'none'
    errorLog.value = false
  } else {
    timer-- 
  }             
}, 1000)
                }

}).catch((error) => {
  errorLog.value = true
  stopper1.value = false
  check.value = 'inline-block'
  stopper1.value = false
  stopper.value = false
 onEnter.value =''
  let timer = 3;
let interval = setInterval(() => {
  if (timer === 0) {
    clearInterval(interval)   
    check.value = 'none'
    errorLog.value = false
   
   
  } else {
    timer-- 
  
  }             
}, 1000)
            })

})
  }
  }else{
    camera.value = 'false'

    let timer = 1;
let interval = setInterval(() => {
  if (timer === 0) {
    clearInterval(interval)   
    if(cameraOnorOff.value != 'none'){
      camera.value = 'auto'
    }
    
  } else {
    timer--
  
  }             
}, 500)
  }
 
  }catch(e){
    console.log('error:'+e);
    stopper.value = false
    onEnter.value =''
    check.value = 'inline-block'
    stopper1.value = false
    check.value = 'none'
  }

  }

  const cameraOnorOff = ref('none')
  const camera = ref('false')
function cameras(){

if(cameraOnorOff.value == 'none'){
  cameraOnorOff.value = 'inline-block'
  camera.value = 'auto'
}
else if(cameraOnorOff.value == 'inline-block'){
  cameraOnorOff.value = 'none'
  camera.value = 'false'
}
}
</script>

<template>
<div style="width: 100%;height: 50px; background-color: #f8f8ff; box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);">
    <img  @click="router.push({'name':'dashBoard'})" 
     style="width: 140px; float: left; padding: 10px;cursor: pointer;" src="../assets/fastLogo.png">

    <svg @click="router.push({'name':'dashBoard'})" 
    style="float: right; margin: 10px; cursor: pointer;" 
     xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi-bi-arrow-left-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>

<button @click="cameras()" 
style="border: transparent;background-color: transparent;float: right" >
               
                <img v-if="cameraOnorOff == 'inline-block'" style="width: 40px;" src="../assets/camera2.png">
                <img v-else style="width: 40px;" src="../assets/camera1.png">
                <!-- <p>Camera {{ cameraOnorOff == 'inline-block'? "on" : "off"}}</p> -->
      </button>

</div>
<br>

<div style="margin: 0 auto;">
  <h1 style="font-weight: bold;">{{ pageHeadersData.data == null?'':pageHeadersData.data.title }}</h1>
  <h3> <span style="font-weight: bold;"> Day:</span> {{ pageHeadersData.data == null?'No Data': pageHeadersData.data.day }}</h3>
  <h3> <span style="font-weight: bold;">Venue:</span> {{ pageHeadersData.data == null?'No Data': pageHeadersData.data.venue }}</h3>
</div>  


<div class="grid-container"> 

<div class="grid-item">



        <div v-if="camera == 'auto'" :style="{'width':'250px','height':'250px', 'margin':'0 auto','display':cameraOnorOff}">
            <qrcode-stream @decode="onDecode"></qrcode-stream>
        </div>

         
  <div v-if="camera != 'auto'" :style="{'display':check}">
    <svg v-if="alreadyLog == false && errorLog == false"  xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="#28B463" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
<svg v-if="alreadyLog == true && errorLog == false" xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="#E2DF06" class="bi bi-exclamation-octagon-fill" viewBox="0 0 16 16">
  <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
<img v-if="errorLog == true" :style="{'width':'150px'}" src="../assets/x.png">
<h1 v-if="errorLog == true" style="color: red ;">Error</h1>

    <!-- <img :style="{'width':'300px'}" src="../assets/check1.gif"> -->
    <h1 v-if="alreadyLog == false && errorLog == false" style="color: #28B463 ;">Success</h1>
    <h1 v-if="alreadyLog == true && errorLog == false" style="color: #E2DF06 ;">Already Logged in</h1>
  </div>

  <div :style="{'display':stopper == true? 'inline-block':'none'}">
    <img :style="{'width':'150px'}" src="../assets/webDefaultLoading.gif">
  
  </div>
<br>
        
        <div :style="{'display':check == 'none'? stopper == false?'inline-block':'none':'none'}">
    <h1>Scan QR here</h1>

    <!-- <img v-if="cameraOnorOff == 'inline-block'" id="iconMaintenance" src="../assets/arrow.png"> -->
    <img v-if="cameraOnorOff == 'none'" id="iconMaintenance" src="../assets/barcode-scan.png">
  <!-- <h1 style="font-size: 5em;">↵</h1>   -->
  </div>


</div>

<div class="grid-item" >




<input 
      v-model="onEnter"
      @keyup.enter="onDecode (onEnter)"
      @keypress="clicks"
      type="text"
      ref="myinput" 
      :style="({'width':'0','height':'0','border':'none','outline':' none' })"
      >

  <label style="width: 100%;text-align: right;">
    Attendees: {{ todayEmployees.length }} - Percentage {{ attendeesPercentage == ''? "0%": parseInt(attendeesPercentage)+'%'}}
  </label>


  <table class="tblData">
        <th>Fullname</th>
        <th>Log Date & Time</th>
  </table>
  <div style="overflow: auto; max-height: 55vh;">
        <table class="tblData">
<tr v-for="content,index in todayEmployees">
<td v-if="highligth == true && index == 0" style="background-color: #a2ff75;color: #4d4d4d;">{{ content.firstname }} {{ content.middlename }} {{ content.lastname }}</td>
<td v-if="highligth == false && index == 0" style="color: #4d4d4d;">{{ content.firstname }} {{ content.middlename }} {{ content.lastname }}</td>
<td v-if="index != 0" style="color: #4d4d4d;">{{ content.firstname }} {{ content.middlename }} {{ content.lastname }}</td>
<td v-if="highligth == true && index == 0" style="background-color: #a2ff75;color: #4d4d4d;" >{{ dateTime(content.logdate) }}</td>
<td v-if="highligth == false && index == 0" style="color: #4d4d4d;">{{ dateTime(content.logdate) }}</td>
<td v-if="index != 0" style="color: #4d4d4d;">{{ dateTime(content.logdate) }}</td>
        </tr>
</table></div>

    </div>


</div>


</template>
