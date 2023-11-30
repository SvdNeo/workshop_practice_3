const data = [
  { "Header 1": "Head", "Header 2": "Request Id", "Header 3": "Request Date", "Header 4": "Request Amount", "Header 5": "Status" },
  { "Header 1": "Exxon Mobil", "Header 2": "Exxon Mobil", "Header 3": "Exxon Mobil", "Header 4": "$10,000,000", "Header 5": "Processed" },
  { "Header 1": "Berkshire Hathway", "Header 2": "Exxon Mobil", "Header 3": "Exxon Mobil", "Header 4": "$10,000,000", "Header 5": "Cancelled" },
  { "Header 1": "Alphabet", "Header 2": "Exxon Mobil", "Header 3": "Exxon Mobil", "Header 4": "$10,000,000", "Header 5": "Failed" },
  { "Header 1": "Alphabet", "Header 2": "Exxon Mobil", "Header 3": "Exxon Mobil", "Header 4": "$10,000,000", "Header 5": "Failed" },
  { "Header 1": "Alphabet", "Header 2": "Exxon Mobil", "Header 3": "Exxon Mobil", "Header 4": "$10,000,000", "Header 5": "Pending" },
  { "Header 1": "Alphabet", "Header 2": "Exxon Mobil", "Header 3": "Exxon Mobil", "Header 4": "$10,000,000", "Header 5": "Cancelled" },
  { "Header 1": "Alphabet", "Header 2": "Exxon Mobil", "Header 3": "Exxon Mobil", "Header 4": "$10,000,000", "Header 5": "Processed" },
  { "Header 1": "Alphabet", "Header 2": "Exxon Mobil", "Header 3": "Exxon Mobil", "Header 4": "$10,000,000", "Header 5": "Pending" },
  { "Header 1": "Alphabet", "Header 2": "Exxon Mobil", "Header 3": "Exxon Mobil", "Header 4": "$10,000,000", "Header 5": "Pending" }
];
// Number of rows per page
const rowsPerPage = 9;

// Calculate the total number of pages
const totalPages = Math.ceil(data.length / rowsPerPage);

// Function to display a specific page
function showPage(pageNumber) {
  const start = (pageNumber - 1) * rowsPerPage;
  const end = start + rowsPerPage;

  const tableContainer = document.getElementById('table-container');
  const paginationContainer = document.getElementById('pagination');

  // Create the table
  const table = document.createElement('table');
  table.className = 'w-full border-collapse';
  for (let i = start; i < end && i < data.length; i++) {
    const row = table.insertRow();
    row.className = 'border-b';
    for (let key in data[i]) {
      const cell = row.insertCell();
      cell.className = 'p-2';
      cell.textContent = data[i][key];
    }
  }
  tableContainer.innerHTML = '';
  tableContainer.appendChild(table);

  // Create pagination buttons
  const buttons = [];
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('a');
    button.href = '#';
    button.className = `mx-1 px-4 py-2 rounded cursor-pointer ${i === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`;
    button.textContent = i;
    button.addEventListener('click', () => showPage(i));
    buttons.push(button);
  }

  // Display pagination buttons
  paginationContainer.innerHTML = '';
  const prevButton = document.createElement('a');
  prevButton.href = '#';
  prevButton.textContent = '«';
  prevButton.addEventListener('click', () => showPage(pageNumber - 1));
  paginationContainer.appendChild(prevButton);

  buttons.forEach(button => paginationContainer.appendChild(button));

  const nextButton = document.createElement('a');
  nextButton.href = '#';
  nextButton.textContent = '»';
  nextButton.addEventListener('click', () => showPage(pageNumber + 1));
  paginationContainer.appendChild(nextButton);
}

// Show the first page by default
showPage(1);
