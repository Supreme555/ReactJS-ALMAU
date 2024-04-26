import React from 'react';
import './item-list.css';
// import PropTypes from '../../../../react-starDB/node_modules/@types/prop-types';
import PropTypes from '../../../node_modules/prop-types';



const ItemList = (props) => {
    const {data, onItemSelected, children: renderLabel} = props;

    const items = data.map((item) => {
        const {id} = item;
        const label = renderLabel(item);

        return (
            <li
                className="list-group-item"
                key={id}
                onClick={ () => onItemSelected(id) }
            >
                {label}
            </li>)
    });

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
};

ItemList.defaultProps = {
    onItemSelected: () => {}
};

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};


export default ItemList;