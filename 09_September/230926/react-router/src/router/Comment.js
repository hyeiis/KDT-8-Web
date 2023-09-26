import { useOutletContext } from "react-router-dom";

export default function Comment() {
  const { comment } = useOutletContext();

  return (
    <>
      <div>
        {comment.map((value, idx) => {
          return <div key={idx}>{value.text}</div>;
        })}
      </div>
    </>
  );
}
