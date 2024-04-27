import axiosInstance from "@/shared/api/axiosInstance";
import Button from "@/shared/ui/Button/Button";
import { FormInput } from "@/features/FormInput/FormInput";
import { redirect } from "next/navigation";

const registerAction = async (formData: FormData) => {
  'use server';
  
  const body = {
    login: formData.get('login'),
    email: formData.get('email'),
    password: formData.get('password'),
    bio: formData.get('bio'),
    educationInfo: formData.get('educationInfo'),
    phone: formData.get('phone'),
    telegram: formData.get('telegram'),
    otherContacts: formData.get('otherContacts'),
    skills: [formData.get('skills')],
    type: formData.get('type'),
  };
  console.log(body);

  const res = await axiosInstance.post('http://77.232.128.185:80/auth/register', body, {
    withCredentials: false,
  })
  if (res.status !== 200) {
    return;
  }
  redirect('/login');
};

const RegisterPage = ({}) => {
  return (
    <main className="flex flex-col gap-4 rounded-lg p-5 min-w-[500px] border border-gray-700">
      <h1 className="text-2xl">Регистрация</h1>

      <form
        className="flex flex-col gap-4 w-full"
        action={registerAction}
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
            <FormInput
              label="Bio"
              id="bio"
              type="text"
              name="bio"
            />
            <FormInput
              label="Education Info"
              id="educationInfo"
              type="text"
              name="educationInfo"
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <FormInput
              label="Phone"
              id="phone"
              type="text"
              name="phone"
            />
            <FormInput
              label="Telegram"
              id="telegram"
              type="text"
              name="telegram"
            />
            <FormInput
              label="Other contacts"
              id="otherContacts"
              type="text"
              name="otherContacts"
            />
            <FormInput
              label="Skills"
              id="skills"
              type="text"
              name="skills"
            />
            <div className="flex flex-col gap-1">
              <label htmlFor="type">Role</label>
              <select
                id="type"
                name="type"
                className="h-10 px-2 rounded-lg text-black"
              >
                <option value="menti" className="">Менти</option>
                <option value="mentor">Ментор</option>
              </select>
            </div>
          </div>
        </div>
        <Button>
          Зарегистрироваться
        </Button>
      </form>

      {/* <pre>{JSON.stringify(signInState, null, 2)}</pre> */}
    </main>
  );
};
export default RegisterPage;