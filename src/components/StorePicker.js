/**
 * Created by tom on 3/21/2018.
 */
import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <form action="" className="store-picker">
                {/* this is what a comment looks like*/}
            <h2>Please Enter A Store </h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store</button>
        </form>
        )
    }
}

export default StorePicker;
