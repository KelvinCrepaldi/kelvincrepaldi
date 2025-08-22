import { Button } from "@/components/ui/button";
import useBuilder from "@/side/formbuilder/context/useBuilder";
import type { formTypes } from "@/side/formbuilder/types";
import BuildOption from "./buildOption";

export default function BuildForm({ form }: { form: formTypes }) {
  const { deleteForm, updateFormQuestion, createOption } = useBuilder();

  return (
    <div className="w-[70%] border border-primary bg-white/80 rounded m-10 p-4 flex flex-col gap-4">
      {/* Pergunta editável */}
      <input
        className="border-b border-gray-300 focus:outline-none focus:border-primary text-lg font-medium bg-transparent"
        value={form.question}
        onChange={(e) => updateFormQuestion(form.id, e.target.value)}
        placeholder="Digite a pergunta..."
      />

      {/* Lista de opções */}
      <div className="flex flex-col gap-2">
        {form.options.map((option) => (
          <BuildOption key={option.id} option={option} formId={form.id} />
        ))}
      </div>

      {/* Botões de ação */}
      <div className="flex gap-2">
        <Button onClick={() => createOption(form.id)}>Adicionar opção</Button>
        <Button variant="destructive" onClick={() => deleteForm(form)}>
          Deletar pergunta
        </Button>
      </div>
    </div>
  );
}
