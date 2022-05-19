function sumSeconds(input) {
  let firtsPlayer = Number(input[0])
  let secondPlayer = Number(input[1])
  let thirthPlayer = Number(input[2])

  let totalTime = firtsPlayer + secondPlayer + thirthPlayer

  let totalTimeSecond = totalTime % 60
  let totalTimeMinutes = Math.floor(totalTime / 60)

  if (totalTimeSecond < 10) {
    console.log(`${totalTimeMinutes}:0${totalTimeSecond}`)
  } else {
    console.log(`${totalTimeMinutes}:${totalTimeSecond}`)
  }
}
sumSeconds(['50', '50', '49'])
