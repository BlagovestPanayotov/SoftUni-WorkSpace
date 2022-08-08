function cutAndReverse(input){

    let leftHalf = input.slice(0,input.length/2);
    let rightHalf = input.replace(leftHalf,'');

    console.log(leftHalf.split('').reverse().join(''));
    console.log(rightHalf.split('').reverse().join(''));

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');