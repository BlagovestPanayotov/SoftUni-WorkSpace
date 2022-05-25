function lunchBreak(input) {
  let name = input[0]
  let episodeDuration = Number(input[1])
  let brakeDuration = Number(input[2])

  let lunchTime = brakeDuration / 8
  let relaxTime = brakeDuration / 4

  let neededTime = episodeDuration + lunchTime + relaxTime
  let diffrence = Math.ceil(Math.abs(neededTime - brakeDuration))

  if (neededTime <= brakeDuration) {
    console.log(
      `You have enough time to watch ${name} and left with ${diffrence} minutes free time.`,
    )
  } else {
    console.log(
      `You don't have enough time to watch ${name}, you need ${diffrence} more minutes.`,
    )
  }
}
lunchBreak(['Teen Wolf', '48', '60'])
