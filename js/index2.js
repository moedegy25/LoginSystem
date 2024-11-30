
var userNameInput = document.getElementById("userName") ;
var userpasswordInput = document.getElementById("password2") ;
var useremailInput = document.getElementById("email2") ;
var listOfinput = document.querySelectorAll(".form-control") ;

var listOfuser =[]

if (localStorage.getItem("listOfMyuser")!=null){

  listOfuser=JSON.parse(localStorage.getItem("listOfMyuser"))
}


function adduser(){
  if(!userNameInput.value==""&&!userpasswordInput.value==""&&!useremailInput.value==""){
  if (checkFormValidity()  ){
    if(!getListOfemails().includes(useremailInput.value)){ //  To check if the user has entered a user name that exists in the list.    
    var user = {
    name : userNameInput.value ,
    password : userpasswordInput.value ,
    email : useremailInput.value 
    }
    listOfuser.push(user)
    localStorage.setItem("listOfMyuser",JSON.stringify(listOfuser))
    clearform();
    console.log(listOfuser)
    removeValidateInput();
    showSucessAlert() 
    } else { 
       swal({
          title: " This email already exists Try another email :",
          icon: "warning",
        });
       // sweat alert code
    }
 
 } else{
 
 
 swal({
    title: "  Email or Password is not valid, Please follow the rules below :",
    text: '»User name must contain at least 4 characters \n » Email must be a valid one \n » The password must contain capital letters,small letters,numbers,and symbols,and at least 8 characters ',
    icon: "error",
  });
 // sweat alert code
 }
 }else{ 

  swal({
    title: " All inputs is required . :",
    icon: "warning",
  });
 // sweat alert code

 }
} 
  


 function clearform(){
  userNameInput.value = ""
  userpasswordInput.value = ""
  useremailInput.value=""
}






function validUser(elmentinput){

  var regex={
    userName:/^[A-Za-z0-9_]{4,}$/,
    email2:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password2:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,

 
  }
 
 if (regex[elmentinput.id].test(elmentinput.value)){

  elmentinput.nextElementSibling.classList.replace("d-block", "d-none")
     // traversing to nextElementSibling in html sequence (alert div)
  if(elmentinput.classList.contains("is-invalid")){
     elmentinput.classList.replace("is-invalid", "is-valid")
     
  }else{elmentinput.classList.add("is-valid")}

  return true 
  
} else{
  elmentinput.nextElementSibling.classList.replace("d-none", "d-block")
  // traversing to nextElementSibling in html sequence (alert div)
  if(elmentinput.classList.contains("is-valid")){
     elmentinput.classList.replace("is-valid", "is-invalid")
     
  }else{elmentinput.classList.add("is-invalid")}
  return false   
 }

}


for(var i=0; i<listOfinput.length;i++){

   
  listOfinput[i].addEventListener('input',function(){


    validUser(this)
  
  
  })
  
  
}


function getListOfemails(){ // return url names  of  bookmark object  from list bookmark (array of object)
  var ListOfemails =[] ;

  for(var i=0 ; i<listOfuser.length ; i++){
     ListOfemails.push(listOfuser[i].email);
}
return ListOfemails
} 


function removeValidateInput(){
  for(var i=0; i<listOfinput.length;i++){
  
     
     if (listOfinput[i].classList.contains('is-valid')){
  
        listOfinput[i].classList.remove('is-valid')   } 
     
  }

}


function checkFormValidity(){

  var Validity=true;
  for(var i=0; i<listOfinput.length;i++){  
     if (!validUser(listOfinput[i])){
        Validity=false;
     } 
  }
  return Validity;
}

function showSucessAlert(){
  document.getElementById("notification").style.animation= "none"
  setTimeout(function(){document.getElementById("notification").style.animation= "notification 2s"
    document.getElementById("notification").style.display= "block"
}, 5);
  
  setTimeout(function(){  window.location.href = `index.html`

  }, 2300);
  }
  

