const PokemonSingleCardBase = ({
  children,
  isClickable,
  fullStyled,
}: {
  children: React.ReactNode;
  isClickable?: boolean;
  fullStyled?: boolean;
}) => {
  return (
    <div
      className={`relative text-slate-900 shadow-lg rounded-xl p-4 space-y-10 
        ${
          isClickable
            ? "hover:scale-105 hover:rotate-1 transition-transform hover:bg-slate-950 hover:text-white"
            : ""
        }
        ${fullStyled ? "bg-amber-300 grid grid-cols-1 md:grid-cols-12 gap-4 items-center" : "bg-white "}
      `}
    >
      {children}
    </div>
  );
};

export default PokemonSingleCardBase;
