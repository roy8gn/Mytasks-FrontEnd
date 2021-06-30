export function validateEmail(email) { // Need to export that functions somehow.
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function checkIfExists(email){ // Need to export that functions somehow.
    /* Check if the email address exists in the DB */
    if(email==='aaa@gmail.com' || email==='abc@gmail.com'){
        return true;
    }
    return false;
}
