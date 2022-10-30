function solve() {
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const info = document.querySelector('#info span');

    let stopId = {
        name: 'Depot',
        next: 'depot'
    }

    async function depart() {
        info.textContent = 'Loading...'

        const url = `http://localhost:3030/jsonstore/bus/schedule/${stopId.next}`;

        try {
            const response = await fetch(url);
            if(response.status!==200){
                throw new Error
            }
            const data = await response.json();

            stopId = data;

            info.textContent = `Next stop ${stopId.name}`

            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            info.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    function arrive() {

        info.textContent = `Arriving at ${stopId.name}`


        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();