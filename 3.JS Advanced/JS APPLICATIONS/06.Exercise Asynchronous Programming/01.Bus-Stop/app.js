async function getInfo() {
    const stopId = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const busesUl = document.getElementById('buses');

    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + stopId.value;

    try {
        stopName.textContent = ''
        busesUl.textContent = '';
        const response = await fetch(url);
        const data = await response.json();

        stopName.textContent = data.name;
        console.log(data);
        for (const bus in data.buses) {
            const li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`
            busesUl.appendChild(li)
        }

    } catch (error) {
        stopName.textContent = 'Error'
    }
}