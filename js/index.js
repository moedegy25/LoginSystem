
var listOfuser =[]

if (localStorage.getItem("listOfMyuser")!=null){

  listOfuser=JSON.parse(localStorage.getItem("listOfMyuser"))
}


var userpasswordInput = document.getElementById("password") ;
var useremailInput = document.getElementById("email") ;
var currentUserIndex ;


function signin(){
  if(!userpasswordInput.value==""&&!useremailInput.value==""){

     if(founduser())  {
      showSucessAlert()
      setTimeout(function(){        window.location.href = `index3.html?UserId=${encodeURIComponent(currentUserIndex)}`; }, 2300);
      console.log("found")
     } else{
      swal({
        title: "incorrect email or password :",
        icon: "error",
      });
     // sweat alert code
    
     }
    } else{
      swal({
        title: " All inputs is required :",
        icon: "warning",
      });
     // sweat alert code
    

    }
}

function founduser() {

  for(var i=0;i<listOfuser.length;i++){
  
     if(listOfuser[i].email==useremailInput.value){
        if(listOfuser[i].password==userpasswordInput.value){
          currentUserIndex=i
          return true; 
  
        }
     } 
  
   }


}

function showSucessAlert(){
  document.getElementById("notification").style.animation= "none"
  setTimeout(function(){document.getElementById("notification").style.animation= "notification 2s"
    document.getElementById("notification").style.display= "block"
}, 5);
  
 
  }
  


