function editElement(element, match, replace) {
    let pattern = new RegExp(match, 'g');
    let text = element.textContent.split(pattern).join(replace);
    element.textContent = text;
}