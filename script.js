// function validateform() {
//     let x = document.forms["myform"]["fname"].value;
//     if (x == "") {
//       alert("Name cannot be empty!");
//       return false;
//     }
//   }
// //   function displayDateandTime(){
// //    //document.getElementsById("demo").innerHTMl=Date();
// //    document.getElementById("demo").innerHTML = Date();
// //   }
//   function mouseOn(){
//     document.getElementById("box").innerHTML="Chal be chutiye!!";
//   }
//   function mouseOff(){
//     document.getElementById("box").innerHTML="Aye Lund Aye Vapas Aana Idhar!";
//   }
//   let element=document.getElementById("demo");
//     element.addEventListener("click", myFunction);

// function myFunction() {
//   alert ("Hello World!");
// } 
let imageElement=document.querySelector("#unsplashImage");
let appId="9_jwuDWKrYfPAibVzfxcqZVd4oBXWwpnw13YCu1GbSk";
let url=`https://api.unsplash.com/photos/random/?client_id=${appId}`;
fetch(url)
.then(function (response){
    return response.json();
})
.then(function (jsondata){
    imageElement.src=jsondata.urls.regular;
})