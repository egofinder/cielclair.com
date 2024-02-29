import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CollapseBoxProps {
  title: string;
  data: string[];
}

const CollapseBox = ({ title, data }: CollapseBoxProps) => {
  return (
    <Accordion type="multiple">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="justify-start py-0 font-normal">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="pl-8">
            {data.map((item, index) => (
              <li key={index} className="list-inside list-disc">
                {item}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CollapseBox;
