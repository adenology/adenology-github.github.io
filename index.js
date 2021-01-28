var myPlayer = document.getElementById('myVideo')

myPlayer.addEventListener("timeupdate", function(){
    if (myPlayer.currentTime  >= 38.9 && myPlayer.currentTime < 39) { 
        myPlayer.pause();       
    } 
      
      document.onkeypress = function(e){
          console.log(e.key);
          if (e.key === 'f') {
              myPlayer.play();
            
          }
      };

    });




    

 
