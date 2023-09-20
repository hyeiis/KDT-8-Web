function Event() {
  const handleClick = () => {
    alert("클릭했습니다");
  };

  const handleClick2 = (str) => {
    alert(str);
  };

  return (
    <>
      {/* <button onClick={handleClick()}>클릭</button> 
      → 함수에 괄호치면 웹 실행되자마자 함수도 바로 실행 됨*/}
      <button onClick={handleClick}>클릭</button>
      <button onClick={() => handleClick2("HI~")}>클릭2</button>
      {/* 인자를 넣으려면 화살표 함수를 이용하면 된다 */}
    </>
  );
}

export default Event;
