(()=>{

   function callApi() {
      fetch('https://api.openweathermap.org/data/2.5/weather?lat=43.842986&lon=20.953148&lang=sr&appid=23121e705933ec1c73e50fe68de58b25&units=metric'
      ).then(response => response.json()).then(data => {
         weatherUI(data);
      }).catch(function (err) {
         console.log(err);
      });
   }

 function weatherUI(data) {
      document.getElementById('temperature').textContent = `${data['main']['temp']} степени целзијуса`;
      document.getElementById('windSpeed').textContent = `${data['wind']['speed']} метара у секунди`;
      document.getElementById('descr').textContent = `${data['weather'][0]['description']}`;
      document.getElementById('humidity').textContent = `${data['main']['humidity']}%`;
   }
 
 weatherUI(callApi());
})();
