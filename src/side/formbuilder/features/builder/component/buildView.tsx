import { Button } from "@/components/ui/button";
import useBuilder from "@/side/formbuilder/context/useBuilder";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BuildForm from "./buildForm";

export default function BuildView() {
  const { forms, active } = useBuilder();

  return (
    <div className="flex flex-1  w-full">
      <Button className="h-full rounded mx-1">
        <ChevronLeft />
      </Button>
      <div className="flex-1 flex w-full">
        {forms
          .filter((form) => form.id === active)
          .map((form) => (
            <BuildForm form={form} />
          ))}
      </div>
      <Button className="h-full rounded mx-1">
        <ChevronRight />
      </Button>
    </div>
  );
}
