const sheetId = 'api-test-383816';
const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=your-api-key`;

fetch(sheetUrl)
  .then(response => response.json())
  .then(data => {
    const table = document.createElement('table');
    table.classList.add('responsive-table');

    const headerRow = table.insertRow(0);
    data.values[0].forEach(header => {
      const th = document.createElement('th');
      th.innerText = header;
      headerRow.appendChild(th);
    });

    for (let i = 1; i < data.values.length; i++) {
      const row = table.insertRow(i);

      data.values[i].forEach(cell => {
        const td = document.createElement('td');
        td.innerText = cell;
        row.appendChild(td);
      });
    }

    const container = document.querySelector('.table-container');
    container.appendChild(table);
  });
