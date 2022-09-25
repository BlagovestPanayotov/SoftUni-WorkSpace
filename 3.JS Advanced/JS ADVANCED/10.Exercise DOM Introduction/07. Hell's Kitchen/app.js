function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      const input = JSON.parse(document.querySelector('#inputs textarea').value);

      const restaurants = {};

      for (let line of input) {

         let [name, workers] = line.split(' - ');
         workers = workers.split(', ');

         if (restaurants.hasOwnProperty(name) === false) {
            restaurants[name] = {};
         }

         for (let worker of workers) {
            const [workerName, workerSalary] = worker.split(' ');
            restaurants[name][workerName] = Number(workerSalary);
         }

      }

      let bestAvgSalary = 0;
      let bestRestaurantName = '';
      let bestRestaurant = {};

      for (let restaurant in restaurants) {
         let totalSalary = 0;
         let counterWorkers = 0;
         for (let worker in restaurants[restaurant]) {
            totalSalary += restaurants[restaurant][worker];
            counterWorkers++
         }
         let currentAvgSalary = totalSalary / counterWorkers;
         if (bestAvgSalary < currentAvgSalary) {
            bestAvgSalary = currentAvgSalary;
            bestRestaurantName = restaurant;
            bestRestaurant = restaurants[restaurant];
         }
      }

      let sortedBestRestaurant = Object.entries(bestRestaurant).sort((a, b) => b[1] - a[1]);

      let workersSalaries = '';

      for (let [name, salary] of sortedBestRestaurant) {
         workersSalaries += `Name: ${name} With Salary: ${salary} `
      }

      let bestRestaurantOutput = `Name: ${bestRestaurantName} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${sortedBestRestaurant[0][1].toFixed(2)}`;
      let bestRestaurantWorkersOutput = workersSalaries.trim();

      document.querySelector('#bestRestaurant p').textContent = bestRestaurantOutput;
      document.querySelector('#workers p').textContent = bestRestaurantWorkersOutput;

   }
}