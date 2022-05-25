function toyShop(input) {
  let neededMoney = Number(input[0])
  let puzzleCount = Number(input[1])
  let dollCount = Number(input[2])
  let bearsCount = Number(input[3])
  let minionsCount = Number(input[4])
  let truckCount = Number(input[5])

  let toyCount =
    puzzleCount + dollCount + bearsCount + minionsCount + truckCount
  let earnedMoney =
    puzzleCount * 2.6 +
    dollCount * 3 +
    bearsCount * 4.1 +
    minionsCount * 8.2 +
    truckCount * 2

  if (toyCount >= 50) {
    earnedMoney = earnedMoney * 0.75
  }

  earnedMoney = earnedMoney * 0.9

  let diffrence = Math.abs(earnedMoney - neededMoney)

  if (earnedMoney >= neededMoney) {
    console.log(`Yes! ${diffrence.toFixed(2)} lv left.`)
  } else {
    console.log(`Not enough money! ${diffrence.toFixed(2)} lv needed.`)
  }
}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"]);
