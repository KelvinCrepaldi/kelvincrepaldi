import useBuilder from "../../context/useBuilder";

export default function FormRenderPage() {
  const { project, forms } = useBuilder();
  return (
    <section>
      {project.id}

      {forms.map((form) => (
        <div className="p-1 border">
          {form.question}
          {form.options.map((option) => (
            <div className="mx-4">{option.label}</div>
          ))}
        </div>
      ))}
    </section>
  );
}
