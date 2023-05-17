//Valid email
export const useEmailValid = ():((email:string) => RegExpMatchArray | null) => {
    const valid = (email:string):RegExpMatchArray | null => {
        return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
    return valid  
}


//Valid password
export const usePasswordValid = ():((pass:string) => boolean) => { 
    const valid = (pass:string):boolean=> {
        if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{8,}$/.test(pass)){
            return true
        }else{
            return false
        }
    }
    
    return valid 
}


//Validation and transform phone number
export const usePhoneValid = ():[(value: string) => boolean, (phone: string, initialPhone: string) => string] => {
    
    //Validation phone number
    //If phone number length is 11 then phone number is correct
    //11 because (1-number)(2-number)(3-number)(4-space)...
    const valid = (value:string):boolean=> {
        if(value.length===11){
            return true
        }
        else{
            return false
        }
    }

    //Transform phone number
    //Delete prefix +48
    //Add space between every 3 numbers
    const transform = (phone:string, initialPhone:string):string => {
        let newPhone: string = phone.replace("+48", "").replace(/\D/g, "");
        let newValue: string = "";
        if (newPhone.length > 0) {
            newValue = newPhone.substring(0, 3)
        }
        if (newPhone.length > 3) {
            newValue += " " + newPhone.substring(3, 6)
        }
        if (newPhone.length > 6) {
            newValue += " " + newPhone.substring(6, 9)
        }
        if (newPhone.length > 9) {
            newValue = initialPhone
        }
        return newValue
    }

    return [valid,transform] 
}

//Validation and transform NIP
export const useNipValid = ():[(value:string) => boolean,(nip:string) => string] => {
    
    //Validation NIP
    //If NIP length is 13 then NIP is correct
    //13, because the NIP is converted to the form 123-456-78-90
    const valid = (value:string):boolean=> {
        if(value.length===13){
            return true;
        }
        else{
            return false;
        }
    }


    //converted NIP to the form 123-456-78-90
    const transform = (nip:string):string=> {
        let formattedNip: string = "";
        const nipValue = nip.replace(/\D/g, "");
        if (nipValue.length > 0) {
            formattedNip = nipValue.substring(0, 3);
        }
        if (nipValue.length > 3) {
            formattedNip += "-" + nipValue.substring(3, 6);
        }
        if (nipValue.length > 6) {
            formattedNip += "-" + nipValue.substring(6, 8);
        }
        if (nipValue.length > 8) {
            formattedNip += "-" + nipValue.substring(8, 10);
        }
        return formattedNip
    }
    return [valid, transform]
    
}