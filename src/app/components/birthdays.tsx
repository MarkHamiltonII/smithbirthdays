"use client"

import { useState } from "react";
import { SmithBirthday } from "../birthday.types"
import { BirthdayPanel } from "./birthdayPanel";
import { CategorySelect } from "./categorySelect";
import { SearchInput } from "./searchInput";

interface Props {
    birthdays: SmithBirthday[];
}

export function Birthdays(props: Props) {
    const { birthdays } = props;
    const [filteredBirthdays, setFilteredBirthdays] = useState<SmithBirthday[]>(birthdays);

    return (<div className=" bg-slate-400 py-8">
        <CategorySelect birthdays={birthdays} onCategorySelection={setFilteredBirthdays} />
        <SearchInput birthdays={birthdays} onSearchChange={setFilteredBirthdays} />
        <div className=" flex flex-col gap-2 mx-auto mt-20 w-1/2">
            {filteredBirthdays && filteredBirthdays.map((bday) => {
                return (
                    <BirthdayPanel key={bday.name} smithBirthday={bday} />
                )
            })}
        </div>
    </div>)
}
