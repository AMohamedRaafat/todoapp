import React from 'react';
import './TodoItems.css'
const TodoItems = (props) => {
    const {items, handleDelete} = props;
    const length = items.length;
    const ListItems = length ? (items.map(item => {
        return (
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span onClick={() => handleDelete(item.id)} className=" action icon">&times;</span>
            </div>
        )
    })) : (
        <p >There Is No Item To Show</p>
    );
    return (
        <div className="TodoItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {ListItems};
        </div>
    )
}
export default TodoItems;