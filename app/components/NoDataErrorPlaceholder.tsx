export default function NoDataErrorPlaceholder({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-center text-4xl font-bold text-cyan-950 col-span-full py-10">
      {children}
    </div>
  );
}
