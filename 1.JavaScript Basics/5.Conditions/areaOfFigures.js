function areaOfFigures(input) {
  let figure = input[0]

  if (figure === 'square') {
    let side = Number(input[1])

    let area = side * side

    console.log(area.toFixed(3))
  }

  if (figure === 'rectangle') {
    let sizeA = Number(input[1])
    let sizeB = Number(input[2])

    let area = sizeA * sizeB

    console.log(area.toFixed(3))
  }

  if (figure === 'circle') {
    let radius = Number(input[1])

    let area = radius * radius * Math.PI

    console.log(area.toFixed(3))
  }

  if (figure === 'triangle') {
    let side = Number(input[1])
    let hight = Number(input[2])

    let area = (side * hight) / 2

    console.log(area.toFixed(3))
  }
}

areaOfFigures(["triangle",
"4.5",
"20"]);
