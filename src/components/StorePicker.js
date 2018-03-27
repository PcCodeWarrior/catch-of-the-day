/**
 * Created by tom on 3/21/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {

    myInput = React.createRef();
    static propTylpes = {
        history: PropTypes.object
    };


    goToStore = (event) => {

        event.preventDefault();
        const storeName = this.myInput.value.value
        this.props.history.push(`/store/${storeName}`);
    }


    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                {/* this is what a comment looks like*/}
                <h2>Please Enter A Store </h2>

                <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;
