function extract(content) {
    let text = document.getElementById(content).textContent;
    let pattern = /\((.*?)\)/g;
    let match = pattern.exec(text);

    let result = [];

    while (match !== null) {
        result.push(match[1]);
        match = pattern.exec(text);
    }

    return result.join('; ');

}