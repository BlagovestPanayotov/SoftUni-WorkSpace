function gramophone(band, album, song) {
    let seconds = (band.length * album.length) * song.length / 2;
    let repetition = seconds / 2.5;
    console.log(`The plate was rotated ${Math.ceil(repetition)} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');