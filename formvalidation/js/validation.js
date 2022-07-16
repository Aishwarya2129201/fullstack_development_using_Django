function validate() {
    const name = document.getElementById('name').value;
    const gender = document.getElementsByName('gender');
    const branch = document.getElementById('branch').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const term = document.getElementById("term");

    let error = false;

    //Name
    if (name === "") {
        // console.log("Name is required.");
        document.getElementById("name_error").innerHTML = "Name is required.";
        error = true;
    } else {
        document.getElementById("name_error").innerHTML = "";
    }

    //Gender
    //console.log(gender);
    if (!gender[0].checked && !gender[1].checked && !gender[2].checked) {
        document.getElementById("gender_error").innerHTML = "Gender is required.";
        error = true;
    } else {
        document.getElementById("gender_error").innerHTML = "";
    }

    //Branch
    if (branch === "") {
        document.getElementById("branch_error").innerHTML = "Select your branch.";
        error = true;
    } else {
        document.getElementById("branch_error").innerHTML = "";
    }

    //Mobile
    if (mobile === "") {
        document.getElementById("mobile_error").innerHTML = "Mobile number is required.";
        error = true;
    } else if (mobile.length != 10 || isNaN(mobile)) {
        document.getElementById("mobile_error").innerHTML = "Please enter a 10 digit valid mobile number.";
        error = true;
    } else {
        document.getElementById("mobile_error").innerHTML = "";
    }

    //Email
    let atPos = email.indexOf('@');
    let dotPos = email.lastIndexOf('.');
    if (email === "") {
        document.getElementById("email_error").innerHTML = "Email ID is required.";
        error = true;
        // Check for multiple @s
    } else if (atPos <= 0 || dotPos <= 0 || (dotPos - atPos) <= 4 || dotPos == email.length - 1) {
        document.getElementById("email_error").innerHTML = "Please provide a valid email id";
        error = true;
    } else {
        document.getElementById("email_error").innerHTML = "";
    }

    if (password === "") {
        document.getElementById("password_error").innerHTML = "Password is required.";
        error = true;
    } else if (password.length < 8 || password.length > 16) {
        document.getElementById("password_error").innerHTML = "Password must be 8 - 16 character long";
        error = true;
    } else if (!password.match(/[a-z]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain atleast one lowercase character";
        error = true;
    } else if (!password.match(/[A-Z]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain atleast one uppercase character";
        error = true;
    } else if (!password.match(/[0-9]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain atleast one numerical character";
        error = true;
    } else if (!password.match(/[!@#$_&%^]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain atleast one special character";
        error = true;
    } else {
        document.getElementById("password_error").innerHTML = "";
    }

    if (password2 === "") {
        document.getElementById("password2_error").innerHTML = "Confirm password is required.";
        error = true;
    } else if (password != password2) {
        document.getElementById("password2_error").innerHTML = "Confirm Password doesn't match with password.";
        error = true;
    } else {
        document.getElementById("password2_error").innerHTML = "";
    }

    //Term
    if (!term.checked) {
        document.getElementById("term_error").innerHTML = "Please agree o the terms and conditions";
        error = true;
    } else {
        document.getElementById("term_error").innerHTML = "";
    }


    if (error) {
        return false;
    } else {
        return true;
    }
}