function sortArray(numbers, order) {
    
    const orderer = {
        'asc': (arr) => {
            return arr.sort((a, b) => a - b);
        },
        'desc': (arr) => {
            return arr.sort((a, b) => b - a);
        }
    }
    
    return orderer[order](numbers);


}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));