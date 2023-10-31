const btn = document.getElementById("btn")

function changeText(string){
  console.log("clicked");
  
  let success = async (position)=>{
  console.log(position);
  let latitude = position.coords.latitude
  let longitude = position.coords.longitude
  console.log(`latitude is ${latitude} and longitude is ${longitude}`);
  
  let geoApi = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&` +
  `lon=${longitude}&appid=<YOUR_API_KEY>`
  
  await fetch(geoApi)
  .then(res=>res.json())
  .then(data=>{
      console.log(data);
  
  let location = data["name"]

  window.open(`https://api.callmebot.com/whatsapp.php?phone=<YOUR_PHONE_NO>&text=${string.split(" ").join("+")}+My+location+is+${location}&apikey=<YOUR_API_KEY>`)

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

let myString = "I need help, I am in danger !!"

btn.addEventListener("click", ()=>{
  changeText(myString)
})


