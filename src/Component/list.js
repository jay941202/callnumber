import React from "react";
import ListItem from "./listItem"; // 첫 글자 대문자로 변경

function List(props) {
    return (
        <div>
            <h1>Number List</h1>
            {props.numberList.map((item, index) => (
                <ListItem key={index} item={item} /> // key prop 추가
            ))}
        </div>
    );
}

export default List;
