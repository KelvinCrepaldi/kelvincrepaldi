import useBuilder from "@/side/formbuilder/context/useBuilder";
import type { optionTypes } from "@/side/formbuilder/types";

type BuildOptionProps = {
  option: optionTypes;
  formId: string;
};

export default function BuildOption({ option, formId }: BuildOptionProps) {
  const { deleteOption, updateOptionLabel } = useBuilder();

  return (
    <div className="flex items-center justify-between border p-2 rounded bg-gray-50">
      {/* Label editável */}
      <input
        className="flex-1 bg-transparent border-none focus:outline-none"
        value={option.label}
        onChange={(e) => updateOptionLabel(formId, option.id, e.target.value)}
        placeholder="Digite a opção..."
      />

      {/* Botão remover */}
      <button
        className="text-red-600 ml-2"
        onClick={() => deleteOption(formId, option.id)}
      >
        ✕
      </button>
    </div>
  );
}
