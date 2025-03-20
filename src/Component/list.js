import React from "react";
import ListItem from "./listItem"; // 첫 글자 대문자로 변경
import '../App.css';

function List({numberList, removeItem}) {
    return (
        <div className="list">
            {numberList.map((item, index) => (
                <ListItem key={index} item={item} onClick={() => removeItem(item)} /> // key prop 추가
            ))}
        </div>
    );
}

export default List;
