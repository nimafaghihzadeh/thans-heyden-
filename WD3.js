const firstname = document.getElementById('firstname');
const familyname = document.getElementById('familyname');
const email = document.getElementById('email');
const address = document.getElementById('address');
const phonenumber = document.getElementById('phonenumber');
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');
const form = document.getElementById('form');

form.addEventListener('submit' , (e) => { 
    e.preventDefault();

    checkInputs();
});
function checkInputs() {
    //get the values from the inputs
    const firstnameValue = firstname.value.trim();
    const familynameValue = familyname.value.trim();
    const emailValue = email.value.trim();
    const addressValue = address.value.trim();
    const phonenumberValue = phonenumber.value.trim(); 
    const pass1Value = pass1.value.trim();
    const pass2Value = pass2.value.trim();       


    if(firstnameValue === '') {
        //show error
        //add error class
        console.log ('first name can not be blank againg')
        setErrorFor(firstname, 'firstname can not be blank');
    } else {
        //add seccess class
        setSuccessFor(firstname);
    }
    if(familynameValue === '') {
        setErrorFor(familyname, 'familyname cannot be blank');
    }

    if(emailValue === '') {
        setErrorFor(email, 'email cannot be blank')
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
    if(addressValue === '') {
        //show error
        //add error class
        console.log ('address cannot be blank')
        setSuccessFor(address, 'address cannot be blank');
    } else {
        //add success class
        setSuccessFor(address);
    }
    if(phonenumberValue === '') {
        //show error
        //add error class
        console.log ('phoneNumber cannot be blank')
        setSuccessFor(phonenumber, 'phonenumber cannot be blank');
    } else {
        //add success class
        setSuccessFor(phonenumber);
    }
    if(pass1Value === '') {
        //show error
        //add error class
        console.log ('password cannot be blank')
        setSuccessFor(pass1, 'password cannot be blank');
    } else {
        //add success class
        setSuccessFor(pass1);
    }
    if(pass2Value === '') {
        //show error
        //add error class
        console.log ('password repead cannot be blank')
        setSuccessFor(pass2, 'password repead cannot be blank');
    } else if (pass1Value !== pass2Value) {
        setSuccessFor(pass2, 'passwords do not match');
    } else {
                //add success class
                setSuccessFor(pass2);
    }

}

function setErrorFor(input, message) {
    const inputgroup = input.parentElement; // .input-group
    const small = inputgroup.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class 
    inputgroup.className = 'inputgrouperror'
}

function setSuccessFor(input) {
    const inputgroup = input.parentElement;
    inputgroup.className = 'inputgroupsuccess'
}
// function isEmail(email) {
//     return ^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$.test(email);
    
// }