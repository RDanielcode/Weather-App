const API_key = '498f85b6371fd0085d2ad9c9787077ce'
const button = document.getElementById('button');
const clear = document.querySelector('.button2')
const results = document.querySelector('.section__results');

const API = `https://api.openweathermap.org/data/2.5/weather?`;


class GetInfo {
    constructor(){

    }

    async fetchInfo(){
        let city = document.getElementById('text');
        const response = await fetch(`${API}q=${city.value}&appid=${API_key}`)
        const data = await response.json()
        console.log(data)

        if(data.cod !== 200){
            const container = document.createElement('div');
        container.innerHTML = `
        <div>
            <h2> Please, enter a valid name </h2>
        </div>`
        results.appendChild(container);
        } else {
            this.showData(data);
        }
    }

    showData(data){
        const degree = Math.trunc(data.main.temp - 273);
        const container = document.createElement('div');
        container.innerHTML = `
        <div>
            <h3 class="data--name">${data.name}, ${data.sys.country}</h3>
            <div class= "data--temp">
                <p class="temp--number">${degree}  <span class="temp--unit">o</span></p>
            </div>
            <img class="weather-image" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="partly_cloudy">
            <p class="data--info">${data.weather[0].description}<br> 
            Humidity: ${data.main.humidity}</p>
        </div>`
        container.classList.add('results--container')
        results.appendChild(container);
    }
}

button.onclick = () => {
    const user = new GetInfo().fetchInfo()
}

clear.onclick = () => {
    results.textContent = '';
}