
const input = document.querySelector('#search-bar')
const btn = document.querySelector('#btn')
const output = document.querySelector('#output')

const API='http://api.openweathermap.org/data/2.5/weather?q=';
const key ='&appid=b067377a72c98ae6963cdae2e35408d9';




const renderWeather =(data)=>{
    console.log(data);
    let card = document.createElement('div')
    card.className = 'card'
    let name = document.createElement('h3')
    let name_country = document.createElement ('h3')
    let image = document.createElement('image')
    let temp = document.createElement('p')
    let description = document.createElement('p')
    let humidity = document.createElement('p')
    let speed = document.createElement('p')
    

    name.innerHTML = 'City : ' + data.name;
    name_country.innerHTML = 'Country : ' +   data.sys.country
    temp.innerHTML = 'Temperature : ' + Math.round(data.main.temp-273) + '˚C ';
    description.innerHTML = data.weather[0].description;
    humidity.innerHTML = 'Humidity : ' + data.main.humidity + ' % ';
    speed.innerHTML = 'Wind speed : ' + data.wind.speed +  ' km/h ';
    
    
    output.append(card)
    card.append(name, name_country, image, temp, description, humidity, speed)
   
    card.classList.add('card')
}

const getWeather = async(e)=>{
    e.preventDefault()
const value = input.value    
const url = API+value+key
const req = await fetch(url)
const res = await req.json()

const loading = document.createElement('h5')
loading.className = 'loading'
loading.innerHTML = `<div class="d-flex justify-content-center">
<div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`
output.append(loading)
    
setTimeout(() => {
    output.innerHTML = ''
    renderWeather(res)
}, 2000);
}

btn.onclick=(e)=>{
    getWeather(e)
    input.value=''
    output.innerHTML=''
}
  