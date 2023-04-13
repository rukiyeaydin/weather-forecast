const url='https://api.openweathermap.org/data/2.5/'
const key='b0ab4dc798ba6753d4268b0cfbd38b8b'

const setQuery = (e) => {
    if(e.keyCode == '13')
    getResult(arama.value)
}

const getResult=(sehirName) =>{
    let query=`${url}weather?q=${sehirName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)
}
const displayResult = (result)=> {
    let sehir=document.querySelector('.sehir')
    sehir.innerText=`${result.name},${result.sys.country}`

    let sicaklik=document.querySelector('.sicaklik')
    sicaklik.innerText=`${Math.round(result.main.sicaklik)} derece`

    let havaDurum=document.querySelector('.havaDurum')
    havaDurum.innerText=result.weather[0].havaDurumription

    let minmax=document.querySelector('.minmax')
    minmax.innerText=`${Math.round(result.main.sicaklik_min)}°C- ${Math.round(result.main.sicaklik_max)}°C` 
}

const arama=document.getElementById('arama')
arama.addEventListener('keypress',setQuery)