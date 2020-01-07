<template>
   <div>
       <div class="box">
           <label aria-hidden="true" class="v-label theme--light" :style="{transform: !foucsPoint && val === ''? 'translateY(0px) scale(1)' : 'translateY(-18px) scale(.75)'}"   style="left: 0px; right: auto; position: absolute;">{{label}}</label>
      
           <input aria-label="First Name" class="input" :class="{inputActive:foucsPoint}" :style="{height: inputHeight, borderStyle: disabled ? 'dotted' : 'solid'}" type="text" @focus="InputFocus" @blur="inputBlur" v-model="val" :disabled="disabled">
      <div class="box2" :class="{ long: foucsPoint, short: blurPoint}">

      </div> 
      
       </div>
   </div>
</template>

<script>
export default {
     props: {
       val: {
         type: String,
         default: ''
       },
       label: {
         type: String,
         default: 'label不能为空'
       },
       inputHeight: {
         type: String,
         default: '25px'
       },
       disabled: {
         type: Boolean,
         default: false
       }
     },
     data(){
          return{
            foucsPoint: false,
            blurPoint: false
          }
      },
  methods:{
      InputFocus(){
         
             this.foucsPoint = true
             this.blurPoint = false
         
      },
      inputBlur(){
             if(this.val){
               this.foucsPoint = true
             }
             this.blurPoint = true
             this.foucsPoint = false
         
      }
  }
}
</script>

<style scoped>
  .box{
      position: relative;
      width: 100%;
  }
  .v-label {
    color: #aaa!important;
    font-size: 14px;
    font-weight: 400;
}
.labelActive{
    transform: translateY(-18px) scale(.75);
     
}
.input{
    background-color: #F8F9FB;
    outline: none;
    border-width: 0;
     transition: .2 ease-in-out !important;
    width: 100%;
    border-bottom-color:#ccc;
    border-bottom-width: 1px;
}
.box2{
    content: '';
  position: absolute;
  width:100%;
  bottom: -0.5px;
  height: 2px;
  overflow: hidden; 
  background-color: #ccc;
 
}
.short{
  animation: animate1 .5s linear ; 
    animation-fill-mode:forwards;
}
.long{
  animation: animate .5s linear; 
    animation-fill-mode:forwards;
}
.inputActive{
    caret-color: #4ace50;
    
}

@keyframes animate {
  0% {
    background-color: blueviolet;
  transform:scaleX(0);
  transform-origin: center center 0;
  }
  25%
  {
    background-color: blueviolet;
    transform:scaleX(0.25);
  transform-origin: center center 0;
  }
  50%
  {
    background-color: blueviolet;
    transform:scaleX(0.50);
  transform-origin: center center 0;
    
  }
  
  75%
  {
    background-color: blueviolet;
    transform:scaleX(0.75);
  transform-origin: center center 0;
    
  }
  100%
  {
    background-color: blueviolet;
     transform:scaleX(1);
  transform-origin: center center 0; 
  }
  
} 

@keyframes animate1 {
  
  0% {
    background-color: blueviolet;
  transform:scaleX(1);
  transform-origin: center center 0;
  }
  25%
  {
    background-color: blueviolet;
    transform:scaleX(0.75);
  transform-origin: center center 0;
  }
  50%
  {
    background-color: blueviolet;
    transform:scaleX(0.50);
  transform-origin: center center 0;
    
  }
  
  75%
  {
    background-color: blueviolet;
    transform:scaleX(0.25);
  transform-origin: center center 0;
    
  }
  100%
  {
      background-color: blueviolet;

     transform:scaleX(0);
  transform-origin: center center 0; 
  }
  
} 
.blurActive{
   
    transform: translateY(0px) scale(1)
}
</style>