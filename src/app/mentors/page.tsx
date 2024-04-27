import { MentorCard } from "@/features/MentorCard/ui";
import Button from "@/shared/ui/Button/Button";
import TextInput from "@/shared/ui/TextInput/TextInput";
import Navbar from "@/widgets/Navbar/Navbar";

const signInAction = async (props: any) => {
  'use server';
  console.log(props);
};

const MentorsPage = ({}) => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <TextInput
            className="min-w-[300px] h-full text-black"
            placeholder="Поиск ментора"
          />
          <Button>Найти</Button>
        </div>
        <div className="flex flex-col gap-8">
          <MentorCard
            name="Безруков Влад"
            desc="Выпускник 2020. Работает в Яндекс."
            job="frontend"
            imagePath="/person1.png"
          />
          <MentorCard
            name="Иванов Иван"
            desc="Выпускник 2022. Работает в Сбер."
            job="backend"
            imagePath="/person2.png"
          />
          <MentorCard
            name="Яремко Елена"
            desc="Выпускница 2019. Работает в Тинькофф."
            job="designer"
            imagePath="/person3.png"
          />
        </div>
      </div>
    </main>
  );
};
export default MentorsPage;