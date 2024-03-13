export function getDaysToBirthday(birthday: string): number {
    
    const today = new Date();
    let bday = new Date(birthday);
    bday.setFullYear(today.getFullYear());
    if (bday < today) {
        bday.setFullYear(today.getFullYear() + 1);
    }
    return Math.floor((bday.getTime()-today.getTime()) / (1000 * 60 * 60 * 24) )
}

export function getAge(birthday: string): number {
    const today = new Date();
    const bday = new Date(birthday);
    const yearDifference = today.getFullYear() - bday.getFullYear();
    const monthDifference = today.getMonth() - bday.getMonth();
    if (monthDifference < 0) {
        return yearDifference - 1;
    }
    if (monthDifference > 0) {
        return yearDifference;
    }
    if (today.getDate() < bday.getDate()) {
        return yearDifference - 1;
    }
    return yearDifference;
}