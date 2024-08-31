
//Fetching the Data

let originalData = []; // Variable to hold the original data

async function fetchCovidTrackingData() {
  const url = 'https://api.covidtracking.com/v1/us/daily.json';

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      originalData = await response.json(); // Store the original data
      populateTable(originalData); // Populate the table with all data
      setupFilter(originalData);   // Set up the filter functionality
  } catch (error) {
      console.error('Fetch error:', error);
  }
}

function populateTable(data) {
  const tableBody = document.querySelector('#covid-data-table tbody');
  tableBody.innerHTML = ''; // Clear previous data

  data.forEach(item => {
      const row = document.createElement('tr');

      row.innerHTML = `
          <td>${item.date}</td>
          <td>${item.states}</td>
          <td>${item.positive}</td>
          <td>${item.negative}</td>
          <td>${item.hospitalizedCurrently}</td>
          <td>${item.inIcuCurrently}</td>
          <td>${item.onVentilatorCurrently}</td>
          <td>${item.death}</td>
          <td>${item.positiveIncrease}</td>
          <td>${item.deathIncrease}</td>
      `;

      tableBody.appendChild(row);
  });
}

function setupFilter(data) {
  const dateInput = document.getElementById('filter-date');
  const startDateInput = document.getElementById('start-date');
  const endDateInput = document.getElementById('end-date');
  const positiveInput = document.getElementById('filter-positive');
  const deathsInput = document.getElementById('filter-deaths');

  function applyFilters() {
      const filterValue = dateInput.value.trim();
      const startDate = startDateInput.value.trim();
      const endDate = endDateInput.value.trim();
      const positiveThreshold = parseInt(positiveInput.value.trim(), 10);
      const deathsThreshold = parseInt(deathsInput.value.trim(), 10);

      let filteredData = originalData;

      // Filter by exact date
      if (filterValue.length === 8) {
          filteredData = filteredData.filter(item => item.date.toString() === filterValue);
      }

      // Filter by date range
      if (startDate.length === 8 && endDate.length === 8) {
          filteredData = filteredData.filter(item => {
              const date = parseInt(item.date.toString(), 10);
              return date >= parseInt(startDate, 10) && date <= parseInt(endDate, 10);
          });
      }

      // Filter by positive cases threshold
      if (!isNaN(positiveThreshold)) {
          filteredData = filteredData.filter(item => item.positive >= positiveThreshold);
      }

      // Filter by deaths threshold
      if (!isNaN(deathsThreshold)) {
          filteredData = filteredData.filter(item => item.death >= deathsThreshold);
      }

      populateTable(filteredData);
  }

  // Attach event listeners to all filter inputs
  dateInput.addEventListener('input', applyFilters);
  startDateInput.addEventListener('input', applyFilters);
  endDateInput.addEventListener('input', applyFilters);
  positiveInput.addEventListener('input', applyFilters);
  deathsInput.addEventListener('input', applyFilters);
}

function clearFilters() {
  document.getElementById('filter-date').value = '';
  document.getElementById('start-date').value = '';
  document.getElementById('end-date').value = '';
  document.getElementById('filter-positive').value = '';
  document.getElementById('filter-deaths').value = '';

  populateTable(originalData); // Show the full dataset
}

// Function to export data to JSON
function exportToJson(data) {
    const json = JSON.stringify(data, null, 2); // Convert data to JSON string with indentation

    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = 'covid_data.json';
    a.click();

    // Clean up the URL object
    URL.revokeObjectURL(url);
}

// Attach event listener to the export button
document.getElementById('export-json').addEventListener('click', () => {
    exportToJson(originalData); // Export the original data
});

// Attach event listener to the clear filters button
document.getElementById('clear-filters').addEventListener('click', clearFilters);

// Fetch the data when the script is loaded
fetchCovidTrackingData();