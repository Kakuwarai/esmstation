<style scoped>
body, html {   
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display:table;
}
body {
    display:table-cell;
    vertical-align:middle;
}
/* form */
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
</style>


<template>
    <!-- <div style="width: 100%; height: 100vh; background-color: antiquewhite;">    </div> -->
        <div style="background-color: aliceblue; margin: 0 auto; width: 500px; height: 500px;">
        <br>
            <form class="design1">
                <div class="question" >
    <input  type="text" required/>
    <label>SBU Name</label>
  </div>

            </form>
        </div>




</template>