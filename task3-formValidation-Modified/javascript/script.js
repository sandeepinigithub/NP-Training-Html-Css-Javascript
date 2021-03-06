var step = 1, isError = false;
// Button 
var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');
var submitBtn = document.querySelector('.submit');
var printBtn = document.querySelector('.print');
var errorSpan = document.querySelectorAll('.error')

document.querySelector('.step' + step).style.display = 'block';
document.querySelector('.indicate' + step).classList.add('step-indicator-fill');
const steps = document.querySelectorAll('.step');

// Next Button Function 
function next() {
    // step 1
    if (step == 1) {
        validate("name");
        validate("email");
        validate("dob");

    }
    // step 2
    if (step == 2) {
        validate("rollno");
        validate("course");
        validate("branch");
        validate("currentsemester");
        validate("college");
    }

    // step 3
    if (step == 3) {
        validate("address");
        validate("city");
        validate("state");
        validate("zipcode");
        validate("country");
    }

    // step 4
    if (step == 4) {
        validate("occupationtype");
        validate("occupationstatus");
        validate("employername");
        validate("startdate");
        validate("designation");

    }
    if (!isError) {
        step++;
        if (step <= steps.length) {
            steps.forEach(step => {
                step.style.display = 'none';
            });
            document.querySelector('.step' + step).style.display = 'block';
            document.querySelector('.indicate' + step).classList.add('step-indicator-fill');
        }
        if (step == (steps.length)) {
            submitBtn.style.display = 'block';
            nextBtn.style.display = 'none';
        }
        if (step > 1) {
            prevBtn.style.display = 'block';
        }
    }
}

// Previous Button Function 
function prev() {
    step--;
    if (step >= 1) {
        steps.forEach(step => {
            step.style.display = 'none';
        });
        document.querySelector('.step' + step).style.display = 'block';
        document.querySelector('.indicate' + (step + 1)).classList.remove('step-indicator-fill');
    }
    if (step < steps.length) {
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';

    }

}


// Form Validation My Logic 
function setError(id, error) {
    document.getElementById(id).innerHTML = error;
}

function validate(inputID) {
    var input = document.getElementById(inputID);
    // step 1
    if (inputID == "name") {
        if (input.value == "") {
            setError("erName", "Please enter your name");
        }
        else {
            setError("erName", "");
        }

        isError = true;
    }
    else if (inputID == "email") {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (input.value == "") {
            setError("erEmail", "Please enter your email address");
        }
        else if (input.value != "" && !re.test(input.value.trim())) {
            setError("erEmail", "Please enter valid email");
        }
        else {
            setError("erEmail", "");
        }

        isError = true;
    }
    else if (input.value == "" && inputID == "dob") {

        setError("erDob", "Please enter your Date of birth");
        isError = true;
    }

    // step 2
    else if (inputID == "rollno") {
        if (input.value == "") {
            setError("erRollno", "Please enter your Roll Number");
        }
        else {
            setError("erRollno", "");
        }
        isError = true;
    }
    else if (inputID == "course") {
        if (input.value == "") {
            setError("erCourse", "Please enter your Course");
        }
        else {
            setError("erCourse", "");
        }
        isError = true;
    }
    else if (inputID == "branch") {
        if (input.value == "") {
            setError("erBranch", "Please enter your Course Branch");
        }
        else {
            setError("erBranch", "");
        }
        isError = true;
    }
    else if (inputID == "currentsemester") {
        if (input.value == "") {
            setError("erCurrentsemester", "Please enter your Current Semester");
        }
        else {
            setError("erCurrentsemester", "");
        }

        isError = true;
    }
    else if (input.value == "" && inputID == "college") {

        setError("erCollege", "Please enter your College Name");
        isError = true;
    }



    // step 3
    else if (inputID == "address") {
        if(input.value == ""){
            setError("erAddress", "Please enter your Address");
        }  
        else{
            setError("erAddress", "");
        }      
        isError = true;
    }
    else if (inputID == "city") {
        if(input.value == ""){
            setError("erCity", "Please enter your City");
        }    
        else    
        {
            setError("erCity", "");
        }
        isError = true;
    }
    else if (inputID == "state") {
        if(input.value == ""){
            setError("erState", "Please enter your State");
        }
        else{
            setError("erState", "");
        }        
        isError = true;
    }
    else if (inputID == "zipcode") {
        if(input.value == ""){
            setError("erZipcode", "Please enter your Zipcode");
        }
        else{
            setError("erZipcode", "");
        }        
        isError = true;
    }
    else if (input.value == "" && inputID == "country") {
        setError("erCountry", "Please enter your Country");
        isError = true;
    }


    // Step 4
    else if (inputID == "occupationtype") {
        if (input.value == "") {
            setError("erOccupationtype", "Please enter your Occupationtype");
        }
        else {
            setError("erOccupationtype", "");
        }

        isError = true;
    }
    else if (inputID == "occupationstatus") {
        if (input.value == "") {
            setError("erOccupationstatus", "Please enter your Occupationstatus");
        }
        else {
            setError("erOccupationstatus", "");
        }

        isError = true;
    }
    else if (inputID == "employername") {
        if (input.value == "") {
            setError("erEmployername", "Please enter your Employername");
        }
        else {
            setError("erEmployername", "");
        }

        isError = true;
    }
    else if (input.value == "" && inputID == "startdate") {

        setError("erStartdate", "Please enter your startdate");
        isError = true;
    }
    else if (inputID == "designation") {
        if (input.value == "") {
            setError("erDesignation", "Please enter your designation");
        }
        else {
            setError("erDesignation", "");
            submitForm();
        }

        isError = true;
    }

    else {
        isError = false;
    }
}
function setValue() {
    document.getElementById('nameValue').innerHTML = document.getElementById('name').value;
    document.getElementById('emailValue').innerHTML = document.getElementById('email').value;
    document.getElementById('dateValue').innerHTML = document.getElementById('dob').value;
    document.getElementById('genderValue').innerHTML = document.querySelector('input[name="gender"]:checked').value
    // document.getElementById('maritalstatusValue').innerHTML = document.getElementById('maritalstatus').value;
    console.log("This value is not accepted in innerHtML of Select Tag: " + document.getElementById('maritalstatus').value);

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
function printValue() {
    window.print();
}

function submitForm(){
    steps.forEach(step => {
        step.style.display = 'none';
    });
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    submitBtn.style.display = "none";
    printBtn.style.display = "block";
    document.querySelector('.step-indicator').style.display = "none";
    setValue();
    document.querySelector('.printContainer').style.display = "block";
    
}



