function getRow(arg){
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

    for(var i=0; i<rowElements.length; i++){
        // console.log(rowElements[i].innerHTML);
        const resultCol = document.createElement("td");
        
        if(i == 0)
            resultCol.colSpan = 2;
        
        resultCol.innerHTML = rowElements[i].innerHTML;
        resultRow.appendChild(resultCol);
    }
}
