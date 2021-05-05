let slides = document.getElementsByClassName("mySlides");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let submit = document.querySelector(".submit");
let print = document.querySelector(".print");


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
    // let name = document.getElementById('name').value;
    // let email = document.getElementById('email').value;
    // let date = document.getElementById('date').value;
    // let gender = document.querySelector('input[name="gender"]:checked').value
    // let maritalstatus = document.getElementById('maritalstatus').value;

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
    let occupationstatus = document.getElementById('occupationstatus').value;
    let employername = document.getElementById('employername').value;
    let startdate = document.getElementById('startdate').value;
    let designation = document.getElementById('designation').value;    
    // console.log(name,email,date,gender,maritalstatus,rollno,course,branch,currentsemester,college,address,city,state,zipcode,country,occupationtype,occupationstatus,employername,startdate,designation);

    slides[3].style.display = "none";
    prev.style.display = "none";
    submit.style.display = "none";
    setValue();
    print.style.display = "initial";
    document.getElementById('printContainer').style.display = "initial";

}
function setValue(){
    document.getElementById('nameValue').innerHTML = document.getElementById('name').value;
    document.getElementById('emailValue').innerHTML = document.getElementById('email').value;
    document.getElementById('dateValue').innerHTML = document.getElementById('date').value;
    // document.getElementById('genderValue').innerHTML = document.getElementById('gender').value;
    // document.getElementById('maritalstatusValue').innerHTML = document.getElementById('maritalstatus').value;

    document.getElementById('rollnoValue').innerHTML = document.getElementById('rollno').value;
    document.getElementById('courseValue').innerHTML = document.getElementById('course').value;
    document.getElementById('branchValue').innerHTML = document.getElementById('branch').value;
    document.getElementById('currentsemesterValue').innerHTML = document.getElementById('currentsemester').value;
    document.getElementById('collegeValue').innerHTML = document.getElementById('college').value;

    document.getElementById('addressValue').innerHTML = document.getElementById('address').value;
    document.getElementById('cityValue').innerHTML = document.getElementById('city').value;
    document.getElementById('stateValue').innerHTML = document.getElementById('state').value;
    document.getElementById('zipcodeValue').innerHTML = document.getElementById('zipcode').value;
    document.getElementById('countryValue').innerHTML = document.getElementById('country').value;

    document.getElementById('occupationtypeValue').innerHTML = document.getElementById('occupationtype').value;
    document.getElementById('occupationstatusValue').innerHTML = document.getElementById('occupationstatus').value;
    document.getElementById('employernameValue').innerHTML = document.getElementById('employername').value;
    document.getElementById('startdateValue').innerHTML = document.getElementById('startdate').value;
    document.getElementById('designationValue').innerHTML = document.getElementById('designation').value;

}
function printValue(){
    window.print();    
}

prev.addEventListener("click", () => {
    plusSlides(-1);
});

next.addEventListener("click", () => {
    plusSlides(1);
});
submit.addEventListener("click", getValue);
print.addEventListener("click", printValue);
