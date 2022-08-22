function listOfNames(names) {
    let num = 1;
    names.sort((a, b) => a.localeCompare(b)).forEach(name=>{
        console.log(`${num}.${name}`);
        num++;
    })
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
