function weatherForecast(input){

    let temp = Number(input[0]);

    if (temp >= 26 && temp <= 35){
        console.log('Hot');
    }else if (temp >= 20.1 && temp < 26){
        console.log('Warm');
    }else if (temp >= 15 && temp < 20.1){
        console.log('Mild');
    }else if (temp >= 12 && temp < 15){
        console.log('Cool');
    }else if (temp >= 5 && temp < 12){
        console.log('Cold');
    }else{
        console.log('unknown');
    }

}

weatherForecast(['ghdh']);