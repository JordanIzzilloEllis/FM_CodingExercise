let user = document.getElementById('userData').addEventListener("submit", collect => {

    let newUser = Object();

    newUser['fname'] = document.getElementById('firstName').value 
    newUser['lname'] = document.getElementById('lastName').value 
    newUser['dob'] = document.getElementById('dob').value 
    newUser['cob'] = document.getElementById('country').value
    newUser['lnum'] = document.getElementById('licenseNum').value
    newUser['lver'] = document.getElementById('licenseVer').value
    newUser['issued'] = document.getElementById('licenseIssueDate').value
    newUser['expires'] = document.getElementById('licenseExpiryDate').value

    transportUser(newUser)

    window.open("/display.html")
});

function transportUser(userObject){
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObject)
    }
    fetch('http://localhost:3000/userData', options).then(response => {
        console.log(response)
    })
}

let apiResponse = fetch('http://localhost:3000/displayUsers')
    .then(response => response.json())
    .then(data => {
        let stringData = JSON.stringify(data);
        let parsedData = JSON.parse(stringData);
        return parsedData;
    })