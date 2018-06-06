window.addEventListener("keydown",function(e){
    var keycode=e.which;
    var audio=document.querySelectorAll("audio");
    var keypressed=document.querySelectorAll(".key");
    for(var i=0;i<audio.length;i++){
      var a=audio[i].className;
      if(keycode==a){
        keypressed[i].classList.remove("completed");
        if(!audio[i])return;
        audio[i].currentTime=0;
        audio[i].play();
       setTimeout(function(){
         for(var i=0;i<audio.length;i++){
          keypressed[i].classList.add("completed");
        }
      },0.07);
          }
   }});
