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
      document.getElementById('uvi').textContent = `${data['current']['uvi']}`;
      document.getElementById('min').textContent=`${data['daily'][0]['temp']['min']} степени целзијуса`;
      document.getElementById('max').textContent=`${data['daily'][0]['temp']['max']} степени целзијуса`;
      document.getElementById('humidity').textContent = `${data['current']['humidity']}%`;
      if(data['alerts'][0]['event']){
        alerts(data);

      }
   }
    function alerts(data){
       let event=data['alerts'][0]['event'];
       let pocetak=new Date((data['alerts'][0]['start'])*1000).toDateString();
       let kraj=new Date((data['alerts'][0]['end'])*1000).toDateString();

       let currentWeather=document.getElementById('currentWeather');
       currentWeather.innerHTML+=`
       <tr class="redAlert"><th>Постоји упозорење</th>        <th>${event}</th>
       </tr>
       <tr>
       <td> Од</td>
       <td>${pocetak}</td>
       </tr>
       <tr>
       <td>До</td>
       <td>${kraj}</td>
       <tr>`
    }
    callApi();
   })();