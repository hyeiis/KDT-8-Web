import { Component } from "react";
import "./StateClass.css";

class StateClass extends Component {
  constructor(props) {
    super(props);

    this.state = { writer: "", title: "", search: "" };
    this.handleWrite = this.handleWrite.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleWrite() {
    this.handleWrite = this.setState(() => ({
      title: "",
      writer: "",
    }));
  }

  handleSearch() {
    this.handleSearch = this.setState();
  }

  render() {
    const { writer, title } = this.state;

    return (
      <>
        <div className="box">
          작성자 : <input type="text" placeholder="작성자" id="writer" />
          &nbsp; 제목 : <input type="text" placeholder="제목" id="title" />
          &nbsp;
          <button onClick={this.handleWrite}>작성</button>
        </div>
        <br />
        <select name="search" id="search">
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        &nbsp;
        <input type="text" placeholder="검색어" />
        &nbsp;
        <button onClick={this.handleSearch}>검색</button>
        <br />
        <table>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <tr>
            <td></td>
            <td>{title}</td>
            <td>{writer}</td>
          </tr>
        </table>
      </>
    );
  }
}

export default StateClass;
