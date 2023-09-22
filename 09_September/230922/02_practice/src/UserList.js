import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    // useEffect는 비동기 함수를 직접적으로 지원하지 않음
    // 비동기 함수를 사용하려면 내부에 비동기 함수를 정의하고 바로 호출
    const axiosUser = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      setUser(...user, result.data);
    };

    axiosUser();

    return () => {
      console.log("연결해제 완료");
    };
  }, []);

  useEffect(() => {
    console.log("유저 정보 업데이트", user.length);
  }, [user]);

  return (
    <>
      {user.length > 0 ? (
        <ul>
          {user.map((user) => {
            return (
              <li key={user.id}>
                {user.username} - {user.email}
              </li>
            );
          })}
        </ul>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
