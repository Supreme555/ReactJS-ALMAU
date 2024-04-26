import React from 'react';
import './row.css';
// import PropTypes from '../../../../react-starDB/node_modules/@types/prop-types';
// import PropTypes from '../../../node_modules/prop-types';
import PropTypes from '../../../node_modules/prop-types/index';
import ItemList from "../item-list";

const Row = ({left, right}) => {
    return (
        <div className="row">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    )
};

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};


export default Row;