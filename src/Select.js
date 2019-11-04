import React from "react";

class Select extends React.Component {
    state = {
        currentlyReading: "Currently Reading",
        wantToRead: "Want to Read",
        read: "Read"
    };
    
    render() {
        const categs = Object.values(this.state);
        const {changeBookShelf,className,id} = this.props
        return (
            <select
                onChange={event => changeBookShelf(event)}
                className={className}
                id={id}
                value={className}
            >
                <option value="move" disabled>Move to...</option>
                {categs.map((categ, i) => (
                    <option key={categ} value={Object.keys(this.state)[i]}>
                        {categ}
                    </option>
                ))}
                <option value="none">None</option>
            </select>
        );
    }
}

export default Select;
