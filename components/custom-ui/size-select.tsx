import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/type/product";

interface SizeSelectProps {
  sizes: Product["sizes"];
  setSize: (size: string) => void;
}

const SizeSelect = ({ sizes, setSize }: SizeSelectProps) => {
  return (
    <Select onValueChange={(size) => setSize(size)}>
      <SelectTrigger className="h-10 w-full rounded-none border-black">
        <SelectValue placeholder="사이즈를 선택해 주세요." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {sizes.map((size, index) => (
            <SelectItem key={index} value={size}>
              {size}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SizeSelect;
