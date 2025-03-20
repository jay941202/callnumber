import React from "react";
import ListItem from "./listItem"; // 첫 글자 대문자로 변경
import '../App.css';

function List(props) {
    return (
        <div className="list">
            {props.numberList.map((item, index) => (
                <ListItem key={index} item={item} /> // key prop 추가
            ))}
        </div>
    );
}

export default List;
