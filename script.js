function getRow(arg) {
    var tableRow = document.getElementsByTagName("tr");
    // console.log(tableRow);

    // arg=1;
    // console.log(tableRow[arg].cells);

    const resultHolder = document.getElementById("search-result");
    resultHolder.innerHTML = "";                    //to clear the older content

    const resultTable = document.createElement("table");
    resultHolder.appendChild(resultTable);

    const resultRow = document.createElement("tr");
    resultTable.appendChild(resultRow);

    var rowElements = tableRow[arg].cells;

    for (var i = 0; i < rowElements.length; i++) {
        // console.log(rowElements[i].innerHTML);
        const resultCol = document.createElement("td");

        if (i == 0)
            resultCol.colSpan = 2;

        resultCol.innerHTML = rowElements[i].innerHTML;
        resultRow.appendChild(resultCol);
    }
}

function sortAscending() {
    var table = document.getElementById("booksTable");
    
    var rows = table.rows;
    var rowCount = rows.length;
    
    var sortByColumn = 0;               //choosing the column according which to sort

    while (rowCount) {
        for (var i = 1; i < (rows.length - 1); i++) {
            var element1 = rows[i].getElementsByTagName("td")[sortByColumn];               
            var element2 = rows[i + 1].getElementsByTagName("td")[sortByColumn];

            /*
                console.log(element1);
                console.log(element2);
            */

            if (element1.innerHTML.toLowerCase() > element2.innerHTML.toLowerCase()) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                
                /*
                    console.log(rows[i]);
                    console.log(rows[i+1]);
                */
            }
        }
        rowCount--;
    }
}

function sortDescending() {
    var table = document.getElementById("booksTable");
    
    var rows = table.rows;
    var rowCount = rows.length;
    
    var sortByColumn = 0;               //choosing the column according which to sort

    while (rowCount) {
        for (var i = 1; i < (rows.length - 1); i++) {
            var element1 = rows[i].getElementsByTagName("td")[sortByColumn];               
            var element2 = rows[i + 1].getElementsByTagName("td")[sortByColumn];

            if (element1.innerHTML.toLowerCase() < element2.innerHTML.toLowerCase()) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            }
        }
        rowCount--;
    }
}