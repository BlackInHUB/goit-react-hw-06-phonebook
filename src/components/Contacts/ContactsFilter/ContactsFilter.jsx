import React from "react";
import { FilterLabel, Filter } from "./ContactsFilter.styled";
import { useDispatch, useSelector } from "react-redux";
import { filterChange, getFilter } from "redux/phonebookSlice";

export const ContactsFilter = () => {
    const filter = useSelector(getFilter)
    const dispatch = useDispatch()

    const handleFilterChange = (e) => {
        dispatch(filterChange(e.target.value))
    }

    return (
        <FilterLabel>Find contacts by name
        <br/>
            <Filter value={filter} onChange={handleFilterChange} />
        </FilterLabel>
    )
}
