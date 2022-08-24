function constructionCrew(input) {

    let output = JSON.parse(JSON.stringify(input));

    if (output.dizziness) {
        output.levelOfHydrated += 0.1 * output.weight * output.experience;
        output.dizziness = false;
    }

    return output;

}
constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
});
constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
});
constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
});