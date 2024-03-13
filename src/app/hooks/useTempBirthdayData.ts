"use server"

import { SmithBirthday } from "../birthday.types";
import birthdayData from "../data/birthdayData.json";
import { getAge, getDaysToBirthday } from "../utils/date";

export async function useTempBirthdayData() {
    const birthdays = birthdayData.map((data) => {
        const { name, birthday } = data;
        const bdayData: SmithBirthday = {
            name,
            birthday,
            daysUntilBirthday: getDaysToBirthday(birthday),
            age: getAge(birthday)
        }
        return bdayData;
    })
    return birthdays;
}