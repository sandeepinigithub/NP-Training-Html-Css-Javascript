let table = document.getElementById("userTable");
let temp = "";
function getData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.onload = () => {
        let data = xhr.response;
        let jsonData = JSON.parse(data);
        jsonData.forEach((element) => {
            temp += "<tr>";
            temp += "<td>" + element.id + "</td>";
            temp += "<td>" + element.name + "</td>";
            temp += "<td>" + element.username + "</td>";
            temp += "<td>" + element.email + "</td>";
            temp += "<td>" + element.phone + "</td>";
            temp += "<td>" + element.website + "</td>";
            temp += "<td>" + "<img src=" + "./images/eye.svg" + " id = " + "view" + element.id + ">" + "</td> </tr>";
        });
        document.getElementById("userData").innerHTML = temp;
        jsonData.forEach((element) => {
            var view = document.getElementById("view" + element.id);
            view.addEventListener("click",function (){
                viewData(element.id,element.name,element.username,element.email,element.phone,element.website)
            });
        });
    };
    xhr.send();
}

function viewData(u_id,u_name,u_username,u_email,u_phone,u_website) {
    console.log(u_id,u_name,u_username,u_email,u_phone,u_website);
}

//invoking getData Function 
getData();
