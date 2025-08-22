import { Button } from "@/components/ui/button";
import useBuilder from "@/side/formbuilder/context/useBuilder";
import { useNavigate } from "react-router";

export default function Header() {
  const { project } = useBuilder();
  const navigate = useNavigate();

  return (
    <div className="bg-black/5 w-full p-2 flex justify-between gap-2">
      <div className="flex  items-end gap-5">
        <div className="text-2xl">{project.title}</div>
        <div>{project.description}</div>
      </div>
      <Button
        onClick={() => navigate("/form/render")}
        className="bg-green-800 rounded"
      >
        Play test
      </Button>
    </div>
  );
}
