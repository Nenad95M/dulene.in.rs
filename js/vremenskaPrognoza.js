fetch('https://api.openweathermap.org/data/2.5/weather?lat=43.842986&lon=20.953148&lang=sr&appid=23121e705933ec1c73e50fe68de58b25&units=metric'
).then(response=>response.json()).then(data=>{
 let temperatura=data['main']['temp'];
 let description=data['weather'][0]['description'];
 let wind=data['wind']['speed'];
temperature.textContent=`${temperatura} степени`;
descr.textContent=`${description}`;
windSpeed.textContent=`${wind}`;
});
 
const temperature= document.getElementById('temperature');
const windSpeed=document.getElementById('windSpeed');
const descr=document.getElementById('descr');
