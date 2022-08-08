function sortAnArrayByTwoCriteria(input) {
    input.sort((a, b) => {
        return a.length - b.length ||
            a.localeCompare(b);
    });

    console.log(input.join('\n'));
}
sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
