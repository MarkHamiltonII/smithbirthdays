import { Birthdays } from "./components/birthdays";
import { useTempBirthdayData } from "./hooks/useTempBirthdayData";

export default async function Home() {
  const birthdays = await useTempBirthdayData();

  return (
    <div className=" container justify-center text-center w-screen mx-auto mt-20 ">
      <h1 className=" mx-auto mb-4 text-6xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl header">Smith Birthdays</h1>
      <Birthdays birthdays={birthdays} />
    </div>

  );
}

