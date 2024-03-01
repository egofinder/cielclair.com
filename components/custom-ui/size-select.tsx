import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SizeSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-full rounded-none border-black">
        <SelectValue placeholder="사이즈를 선택해 주세요." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="size_1">사이즈 1</SelectItem>
          <SelectItem value="size_2">사이즈 2</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SizeSelect;
