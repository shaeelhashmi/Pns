
interface props{
 bg:string,
 heading:string,
 text:string
}
export default function AuthorHeading({ bg, heading, text }: props) {
  return (
    <div style={{ backgroundColor: bg }} className="p-3 rounded-lg">
      <h3 style={{ color: text }} className="font-georgia text-2xl text-center font-bold">
        {heading}
      </h3>
    </div>
  );
}

