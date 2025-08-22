import { Button } from "@/components/ui/button";
import useBuilder from "@/side/formbuilder/context/useBuilder";

export default function SideMenu() {
  const { createForm } = useBuilder();

  return (
    <div className="w-[300px] bg-black/10 h-screen flex flex-col">
      <div className="min-h-[40px]">Form Builder</div>
      <div className="flex flex-col gap-1 p-1">
        <div>Add new form:</div>
        <Button onClick={() => createForm("checkbox")}>Checkbox</Button>
        <Button onClick={() => createForm("radio")}>radio</Button>
      </div>
    </div>
  );
}
