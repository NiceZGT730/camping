import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const TextAreaInput = ({
  name,
  LabelText,
  defaultValue,
}: {
  name: string;
  LabelText?: string;
  defaultValue?: string;
}) => {
  return (
    <div className="mb-2">
      <Label className="capitalize" htmlFor={name}>
        {LabelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        placeholder="Type your message here."
      />
    </div>
  );
};
export default TextAreaInput;
