function weatherForecast(input){

    if (input[0].toLowerCase() == "sunny"){
        console.log("It's warm outside!");
    }else{
        console.log("It's cold outside!");
    }

}

weatherForecast(["sunY"]);