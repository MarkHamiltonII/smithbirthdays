// import { JWT } from "google-auth-library";
// import { SmithBirthday, SmithBirthdayRow } from "../birthday.types";
// import { GoogleSpreadsheet } from "google-spreadsheet";
// import creds from "../data/circ-curve.json";
// import { getAge, getDaysToBirthday } from "../utils/date"

// export async function useGetBirthdays(): Promise<SmithBirthday[]> {
//     const spreadsheetId = "1oKBSDr49MEWAQdtpXNsJNqCAUxfIvAPAhxEwtEzpF-A";
//     const { client_email, private_key } = creds;

//     const SCOPES = [
//         'https://www.googleapis.com/auth/spreadsheets',
//         'https://www.googleapis.com/auth/drive.file',
//     ];

//     const auth = new JWT({
//         email: client_email,
//         key: private_key,
//         scopes: SCOPES,
//     })

//     const doc = new GoogleSpreadsheet(spreadsheetId, auth);
//     await doc.loadInfo();
//     const birthdaySheet = doc.sheetsByTitle['birthdays']


//     const birthdayData = await birthdaySheet.getRows<SmithBirthdayRow>();
//     const birthdays = birthdayData.map((data) => {
//         const bdayData: SmithBirthday = {
//             name: data.get("name"),
//             birthday: data.get("birthday"),
//             daysUntilBirthday: getDaysToBirthday(data.get("birthday")),
//             age: getAge(data.get("birthday"))
//         }
//         return bdayData;
//     })
//     return birthdays;
// }