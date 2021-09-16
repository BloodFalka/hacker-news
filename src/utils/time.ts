export const timeConverter = (timestamp: number) => {
    const dateInMs = new Date(timestamp * 1000)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        year = dateInMs.getFullYear(),
        month = months[dateInMs.getMonth()],
        date = dateInMs.getDate(),
        hour = dateInMs.getHours(),
        min = dateInMs.getMinutes()

    return `${date} ${month} ${year} ${hour}:${min<10?'0'+min: min}`
}