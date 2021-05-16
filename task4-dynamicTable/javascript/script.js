let table = document.getElementById('userTable');
let temp = "";

function getData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.onload = () => {
        let data = xhr.response
        let jsonData = JSON.parse(data)
        jsonData.forEach(element => {
            temp += "<tr>";
            temp += "<td>" + element.id + "</td>";
            temp += "<td>" + element.name + "</td>";
            temp += "<td>" + element.username + "</td>";
            temp += "<td>" + element.email + "</td>";
            temp += "<td>" + element.phone + "</td>";
            temp += "<td>" + element.website + "</td>";
            temp += "<td>" + "<img src=" + "./images/eye.svg" + ">" + "</td> </tr>";
        });
        document.getElementById('userData').innerHTML = temp;
    }
    xhr.send();
}
getData();