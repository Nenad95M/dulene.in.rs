fetch('https://api.meteomatics.com/<validdatetime>/<parameters>/<location>/<format>?<optionals>
')
  .then(response => response.json())
  .then(data => console.log(data));