import { useState } from "react";
import { SmithBirthday } from "../birthday.types"
import Fuse from "fuse.js";

interface Props {
    birthdays: SmithBirthday[];
    onSearchChange: (birthdays: SmithBirthday[]) => void;
}

export function SearchInput(props: Props) {
    const { birthdays, onSearchChange } = props;
    const [filterName, setFilterName] = useState<string>("");

    function handleSearch(searchTerm: string) {
        setFilterName(searchTerm);

        if (!searchTerm) {
            onSearchChange(birthdays);
            return;
        }
        const fuse = new Fuse(birthdays, fuseOptions);
        const searchData = fuse.search(searchTerm);
        const updatedBirthdays = searchData.map(element => element.item);
        onSearchChange(updatedBirthdays);
    }

    return (
        <div className='search-box mt-3'>
            <label className='font-weight-bold mr-2'>Search:</label>
            <input type='text' name='search' onChange={(e) => handleSearch(e.target.value)} value={filterName}></input>
        </div>
    )
}

const fuseOptions = { keys: ["name"] };