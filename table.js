
const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=your-api-key`;
// Replace YOUR_SHEET_ID and YOUR_API_KEY with your own values
const sheetId = 'api-test-383816';
const apiKey = 'AIzaSyDneFEQr97arD3xsQezomiVgSB1xtpZJIo';

// Define the URL to fetch the data from the Google Sheets API
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`;

// Fetch the data from the Google Sheets API
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Extract the headers and rows from the data
    const headers = data.values[0];
    const rows = data.values.slice(1);

    // Create a table element and add it to the container
    const table = document.createElement('table');
    const container = document.querySelector('.table-container');
    container.appendChild(table);

    // Add the headers to the table
    const headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });

    // Add the rows to the table
    rows.forEach(rowData => {
      const row = document.createElement('tr');
      table.appendChild(row);
      rowData.forEach(cellData => {
        const td = document.createElement('td');
        td.textContent = cellData;
        row.appendChild(td);
      });
    });
  })
  .catch(error => {
    console.error(error);
  });
