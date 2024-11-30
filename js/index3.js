var listOfuser =[]

if (localStorage.getItem("listOfMyuser")!=null){

  listOfuser=JSON.parse(localStorage.getItem("listOfMyuser"))
}


const params = new URLSearchParams(window.location.search);
const UserId = params.get("UserId");

document.getElementById("userpage").innerHTML=listOfuser[UserId].name