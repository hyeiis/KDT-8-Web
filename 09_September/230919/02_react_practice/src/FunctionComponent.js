import "./FunctionComponent.css";
import bestSeller from "./bestSeller.jpg";

const FunctionComponent = (props) => {
  const { title, author, price, type } = props;

  return (
    <div className="box">
      <h1 className="main">이번주 베스트셀러</h1>
      <img src={bestSeller} alt="도서" width={200} />
      <h2 className="title">{title}</h2>
      <div className="content">저자: {author}</div>
      <div className="content">판매가: {price}</div>
      <div className="content">구분: {type}</div>
    </div>
  );
};

export default FunctionComponent;
