import useBuilder from "@/side/formbuilder/context/useBuilder";

export default function BuildFormSlider() {
  const { forms, active, handleActive } = useBuilder();

  return (
    <div className="bg-black/5 w-full p-2 flex gap-2 min-h-[120px]">
      {forms.map((item) => (
        <div
          onClick={() => handleActive(item.id)}
          className={`relative not-checked:flex flex-col items-center transition-all justify-center w-[100px] h-[100px] border rounded p-1 shadow-xl ${
            active === item.id && "border-primary bg-white/20 scale-105"
          }`}
        >
          <div className="absolute top-1 left-2 opacity-45">
            {item.position}
          </div>
          <div>{item.question}</div>
          <div className="absolute bottom-1 right-2 opacity-45 text-sm">
            {item.type}
          </div>
        </div>
      ))}
    </div>
  );
}
