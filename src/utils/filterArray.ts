export const filterArray = (array: any[], filter: string): any[][] => {
    const startArr = [...array];
    const finalArr: any[][] = [[], []]

    for (let i = 0; i < startArr.length; i++) {
        if (startArr[i].title.toLowerCase().includes(filter.toLowerCase())) {
            finalArr[0].push(startArr[i])
            startArr.splice(i, 1);
        }
    }

    for (let i = 0; i < startArr.length; i++) {
        if (startArr[i].summary.toLowerCase().includes(filter.toLowerCase()))
            finalArr[1].push(startArr[i])
    }

    return finalArr;
}