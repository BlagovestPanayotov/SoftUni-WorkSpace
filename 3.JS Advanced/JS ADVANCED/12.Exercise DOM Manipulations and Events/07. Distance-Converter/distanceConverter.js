function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convert);

    const convertValues = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    function convert() {
        const selectionInput = document.getElementById('inputUnits').value;
        const valueInput = Number(document.getElementById('inputDistance').value);
        const selectionOutput = document.getElementById('outputUnits').value;

        const valueOutput = valueInput*convertValues[selectionInput] / convertValues[selectionOutput];

        document.getElementById('outputDistance').value = valueOutput;


    }
}