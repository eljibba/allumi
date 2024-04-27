import { FormInput } from "@/features/FormInput";
import axiosInstance from "@/shared/api/axiosInstance";
import Button from "@/shared/ui/Button/Button";
import { redirect } from "next/navigation";

const signInAction = async (formData: FormData) => {
  'use server';
  const body = {
    login: formData.get('login'),
    password: formData.get('password'),
  };
  const res = await axiosInstance.post('http://77.232.128.185:80/auth/login', body);
  if (res.status !== 200) {
    return;
  }
  console.log(res);
  redirect('/');
};

const SignInPage = ({}) => {
  return (
    <main className="flex flex-col gap-4 rounded-lg p-5 min-w-[500px] border border-gray-700">
      <h1 className="text-2xl">Вход</h1>

      <form
        className="flex flex-col gap-4 w-full"
        action={signInAction}
      >
        <div className="flex gap-4 w-full">
          <div className="flex flex-col gap-4 w-full">
            <FormInput
              label="Username"
              id="login"
              type="text"
              name="login"
            />
            <FormInput
              label="Password"
              id="password"
              type="password"
              name="password"
            />
          </div>
        </div>
        <Button>
          Войти
        </Button>
      </form>
    </main>
  );
};
export default SignInPage;