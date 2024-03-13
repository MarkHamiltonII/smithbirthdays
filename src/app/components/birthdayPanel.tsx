import { SmithBirthday } from "../birthday.types"

interface Props {
    smithBirthday: SmithBirthday;
}

export function BirthdayPanel(props: Props) {
    const { smithBirthday: { name, birthday, daysUntilBirthday,age } } = props;
    
    return (
        <div key={name} className=" bg-slate-200 flex shadow-md gap-4 rounded flex-col md:flex-row">
            <p className=" font-bold font text-lg text-black mx-3 text-left min-w-1/3">{`${name} (${age} years old)`}</p>
            <p className=" font-semibold text-lg text-grey justify-start">{birthday}</p>
            <p className=" text-grey italic ml-auto mr-2">{`Days until next birthday: ${daysUntilBirthday}`}</p>
        </div>
    )
}

