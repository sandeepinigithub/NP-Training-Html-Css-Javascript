let table = document.getElementById("userTable");
let temp = "";
let temp2 = "";
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
            view.addEventListener("click", function () {
                viewData(element.id, element.name, element.username, element.email, element.phone, element.website)
            });
        });
    };
    xhr.send();
}

function viewData(u_id, u_name, u_username, u_email, u_phone, u_website) {
    console.log(u_id, u_name, u_username, u_email, u_phone, u_website);
    //logic for popup
    temp2 ="";
    temp2 += "<ul>";
    temp2 += "<li> Name :"+ "<span>"+u_name+"</span>"+"</li>"
    temp2 += "<li> Username :"+ "<span>"+u_username+"</span>"+"</li>"
    temp2 += "<li> Email :"+ "<span>"+u_email+"</span>"+"</li>"
    temp2 += "<li> Phone :"+ "<span>"+u_phone+"</span>"+"</li>"
    temp2 += "<li> Website :"+ "<span>"+u_website+"</span>"+"</li>"
    document.querySelector(".content__data").innerHTML = temp2;
    
    togglePopup()



}
function togglePopup() {
    document.getElementById("popup1").classList.toggle("active");
    document.getElementById('userTable').classList.toggle("blurView");
}

//invoking getData Function 
getData();
