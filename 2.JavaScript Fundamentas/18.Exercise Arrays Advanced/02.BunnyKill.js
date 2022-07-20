function bunnyKill(arr) {
    let coordinatesOfTheBombBunniesAsArr = arr
      .pop()
      .split(" ")
      .map((el) => el.split(",").map((x) => Number(x)));
    let matrixOfHangars = [];
  
    for (let i = 0; i < arr.length; i++) {
      let rowOfMatrixAsArr = arr[i].split(" ").map(Number);
      matrixOfHangars.push(rowOfMatrixAsArr);
    }
  
    let damage = 0;
    let counterOfKills = 0;
  
    for (let i = 0; i < coordinatesOfTheBombBunniesAsArr.length; i++) {
      let currBombBunnyRow = coordinatesOfTheBombBunniesAsArr[i][0];
      let currBombBunnyCol = coordinatesOfTheBombBunniesAsArr[i][1];
      let damageOfCurrExplosion =
        matrixOfHangars[currBombBunnyRow][currBombBunnyCol];
      let startRow = Math.max(0, currBombBunnyRow - 1);
      let endRow = Math.min(currBombBunnyRow + 1, matrixOfHangars.length - 1);
  
      if (damageOfCurrExplosion <= 0) {
        continue;
      }
  
      for (let j = startRow; j <= endRow; j++) {
        let startCol = Math.max(0, currBombBunnyCol - 1);
        let endCol = Math.min(
          currBombBunnyCol + 1,
          matrixOfHangars[0].length - 1
        );
  
        for (let k = startCol; k <= endCol; k++) {
          matrixOfHangars[j][k] -= damageOfCurrExplosion;
        }
      }
  
      damage += damageOfCurrExplosion;
      counterOfKills++;
    }
  
    for (let i = 0; i < matrixOfHangars.length; i++) {
      for (let j = 0; j < matrixOfHangars[0].length; j++) {
        if (matrixOfHangars[i][j] > 0) {
          damage += matrixOfHangars[i][j];
          counterOfKills++;
        }
      }
    }
  
    console.log(damage);
    console.log(counterOfKills);
  }
  bunnyKill([
    "5 10 15 20",
    "10 10 10 10",
    "10 15 10 10",
    "10 10 10 10",
    "2,2 0,1",
  ]);
  bunnyKill(["10 10 10", "10 10 10", "10 10 10", "0,0"]);