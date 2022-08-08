function vacation(pplCount, groupType, dayOfWeek) {

    pplCount = Number(pplCount);

    let studentsFridayPrice = 8.45;
    let businessFridayPrice = 10.9;
    let regularFridayPrice = 15;
    let studentSaturdayPrice = 9.8;
    let businessSaturdayPrice = 15.6;
    let regularSaturdayPrice = 20;
    let studentSundayPrice = 10.46;
    let businessSundayPrice = 16;
    let regularSundayPrice = 22.5;

    let studentsDiscountPercentege = 15;
    let businessDiscountPplCount = 10;
    let regularDiscountPercentige = 5;

    let totalPrice = 0;

    if (groupType === 'Business' && pplCount >= 100) {
        pplCount -= businessDiscountPplCount;
    }

    if (groupType === 'Students' && dayOfWeek === 'Friday') {
        totalPrice += pplCount * studentsFridayPrice;

    } else if (groupType === 'Students' && dayOfWeek === 'Saturday') {
        totalPrice += pplCount * studentSaturdayPrice;

    } else if (groupType === 'Students' && dayOfWeek === 'Sunday') {
        totalPrice += pplCount * studentSundayPrice;

    } else if (groupType === 'Business' && dayOfWeek === 'Friday') {
        totalPrice += pplCount * businessFridayPrice;

    } else if (groupType === 'Business' && dayOfWeek === 'Saturday') {
        totalPrice += pplCount * businessSaturdayPrice;

    } else if (groupType === 'Business' && dayOfWeek === 'Sunday') {
        totalPrice += pplCount * businessSundayPrice;

    } else if (groupType === 'Regular' && dayOfWeek === 'Friday') {
        totalPrice += pplCount * regularFridayPrice;

    } else if (groupType === 'Regular' && dayOfWeek === 'Saturday') {
        totalPrice += pplCount * regularSaturdayPrice;

    } else if (groupType === 'Regular' && dayOfWeek === 'Sunday') {
        totalPrice += pplCount * regularSundayPrice;
    }

    if (groupType === 'Students' && pplCount >= 30) {
        totalPrice -= (studentsDiscountPercentege / 100) * totalPrice;
    } else if (groupType === 'Regular' && pplCount >= 10 && pplCount <= 20) {
        totalPrice -= (regularDiscountPercentige / 100) * totalPrice;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
