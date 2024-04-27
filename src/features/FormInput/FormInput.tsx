import TextInput from "@/shared/ui/TextInput/TextInput";

interface IFormInput {
  label: string,
  id: string,
  type: string,
  name: string,
}

export const FormInput = (data: IFormInput) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="email">{data.label}</label>
      <TextInput
        type={data.type}
        name={data.name}
        id={data.id}
        className="text-black w-full"
        required
      />
    </div>
  );
};
