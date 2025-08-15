export const Border = ({
  children,
}: {
  children: React.JSX.Element | React.JSX.Element[] | string;
}) => {
  return (
    <div className="relative border border-primary/20 bg-diagonal-lines">
      <div className="relative border m-[4px]">{children}</div>
      <div
        className={`absolute top-[-1px] left-[-1px] z-10 w-[8px] h-[1px] bg-primary`}
      />
      <div
        className={`absolute top-[-1px] right-[-1px] z-10 w-[8px] h-[1px] bg-primary`}
      />
      <div
        className={`absolute top-[-1px] left-[-1px] z-10 w-[1px] h-[8px] bg-primary`}
      />
      <div
        className={`absolute top-[-1px] right-[-1px] z-10 w-[1px] h-[8px] bg-primary`}
      />

      <div
        className={`absolute bottom-[-1px] left-[-1px] z-10 w-[8px] h-[1px] bg-primary`}
      />
      <div
        className={`absolute bottom-[-1px] right-[-1px] z-10 w-[8px] h-[1px] bg-primary`}
      />
      <div
        className={`absolute bottom-[-1px] left-[-1px] z-10 w-[1px] h-[8px] bg-primary`}
      />
      <div
        className={`absolute bottom-[-1px] right-[-1px] z-10 w-[1px] h-[8px] bg-primary`}
      />
    </div>
  );
};
