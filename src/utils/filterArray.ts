export const filterArray = (array : any[], filter: string): any[] => {
    const startArr = array;
    const finalArr: any[][] = []

    for (let i = 0; i < startArr.length; i++) {
        if (!array[i].title.includes(filter.toLowerCase())){
            startArr.splice(i, 1);
        }
    }

    finalArr.push(startArr)
    console.log('FOR1 startArr = ');
    console.log(startArr);
    console.log('FOR1 finalArr = ' + finalArr);
    console.log(finalArr);

    for (let i = 0; i < startArr.length; i++) {
        if (!array[i].summary.includes(filter.toLowerCase())){
            array.splice(i, 1);
        }
    }

    finalArr.push(startArr)
    console.log('FOR2 startArr = ');
    console.log(startArr);
    console.log('FOR2 finalArr = ');
    console.log(finalArr);

    return finalArr;
}