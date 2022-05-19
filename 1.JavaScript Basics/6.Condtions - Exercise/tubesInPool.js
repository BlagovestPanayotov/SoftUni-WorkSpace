function tubesInPool(input) {
  let poolCapacity = Number(input[0])
  let flowRate1 = Number(input[1])
  let flowRate2 = Number(input[2])
  let time = Number(input[3])

  let waterFromPipe1 = time * flowRate1
  let waterFromPipe2 = time * flowRate2

  let totalWater = waterFromPipe1 + waterFromPipe2
  let totalWaterPercent = totalWater / (poolCapacity / 100)

  let diff = poolCapacity - totalWater

  if (diff >= 0) {
    let waterFromPipe1Percent = waterFromPipe1 / (totalWater / 100)
    let waterFromPipe2Percent = waterFromPipe2 / (totalWater / 100)
    console.log(
      `The pool is ${totalWaterPercent.toFixed(
        2,
      )}% full. Pipe 1: ${waterFromPipe1Percent.toFixed(
        2,
      )}%. Pipe 2: ${waterFromPipe2Percent.toFixed(2)}%`,
    )
  } else {
    console.log(
      `For ${time} hours the pool overflows with ${Math.abs(diff)} liters.`,
    )
  }
}

tubesInPool(['100', '100', '100', '2.5'])
