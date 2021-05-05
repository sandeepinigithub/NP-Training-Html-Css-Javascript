let slides = document.getElementsByClassName("mySlides");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let submit = document.querySelector(".submit")


if (!slides.length == 0) {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    let currentSlide = function (n) {
        showSlides((slideIndex = n));
    };

    function showSlides(n) {
        if (n == slides.length) {
            document.getElementsByClassName('next')[0].style.display = "none";
            document.getElementsByClassName('submit')[0].style.display = "initial"

            // slideIndex = 1;
        }
        if (!(n == slides.length)) {
            document.getElementsByClassName('next')[0].style.display = "initial";
            document.getElementsByClassName('submit')[0].style.display = "none"

            // slideIndex = 1;
        }


        if (n < 1) {
            slideIndex = 1
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    }
}
function getValue(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let date = document.getElementById('date').value;
    let gender = document.querySelector('input[name="gender"]:checked').value
    let maritalstatus = document.getElementById('maritalstatus').value;

    let rollno = document.getElementById('rollno').value;
    let course = document.getElementById('course').value;
    let branch = document.getElementById('branch').value;
    let currentsemester = document.getElementById('currentsemester').value;
    let college = document.getElementById('college').value;

    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let zipcode = document.getElementById('zipcode').value;
    let country = document.getElementById('country').value;

    let occupationtype = document.getElementById('occupationtype').value;
    let occupationstatus = document.getElementById('occupationtstatus').value;
    let employername = document.getElementById('employername').value;
    let startdate = document.getElementById('startdate').value;
    let designation = document.getElementById('designation').value;

    
    // console.log(name,email,date,gender,maritalstatus,rollno,course,branch,currentsemester,college,address,city,state,zipcode,country,occupationtype,occupationstatus,employername,startdate,designation);
    
}

prev.addEventListener("click", () => {
    plusSlides(-1);
});

next.addEventListener("click", () => {
    plusSlides(1);
});
submit.addEventListener("click", getValue);
