let cityName = "anaheim"

function loadData(cityName){
  axios.get(`api.openweathermap.org/data/2.5/forecast?q=${cityName}& appid=7ea0095f84bcd85bdb07bc63db853d06`).then(res => {
    const weather = res.loadData

    

  
  
  }).catch(err => console.log(err))

}

loadData(cityName)

document.getElementById("searchBtn").addEventListener('click', event=>{
  event.defaultPrevented()
  cityName = document.getElementById('pokeName').value
  loadData(cityName)
})

