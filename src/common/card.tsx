interface CardProps {
  id: number | string;
  onClick: (id: any) => void;
}

export function Card({ id, onClick }: CardProps) {
  return (
    <button id={String(id)} onClick={() => onClick(id)} className="text-black h-16 w-32 p-4 border-3 text-center margin m-2 padding p-5"> {id}
    </button>
  );
}