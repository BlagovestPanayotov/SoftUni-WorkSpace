function passwordValidator(password){

    let inSize = checkSize(password); 
    let inContent = checkContent(password);
    let inCountDigit = checkCountDigits(password);

    if(inSize[0]&&inContent[0]&&inCountDigit[0]){
        console.log('Password is valid');
    }else{
        if(!inSize[0]){
            console.log(inSize[1]);
        }
        if(!inContent[0]){
            console.log(inContent[1]);
        }
        if(!inCountDigit[0]){
            console.log(inCountDigit[1]);
        }
    }


    function checkSize(password){
        if(password.length<6||password.length>10){
            return [false,'Password must be between 6 and 10 characters'];
        }
        return [true];
    }

    function checkContent(password){

        let content = false;

        for(let element of password){
            content = false;

            let currentElementASCII = element.charCodeAt(0);

            if(currentElementASCII>=48&&currentElementASCII<=57){
                content = true;
            }else if(currentElementASCII>=65&&currentElementASCII<=90){
                content = true;
            }else if(currentElementASCII>=97&&currentElementASCII<=122){
                content = true;
            }

            if(!content){
                return [false,'Password must consist only of letters and digits'];
            }
            
        }
        return [true];
    }

    function checkCountDigits(password){

        let digitsCount = 0;

        for(let element of password){

            let currentElementASCII = element.charCodeAt(0);

            if(currentElementASCII>=48&&currentElementASCII<=57){
                digitsCount++;
            }

        }

        if(digitsCount>=2){
            return [true];
        }else{
            return [false,'Password must have at least 2 digits'];
        }
        
    }

}

passwordValidator('Pa$s$s');