import React from 'react';
import ItemList from "../item-list";
import {withData} from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets,
} = new SwapiService();


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};


const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;

const PersonList = withData(  withChildFunction(ItemList, renderName), getAllPeople  );
const PlanetList = withData(  withChildFunction(ItemList, renderName), getAllPlanets  );
const StarshipList = withData(  withChildFunction(ItemList, renderModelAndName), getAllStarships  );

export {
    PersonList,
    PlanetList,
    StarshipList
}