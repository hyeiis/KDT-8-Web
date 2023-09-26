import { Link, useSearchParams } from "react-router-dom";

export const users = [
  {
    id: 1,
    name: "Charile",
    comment: [{ text: "Hello" }],
  },
  {
    id: 2,
    name: "Chris",
    comment: [{ text: "Hi" }],
  },
  {
    id: 3,
    name: "John",
    comment: [{ text: "Nice to meet you" }],
  },
];

export default function User() {
  // searchParams는 쿼리 스트링 값을 가져오는 것
  // setSearchParams는 쿼리 스트링 값을 할당하는 것
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("mode"));
  // setTimeout(() => {
  //   setSearchParams({ mode: "Light" });
  // }, 3000);
  return (
    <>
      <div>
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <Link to={`/user/${user.id}`}>{user.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
