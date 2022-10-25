import React from "react";
import PropTypes from 'prop-types'
import { List, ListItem, ListItemText, DeleteBtn } from "./ContactsList.styled";

export const ContactsList = ({ contacts, onDeleteBtnClick }) => {

    return (
        <List>
            {contacts.map(({ name, number, id }) => (<ListItem key={id}>
                <ListItemText>{name}: {number}</ListItemText>
                <DeleteBtn type="button" id={id} onClick={() => onDeleteBtnClick(id)}>Delete</DeleteBtn>
            </ListItem>))}
        </List>
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })),
    onDeleteBtnClick: PropTypes.func.isRequired,
}