const form = document.querySelector("#form");
// const Place = document.querySelector("#place");
// const Date = document.querySelector("#date");
// const Temp = document.querySelector("#temp");
// const minMAx = document.querySelector("#minmax");
// const wind = document.querySelector("#wind");
// const Condition = document.querySelector("#condition")

var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    var inp = form.elements[0].value;
    console.log(inp);

    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inp}&units=metric&appid=a4ea02e164d663d840197a0655eac7fe`;


    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        var temp=data.main.temp;
        var minTemp=data.main.temp_min;
        var maxTemp=data.main.temp_max;
        var windSpeed=data.wind.speed;
        var condition=data.weather.main;  
        
        
        // $("#place").text(inp);
        $("#place").append(inp);
        $("#temp").append(temp+  "&#8451;");
        $("#date").append(date);
        $("#min").append(minTemp + "&#8451; /" );
        $("#max").append(maxTemp+  "&#8451;" );
        $("#wind").append(windSpeed+"m/s");
        $("#condition").append(condition);


    })
    .catch((err)=>{
        console.log(err);
    });



})


