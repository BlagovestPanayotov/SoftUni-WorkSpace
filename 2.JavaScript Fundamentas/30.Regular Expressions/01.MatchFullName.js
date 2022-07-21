function matchFullName(input) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm;

    let validNames = [];
    let validName = pattern.exec(input);

    while (validName !== null) {
        validNames.push(validName);
        validName = pattern.exec(input);

    }

    console.log(validNames.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
)