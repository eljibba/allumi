import { FormInput } from "@/features/FormInput";
import Button from "@/shared/ui/Button/Button";

const signInAction = async (props: any) => {
  'use server';
  console.log(props);
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
              label="Email"
              id="email"
              type="email"
              name="email"
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