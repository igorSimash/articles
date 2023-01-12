const MonthList: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

export const getValidDate = (date_string: string): string => {
    const date = new Date(date_string);
    return `${MonthList[date.getMonth()]} ${date.getDate()}th, ${date.getFullYear()}`
}