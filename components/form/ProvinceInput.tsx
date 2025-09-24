import { provinces } from "@/utils/provinces";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProvinceInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "province";
  return (
    <div className="flex flex-col gap-1">
      <Label className="capitalize" htmlFor={name}>
        {name}
      </Label>
      <Select
        name={name}
        defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
        required
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Province" />
        </SelectTrigger>
        <SelectContent>
          {provinces.map((item) => {
            return (
              <SelectItem key={item.PROVINCE_ID} value={item.PROVINCE_NAME}>
                <span className="capitalize">{item.PROVINCE_NAME}</span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default ProvinceInput;
