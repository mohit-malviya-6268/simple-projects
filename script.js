let input = document.querySelector('input');
let qrdiv = document.getElementById("qrDiv");
let qrimg = document.getElementById("qrImg")

let qrgenerator = () =>{
     if(input.value.length > 0){
          qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value
          qrdiv.classList.add("show-img")
          input.value = "";

     }
     else{
          input.classList.add('error');
           
          setTimeout(() =>{
               input.classList.remove('error')
               
               
          },1000)
     }
    
}