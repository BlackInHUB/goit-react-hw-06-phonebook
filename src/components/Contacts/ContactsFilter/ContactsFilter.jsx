import React from "react";
import PropTypes from 'prop-types'
import { FilterLabel, Filter } from "./ContactsFilter.styled";

export const ContactsFilter = ({value, onChange}) => {

    return (
        <FilterLabel>Find contacts by name
        <br/>
            <Filter value={value} onChange={onChange} />
        </FilterLabel>
    )
}

ContactsFilter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}