(()=>{

   function callApi() {
      fetch('https://api.openweathermap.org/data/2.5/onecall?lat=43.842986&lon=20.953148&lang=sr&appid=23121e705933ec1c73e50fe68de58b25&units=metric'
      ).then(response => response.json()).then(data => {
         weatherUI(data);
      });
   }
   
   function weatherUI(data) {
      document.getElementById('temperature').textContent = `${data['current']['temp']} степени целзијуса`;
      document.getElementById('windSpeed').textContent = `${data['current']['wind_speed']} метара у секунди`;
      document.getElementById('descr').textContent = `${data['current']['weather'][0]['description']}`;
      document.getElementById('humidity').textContent = `${data['current']['humidity']}%`;
      if(data['alerts'][0]['event']){
         let pocetak=new Date((data['alerts'][0]['start'])*1000).toDateString();
         let kraj=new Date((data['alerts'][0]['end'])*1000).toDateString();
         document.getElementById('alerts').textContent = `${data['alerts'][0]['event']}`;
         document.getElementById('alertsTime').textContent = `од ${pocetak} до ${kraj}`;

      }
   }
    
    callApi();
   })();