const API_KEY =  `3265874a2c77ae4a04bb96236a642d2f`
let form = document.querySelector("form")
let search = document.querySelector("#search")
let weather = document.querySelector("#weather")


const getweather = async (city)=>{
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      const response = await fetch(api)
      const data = await response.json()
      showWeather(data)
      console.log(data)
}

const showWeather = (data) =>{
    weather.innerHTML = `  <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  </div>
<div>
<h2>${data.main.temp}</h2>
<h2>${data.weather[0].main}</h2>
</div>`
}





form.addEventListener("submit", function(event){
    getweather(search.value)
   event.preventDefault()
})

