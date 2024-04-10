import React, { useState } from "react";
import './item-add-form.css';


export default ItemAddForm = (addItem) => {

    const [state, setState] = useState(initialState)
    

    const onLabelChange = (e) => {
        setState(e.target.value)
    };
    const onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };
    return (
        <form className={"item-add-form d-flex"}
            onSubmit={onSubmit}>

            <input type={"text"}
                className={"form-control"}
                onChange={onLabelChange}
                placeholder={"What need to be done"}
                value={state} />
            <button
                className={"btn btn-outline-secondary"} >
                Add Item

            </button>
        </form>
    )
}

// export default class ItemAddForm extends Component {

//     state = {
//         label: ''
//     };

//     onLabelChange = (e) => {
//         this.setState({
//             label: e.target.value
//         });
//     };
//     onSubmit = (e) => {
//         e.preventDefault();
//         this.props.onItemAdded(this.state.label);
//         this.setState({
//             label: ''
//         });
//     };
//     render() {
//         return (
//             <form className={"item-add-form d-flex"}
//                 onSubmit={this.onSubmit}>

//                 <input type={"text"}
//                     className={"form-control"}
//                     onChange={this.onLabelChange}
//                     placeholder={"What need to be done"}
//                     value={this.state.label} />
//                 <button
//                     className={"btn btn-outline-secondary"} >
//                     Add Item

//                 </button>
//             </form>
//         )
//     }
// }