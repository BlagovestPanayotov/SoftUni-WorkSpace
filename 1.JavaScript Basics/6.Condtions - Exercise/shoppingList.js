function shoppingList(input) {
  let budget = Number(input[0])
  let countVideo = Number(input[1])
  let countProcessor = Number(input[2])
  let countRAM = Number(input[3])

  let priceVideo = 250
  let finalVideoPrice = countVideo * priceVideo

  let priceProcessor = finalVideoPrice * 0.35
  let finalProcessorPrice = priceProcessor * countProcessor

  let priceRAM = finalVideoPrice * 0.1
  let finalRAMPrice = priceRAM * countRAM

  let finalPrice = finalVideoPrice + finalProcessorPrice + finalRAMPrice

  if (countVideo > countProcessor) {
    finalPrice = finalPrice * 0.85
  }

  let diff =budget - finalPrice

  if (diff >= 0) {
    console.log(`You have ${diff.toFixed(2)} leva left!`)
  } else {
    console.log(
      `Not enough money! You need ${Math.abs(diff).toFixed(2)} leva more!`,
    )
  }
}

shoppingList(['900', '2', '1', '3'])
