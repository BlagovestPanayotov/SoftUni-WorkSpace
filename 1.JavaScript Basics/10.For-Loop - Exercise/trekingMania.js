function trekinhgMania(input) {

    let countGroups = Number(input[0]);
    let index = 1;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let totalPPL = 0;

    for (let i = 0; i < countGroups; i++) {
        let currentGroup = Number(input[index]);
        index++;
        totalPPL+=currentGroup;
        if(currentGroup<=5){
            p1+=currentGroup;
        }else if(currentGroup<=12){
            p2+=currentGroup;
        }else if(currentGroup<=25){
            p3+=currentGroup;
        }else if(currentGroup<=40){
            p4+=currentGroup;
        }else{
            p5+=currentGroup;
        }
    }
    console.log(`${(p1/totalPPL*100).toFixed(2)}%`);
    console.log(`${(p2/totalPPL*100).toFixed(2)}%`);
    console.log(`${(p3/totalPPL*100).toFixed(2)}%`);
    console.log(`${(p4/totalPPL*100).toFixed(2)}%`);
    console.log(`${(p5/totalPPL*100).toFixed(2)}%`);
}
trekinhgMania(["5",
"25",
"41",
"31",
"250",
"6"]);