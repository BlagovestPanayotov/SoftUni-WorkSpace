function fancyBarcodes(input) {
    let productPattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;
    let productGroupPattern = /\d/g;

    let productCount = Number(input.shift());
    for (let i = 0; i < productCount; i++) {
        let product = input[i].match(productPattern);
        if (!product) {
            console.log('Invalid barcode');
            continue;
        }

        let group = product[0].match(productGroupPattern);
        if (!group) {
            console.log('Product group: 00');
            continue;
        }

        console.log(`Product group: ${group.reduce((a, b) => a + b)}`);

    }

}
// fancyBarcodes(["3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"]);
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);