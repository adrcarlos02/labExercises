let diseasesData = [];
let filteredDiseases = [];
let currentPage = 1;
const resultsPerPage = 3;

// Fetch the internal JSON data
fetch("/miniProject1/data/communicableDisease.json")
    .then(response => response.json())
    .then(data => {
        diseasesData = data.communicableDiseases;
        filteredDiseases = sortDiseases(diseasesData); // Initially, filteredDiseases is the same as diseasesData
        displayDiseases(filteredDiseases, currentPage);
        createPagination(filteredDiseases.length);

        // Event listener for searching diseases by name, symptoms, treatment, and precautions
        document.getElementById('searchInput').addEventListener('input', () => {
            const query = document.getElementById('searchInput').value.toLowerCase().replace(/\s+/g, '');
            filteredDiseases = diseasesData.filter(disease => {
                // Combine all searchable fields into a single string and remove spaces
                const combinedText = [
                    disease.name,
                    disease.transmissionPrecautions.classification,
                    disease.symptoms.join(' '),
                    disease.treatment.join(' ')
                ].join(' ').toLowerCase().replace(/\s+/g, '');
                
                // Return true if the combined text includes the query
                return combinedText.includes(query);
            });
            currentPage = 1; // Reset to the first page when searching
            displayDiseases(filteredDiseases, currentPage);
            createPagination(filteredDiseases.length);
        });

        // Event listener for filtering by transmission precautions
        document.getElementById('filterDropdown').addEventListener('change', () => {
            const classification = document.getElementById('filterDropdown').value.toLowerCase();
            filteredDiseases = diseasesData.filter(disease => {
                return classification === 'all' || 
                    disease.transmissionPrecautions.classification.toLowerCase().includes(classification);
            });
            currentPage = 1; // Reset to the first page when filtering
            displayDiseases(filteredDiseases, currentPage);
            createPagination(filteredDiseases.length);
        });
    })
    .catch(error => console.error("Error loading disease data:", error));

// Function to display diseases in the HTML
function displayDiseases(diseases, page = 1) {
    const diseaseContainer = document.getElementById('diseaseContainer');
    diseaseContainer.innerHTML = ''; // Clear previous results

    const start = (page - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    const paginatedDiseases = diseases.slice(start, end);

    paginatedDiseases.forEach(disease => {
        const coloredPrecautions = colorCodePrecautions(disease.transmissionPrecautions.classification);
        const diseaseCard = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${disease.name}</h5>
                    <p class="card-text"><strong>Overview:</strong> ${disease.overview}</p>
                    <p class="card-text"><strong>Symptoms:</strong> ${disease.symptoms.join(", ")}</p>
                    <p class="card-text"><strong>Precautions:</strong> ${coloredPrecautions}</p>
                    <p class="card-text"><strong>Treatment:</strong> ${disease.treatment.join(", ")}</p>
                </div>
            </div>
        `;
        diseaseContainer.innerHTML += diseaseCard;
    });
}

// Function to sort diseases alphabetically by name
function sortDiseases(diseases) {
    return diseases.sort((a, b) => a.name.localeCompare(b.name));
}

// Function to create pagination buttons
function createPagination(totalResults) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // Clear existing pagination

    const totalPages = Math.ceil(totalResults / resultsPerPage);
    const maxVisibleButtons = 5; // Maximum number of pagination buttons to display

    // Add "Previous" button
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayDiseases(filteredDiseases, currentPage);
            createPagination(totalResults);
        }
    });
    pagination.appendChild(prevButton);

    // Determine the range of pagination buttons to show
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    // Adjust the startPage if we are at the beginning or end of the pagination range
    if (endPage - startPage < maxVisibleButtons - 1) {
        startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    // Create the pagination buttons
    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = i === currentPage ? 'active' : '';
        button.addEventListener('click', () => {
            currentPage = i;
            displayDiseases(filteredDiseases, currentPage);
            createPagination(totalResults);
        });
        pagination.appendChild(button);
    }

    // Add "Next" button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayDiseases(filteredDiseases, currentPage);
            createPagination(totalResults);
        }
    });
    pagination.appendChild(nextButton);
}

// Function to color-code precautions
function colorCodePrecautions(precaution) {
    const lowerCasePrecaution = precaution.toLowerCase();
    const words = lowerCasePrecaution.split(/[\s,]+/); // Split by spaces or commas

    const coloredWords = words.map(word => {
        if (word.includes("contact")) {
            return `<span class="precaution-contact">${word}</span>`;
        } else if (word.includes("droplet")) {
            return `<span class="precaution-droplet">${word}</span>`;
        } else if (word.includes("airborne")) {
            return `<span class="precaution-airborne">${word}</span>`;
        } else if (word.includes("vector-borne")) {
            return `<span class="precaution-vectorborne">${word}</span>`;
        } else if (word.includes("bloodborne")) {
            return `<span class="precaution-bloodborne">${word}</span>`;
        } else if (word.includes("fecal-oral")) {
            return `<span class="precaution-fecaloral">${word}</span>`;
        } else if (word.includes("foodborne")) {
            return `<span class="precaution-foodborne">${word}</span>`;
        } else if (word.includes("zoonotic")) {
            return `<span class="precaution-zoonotic">${word}</span>`;
        } else if (word.includes("waterborne")) {
            return `<span class="precaution-waterborne">${word}</span>`;
        } else {
            return word; // Default case, no color coding
        }
    });

    return coloredWords.join(' '); // Join the words back together with spaces
}

// Function to export results as JSON
function exportAsJSON() {
    const blob = new Blob([JSON.stringify(filteredDiseases, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'diseases-data.json';
    a.click();
    URL.revokeObjectURL(url);
}

// Add event listener for the JSON export button
document.getElementById('exportJson').addEventListener('click', exportAsJSON);