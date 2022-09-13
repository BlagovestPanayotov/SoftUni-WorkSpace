function filterEmployees(employees, criteria) {

    const currentEmploees = JSON.parse(employees);
    const [prop, value] = criteria.split('-');

    currentEmploees
        .filter(x => {
            if (criteria === 'all') {
                return true;
            } else {
                return x[prop] === value;
            }
        })
        .forEach((x, i) => {
            console.log(`${i}. ${x['first_name']} ${x['last_name']} - ${x.email}`);
        })

}
filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female')