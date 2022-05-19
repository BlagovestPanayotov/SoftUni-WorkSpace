function seriesCalculator(input) {
    let nameSerial = input[0];
    let countSeasons = Number(input[1]);
    let countEpisodesPSeasons = Number(input[2]);
    let timePerEpisode = Number(input[3]);

    let totalTime = ((timePerEpisode * 1.2) * countEpisodesPSeasons) * countSeasons + (countSeasons * 10);
    console.log(`Total time needed to watch the ${nameSerial} series is ${Math.floor(totalTime)} minutes.`);


}
seriesCalculator(["Riverdale",
    "3",
    "21",
    "45"]);