// Add more elements to these lists. The contents do not have to be real.
document.addEventListener('DOMContentLoaded', function() {

    const GEOGRAPHY_LIST = [
        {
            country: 'United States',
            capital: 'Washington',
            largestCity: 'New York',
            subdivisionName: 'state',
            subdivisions: [
                {
                    name: 'Louisiana',
                    capital: 'Baton Rouge',
                    largestCity: 'New Orleans',
                    area: 134264,
                },
                {
                    name: 'California',
                    capital: 'Sacramento',
                    largestCity: 'Los Angeles',
                    area: 423970,
                },
                {
                    name: 'Nevada',
                    capital: 'Carson City',
                    largestCity: 'Las Vegas',
                    area: 286382,
                },
            ],
        },
        {
            country: 'Guatemala',
            capital: 'Guatemala City',
            largestCity: 'Guatemala City',
            subdivisionName: 'department',
            subdivisions: [
                {
                    name: 'Huehuetenango',
                    capital: 'Huehuetenango',
                    largestCity: 'Huehuetenango',
                    area: 7403,
                },
                {
                    name: 'Izabal',
                    capital: 'Puerto Barrios',
                    largestCity: 'Puerto Barrios',
                    area: 9038,
                },
                {
                    name: 'El Progreso',
                    capital: 'Guastatoya',
                    largestCity: 'Guastatoya',
                    area: 1922,
                },
            ],
        },
        {
            
            country: 'Canada',
            capital: 'Ottawa',
            largestCity: 'Toronto',
            subdivisionName: 'province',
            subdivisions: [
                {
                    name: 'Ontario',
                    capital: 'Toronto',
                    largestCity: 'Toronto',
                    area: 1076395,
                },
                {
                    name: 'Quebec',
                    capital: 'Quebec City',
                    largestCity: 'Montreal',
                    area: 1542056,
                },
                {
                    name: 'British Columbia',
                    capital: 'Victoria',
                    largestCity: 'Vancouver',
                    area: 944735,
                },
            ],
        },
        {
            
            country: 'Australia',
            capital: 'Canberra',
            largestCity: 'Sydney',
            subdivisionName: 'state',
            subdivisions: [
                {
                    name: 'New South Wales',
                    capital: 'Sydney',
                    largestCity: 'Sydney',
                    area: 809444,
                },
                {
                    name: 'Victoria',
                    capital: 'Melbourne',
                    largestCity: 'Melbourne',
                    area: 227416,
                },
                {
                    name: 'Queensland',
                    capital: 'Brisbane',
                    largestCity: 'Brisbane',
                    area: 185976,
                },
            ],
        },
    ];
    
      const tableContainer = document.getElementById('table-container');
      const table = document.createElement('table');
      
      // Create table header
      const headerRow = table.insertRow();
      const headerCells = ['Country', 'Capital', 'Largest City', 'Subdivision Name', 'Subdivisions'];
      headerCells.forEach(cellText => {
        const cell = document.createElement('th');
        cell.textContent = cellText;
        headerRow.appendChild(cell);
      });
      
      // Create table rows for each entry in GEOGRAPHY_LIST
      GEOGRAPHY_LIST.forEach(countryData => {
        countryData.subdivisions.forEach(subdivision => {
          const row = table.insertRow();
          row.insertCell().textContent = countryData.country;
          row.insertCell().textContent = countryData.capital;
          row.insertCell().textContent = countryData.largestCity;
          row.insertCell().textContent = countryData.subdivisionName;
          row.insertCell().textContent = `
          Name: ${subdivision.name}, 
          Capital: ${subdivision.capital}, 
          Largest City: ${subdivision.largestCity}, 
          Area: ${subdivision.area} sq km`;
        });
      });
      
      tableContainer.appendChild(table);
    })
