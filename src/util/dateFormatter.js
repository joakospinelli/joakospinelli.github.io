export function formatDateMMYY(date) {
    let newDate = [ ...date.toISOString().split("T")[0].split("-") ];
    newDate = [ newDate[1], newDate[0] ];
    return newDate.join("/");
}

export function formatDateDDMMYY(date) {
    let newDate = [ ...date.toISOString().split("T")[0].split("-") ];
    newDate = [ newDate[2], newDate[1], newDate[0] ];
    return newDate.join("/");
}