const btn = document.getElementById("btn")

function changeText(string){
  console.log("clicked");
  
  let success = async (position)=>{
  console.log(position);
  let latitude = position.coords.latitude
  let longitude = position.coords.longitude
  console.log(`latitude is ${latitude} and longitude is ${longitude}`);
  
  let geoApi = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&` +
  `lon=${longitude}&appid=7a082d64d401039fac18edf10c6a64a1`
  
  await fetch(geoApi)
  .then(res=>res.json())
  .then(data=>{
      console.log(data);
  
  let location = data["name"]

  window.open(`https://api.callmebot.com/whatsapp.php?phone=919621412161&text=${string.split(" ").join("+")}+My+location+is+${location}&apikey=5279059`)

      console.log(location);
  })
  
  console.log(`${latitude} ${longitude}`);
  }
  
  let error = ()=>{
  console.log('unable to find location');
  }
  
  navigator.geolocation.getCurrentPosition(success, error)
  
  console.log(string.split(" ").join("+"));

  
  }

// async function whatsappAlert(string, cityName){
    

//     await fetch(`https://api.callmebot.com/whatsapp.php?phone=919621412161&text=${string.split(" ").join("+")+ 'My Location is ', cityName}&apikey=5279059`);

//       }




// function weatherOutput(){
//     fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York%20City%2CNY?unitGroup=us&key=YOUR_API_KEY&contentType=json", {
//   "method": "GET",
//   "headers": {
//   }
//   })
// // .then((response) => response.json())
// .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.error(err);
// });
// }

let myString = "I need help, I am in danger !!"

btn.addEventListener("click", ()=>{
  changeText(myString)
})

// Weater API code

// let lon; 
// let lat; 
// let temperature = document.querySelector(".temp"); 
// let summary = document.querySelector(".summary"); 
// let loc = document.querySelector(".location"); 
// let icon = document.querySelector(".icon"); 
// const kelvin = 273; 
  
// window.addEventListener("load", () => { 
//   if (navigator.geolocation) { 
//     navigator.geolocation.getCurrentPosition((position) => { 
//       console.log(position); 
//       lon = position.coords.longitude; 
//       lat = position.coords.latitude; 
  
//       // API ID 
//       const api = "7a082d64d401039fac18edf10c6a64a1"; 
  
//       // API URL 
//       const base = 
// `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + 
// `lon=${lon}&appid=7a082d64d401039fac18edf10c6a64a1`; 
  
//       // Calling the API 
//       fetch(base) 
//         .then((response) => { 
//           return response.json(); 
//         }) 
//         .then((data) => { 
//           console.log(data); 
//           temperature.textContent =  
//               Math.floor(data.main.temp - kelvin) + "°C"; 
//           summary.textContent = data.weather[0].description; 
//           loc.textContent = data.name + "," + data.sys.country; 
//           let icon1 = data.weather[0].icon; 
//           icon.innerHTML =  
//               `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`; 
//         }); 
//     }); 
//   } 
// }); 

// weatherOutput()



