import { useState } from "react"
import { SmithBirthday } from "../birthday.types";

interface Props {
    birthdays: SmithBirthday[];
    onCategorySelection: (birthdays: SmithBirthday[]) => void;
}

export function CategorySelect(props: Props) {
    const { birthdays, onCategorySelection } = props;
    const [category, setCategory] = useState<Category>("");


    function handleCategoryChange(category: Category) {
        setCategory(category);
        let filteredBirthdays: SmithBirthday[] = [];
        switch (category) {
            case "age":
                filteredBirthdays = birthdays.toSorted((a, b) => a.age - b.age)
                break;
            case "name":
                filteredBirthdays = birthdays.toSorted((a, b) => a.name.localeCompare(b.name))
                break;
            case "nextBirthday":
                filteredBirthdays = birthdays.toSorted((a, b) => a.daysUntilBirthday - b.daysUntilBirthday)
                break;
            case "":
                filteredBirthdays = birthdays;
                break;
        }
        onCategorySelection(filteredBirthdays)
    }
    return (
        <div className='filter-box'>
            <label className='font-weight-bold my-3 mr-2'>Sort Birthdays By:</label>
            <select className='' name="selectedPos" onChange={(e) => handleCategoryChange(e.target.value as Category)} value={category}>
                <option value="name">Name</option>
                <option value="age">Age</option>
                <option value="nextBirthday">Next Birthday</option>
            </select>
        </div>
    )
}

type Category = "name" | "age" | "nextBirthday" | "";