import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface FormInputProps {
  name?: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  defaultValue?: string;
  placeholder?: string;
}

const FormInput = (props: FormInputProps) => {
  const { name, label, type, defaultValue, placeholder } = props;

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </div>
  );
};
export default FormInput;
