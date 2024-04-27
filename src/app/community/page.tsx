import Button from "@/shared/ui/Button/Button";
import TextInput from "@/shared/ui/TextInput/TextInput";
import Navbar from "@/widgets/Navbar/Navbar";

const signInAction = async (props: any) => {
  'use server';
  console.log(props);
};

const CommunityPage = ({}) => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col">

      </div>
      <div className="flex gap-2">
        В разработке
      </div>
    </main>
  );
};
export default CommunityPage;