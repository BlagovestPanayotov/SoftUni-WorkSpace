function bonusPoints(input) {
  let points = Number(input[0])
  let extraPoints = 0

  if (points <= 100) {
    extraPoints += 5
  } else if (points > 1000) {
    extraPoints += points * 0.1
  } else {
    extraPoints += points * 0.2
  }

  if (points % 2 === 0) {
    extraPoints += 1
  }

  if (points % 5 === 0 && points % 2 !== 0) {
    extraPoints += 2
  }

  console.log(extraPoints)
  console.log(points + extraPoints)
}
