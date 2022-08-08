function songs(input) {

    let soundsCount = input.shift();
    let typeWantedSongs = input.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type,
                this.name = name,
                this.time = time
        }
    }

    let songsOfObjInArr = [];

    for (let song of input) {
        let currentSong = song.split('_');
        songsOfObjInArr.push(new Song(currentSong[0], currentSong[1], currentSong[2]));
    }


    if (typeWantedSongs === 'all') {
        for (let song of songsOfObjInArr) {
            console.log(song.name);
        }
    } else {
        for (let song of songsOfObjInArr) {
            if (song.type === typeWantedSongs) {
                console.log(song.name);
            }
        }
    }

}



songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);