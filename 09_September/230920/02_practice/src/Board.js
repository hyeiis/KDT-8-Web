import { Component } from "react";
import "./Board.css";

class Board extends Component {
  constructor(props) {
    super(props);

    // table의 번호, 제목, 작성자는 하나로 묶어서 배열 state, 작성하는 input의 제목, 작성자는 string state

    // state 초기화 - state는 객체 형태
    this.state = {
      writer: "",
      title: "",
      content: [],
      search: "", // 검색 내용
      option: "writer", // 검색 옵션
      result: [],
    };
    this.onChangeWriter = this.onChangeWriter.bind(this);
    this.handleWrite = this.handleWrite.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSeeAll = this.handleSeeAll.bind(this);
  }

  onChangeWriter(e) {
    this.setState({ writer: e.target.value });
  }

  handleWrite() {
    const newContent = {
      writer: this.state.writer,
      title: this.state.title,
    };

    // spread 연산자 (...) : 배열 추가
    // content에 this.state.content에 newContent를 추가한 것을 넣음
    this.setState({
      content: [...this.state.content, newContent],
      // input 창에 입력한 값 없애주기 위해
      title: "",
      writer: "",
    });
  }

  handleSearch() {
    const searchResult = this.state.content.filter((value) => {
      if (value[this.state.option].includes(this.state.search)) return true;
      else return false;
    });
    this.setState({ result: searchResult });
  }

  handleSeeAll() {}

  render() {
    const { writer, title, content, search, option, result } = this.state;

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
            onChange={(e) => this.onChangeWriter(e)}
          />
          &nbsp; <label htmlFor="title">제목 : </label>
          <input
            type="text"
            placeholder="제목"
            id="title"
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
            // 위에 처럼 함수를 만들어서 할 수 있고, onChange에 this.setState해서 바로 할 수 있음
          />
          &nbsp;
          <button type="button" onClick={this.handleWrite}>
            작성
          </button>
        </form>
        <br />
        <form>
          <select
            value={option}
            onChange={(e) => {
              this.setState({ option: e.target.value });
            }}>
            <option value="writer">작성자</option>
            <option value="title">제목</option>
          </select>
          &nbsp;
          <input
            type="text"
            placeholder="검색어"
            value={search}
            onChange={(e) => this.setState({ search: e.target.value })}
          />
          &nbsp;
          <button type="button" onClick={this.handleSearch}>
            검색
          </button>
          &nbsp;
          <button type="button" onClick={this.handleSeeAll}>
            전체 보기
          </button>
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
            {/* [{title, writer}, {title, wrtier}, {title, writer} ,... */}
            {/* value는 content의 값 하나 하나 (여기서는 배열 하나 하나)를 의미 */}
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
}

export default Board;
