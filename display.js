let apiResponse = fetch('http://localhost:3000/displayUsers')
    .then(response => response.json())
    .then(data => {
        let stringData = JSON.stringify(data);
        let parsedData = JSON.parse(stringData);
        return parsedData;
    })
    .then(parsedData => {
        for(i=0; i < parsedData.length; i++){
            console.log(parsedData[i]);
            const pageRow = document.createElement('tr');
            const rowInfo = document.createTextNode(`${parsedData[i].fname}| 
            ${parsedData[i].lname}|
            ${parsedData[i].dob}|
            ${parsedData[i].cob}|
            ${parsedData[i].lnum}|
            ${parsedData[i].lver}|
            ${parsedData[i].issued}|
            ${parsedData[i].expires}
            `);
            pageRow.appendChild(rowInfo);
            let getTable = document.getElementById('users');
            getTable.appendChild(pageRow)
        }
        
    })