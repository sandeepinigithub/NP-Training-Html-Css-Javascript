var step = 1, isError = false;
// Button 
var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');
var submitBtn = document.querySelector('.submit');
var printBtn = document.querySelector('.print');
var errorSpan = document.querySelectorAll('.error')
//input field
var zipCode = document.getElementById('zipcode');

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
    if (input.value == "" && inputID == "name") {
        setError("erName", "Please enter your name");
        isError = true;
    }
    else if (inputID == "email") {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (input.value == "") {
            setError("erEmail", "Please enter your email address");
        }
        if (input.value != "" && !re.test(input.value.trim())) {
            setError("erEmail", "Please enter valid email");
        }

        isError = true;
    }
    else if (input.value == "" && inputID == "dob") {
        setError("erDob", "Please enter your Date Of Birth");
        isError = true;
    }

    // step 2
    else if (input.value == "" && inputID == "rollno") {
        setError("erRollno", "Please enter your Roll Number");
        isError = true;
    }
    else if (input.value == "" && inputID == "course") {
        setError("erCourse", "Please enter your Course");
        isError = true;
    }
    else if (input.value == "" && inputID == "branch") {
        setError("erBranch", "Please enter your Course Branch");
        isError = true;
    }
    else if (input.value == "" && inputID == "currentsemester") {
        setError("erCurrentsemester", "Please enter your Current Semester");
        isError = true;
    }
    else if (input.value == "" && inputID == "college") {
        setError("erCollege", "Please enter your College Name");
        isError = true;
    }



    // step 3
    else if (input.value == "" && inputID == "address") {
        setError("erAddress", "Please enter your Address");
        isError = true;
    }
    else if (input.value == "" && inputID == "city") {
        setError("erCity", "Please enter your City");
        isError = true;
    }
    else if (input.value == "" && inputID == "state") {
        setError("erState", "Please enter your State");
        isError = true;
    }
    else if (inputID == "zipcode") {
        if (input.value == "") {
            setError("erZipcode", "Please enter your Zipcode");
        }
        if (input.value != "" && input.value.length < 6) {
            setError("erZipcode", "Please enter zipcode of valid length ");
        }

        isError = true;
    }
    else if (input.value == "" && inputID == "country") {
        setError("erCountry", "Please enter your Country");
        isError = true;
    }


    // Step 4
    else if (input.value == "" && inputID == "occupationtype") {
        setError("erOccupationtype", "Please enter your Occupationtype");
        isError = true;
    }
    else if (input.value == "" && inputID == "occupationstatus") {
        setError("erOccupationstatus", "Please enter your Occupationstatus");
        isError = true;
    }
    else if (input.value == "" && inputID == "employername") {
        setError("erEmployername", "Please enter your Employername");
        isError = true;
    }
    else if (input.value == "" && inputID == "startdate") {
        setError("erStartdate", "Please enter your startdate");
        isError = true;
    }
    else if (input.value == "" && inputID == "designation") {
        setError("erDesignation", "Please enter your designation");
        isError = true;
    }

    else {
        isError = false;
    }
}



