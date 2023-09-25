import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  margin: 10px;
  width: 120px;
  height: 30px;
`;

const Button = styled.button`
  background-color: skyblue;
  border: none;
  border-radius: 5px;
  width: 50px;
  height: 30px;
`;

const List = styled.ul`
  width: 210px;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  margin: 0;
  padding-left: 10px;
`;

const Item = styled.li``;

export default function AddList() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      item,
    };
    setList([...list, newItem]);
    setItem("");
  };
  return (
    <>
      <Input value={item} onChange={(e) => setItem(e.target.value)} />
      &nbsp;
      <Button onClick={handleAdd}>Add</Button>
      <List>
        {list.map((item) => {
          return (
            <Item key={item.id}>
              {item.item}
              <hr />
            </Item>
          );
        })}
      </List>
    </>
  );
}
