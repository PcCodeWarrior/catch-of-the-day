/**
 * Created by tom on 3/23/2018.
 */


import React from "react";
//import {formatPrice} from '../helpers';


class EditFishForm extends React.Component {
    handleChange = (event) => {
        console.log(event);
        //copy of fish
        const updatedFish = {
            ...this.props.fish,
            [event.target.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish)

    }

    render() {
        return <div className="fish-edit">
            <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name}/>
            <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price}/>
            <select type="text" name="status" onChange={this.handleChange}>
                <option value="available">Fresh</option>
                <option value="unavailable">Sold Out</option>
            </select>
            <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}/>
            <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image}/>
            <button onClick= {()=> this.props.deleteFish(this.props.index)} >Remove Fish</button>
        </div>
    }
}

export default EditFishForm;