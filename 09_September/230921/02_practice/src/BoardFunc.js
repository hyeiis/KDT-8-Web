import { useState } from "react";
import "./Board.css";

export default function BoardFunc() {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState([]);
  const [option, setOption] = useState("writer");
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const handleWrite = () => {
    const newContent = { title, writer };
    setContent([...content, newContent]);
    setWriter("");
    setTitle("");
  };

  const handleSearch = () => {
    const searchResult = content.filter((value) => {
      if (value[option].includes(search)) return true;
      return false;
    });

    setResult(searchResult);
  };

  return (
    <>
      <form className="box">
        <label htmlFor="writer">작성자 : </label>
        {/* onChange() : input, textarea, select 등의 값이 변경될 때마다 발생하는 이벤트 핸들러 */}
        <input
          type="text"
          placeholder="작성자"
          id="writer"
          value={writer}
          onChange={(e) => {
            setWriter(e.target.value);
          }}
        />
        &nbsp; <label htmlFor="title">제목 : </label>
        <input
          type="text"
          placeholder="제목"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          // 위에 처럼 함수를 만들어서 할 수 있고, onChange에 this.setState해서 바로 할 수 있음
        />
        &nbsp;
        <button type="button" onClick={handleWrite}>
          작성
        </button>
      </form>
      <br />
      <form>
        <select
          value={option}
          onChange={(e) => {
            setOption(e.target.value);
          }}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        &nbsp;
        <input
          type="text"
          placeholder="검색어"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        &nbsp;
        <button type="button" onClick={handleSearch}>
          검색
        </button>
        &nbsp;
        {/* <button type="button" onClick={handleSeeAll}>
            전체 보기
          </button> */}
      </form>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {content.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4>검색 결과</h4>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {result.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
