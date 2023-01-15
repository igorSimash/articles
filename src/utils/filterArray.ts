export const filterArray = (array: any[], filter: string): any[][] => {
    const startArr = [...array];
    const finalArr: any[][] = [[], []];
    const splitedArr = filter.split(' ');

    for (let j = 0; j < splitedArr.length; j++) {
        for (let i = 0; i < startArr.length; i++) {
            if (startArr[i].title.toLowerCase().includes(splitedArr[j].toLowerCase())) {
                finalArr[0].push(startArr[i])
                startArr.splice(i, 1);
            }
        }

        for (let i = 0; i < startArr.length; i++) {
            if (startArr[i].summary.toLowerCase().includes(splitedArr[j].toLowerCase())) {
                finalArr[1].push(startArr[i]);
                startArr.splice(i, 1);
            }
        }
    }

    return finalArr;
}