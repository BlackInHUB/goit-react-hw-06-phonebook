import React from "react";
import { List, ListItem, ListItemText, DeleteBtn } from "./ContactsList.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContacts, getFilter } from "redux/phonebookSlice";

export const ContactsList = () => {
    const contacts = useSelector(getContacts)
    const filter = useSelector(getFilter)
    const dispatch = useDispatch()

    const onDeleteBtn = (e) => {
        dispatch(deleteContact(e.target.id))
    }

    const contactsToRender = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <List>
        {contactsToRender.map(({ name, number, id }) => (<ListItem key={id}>
            <ListItemText>{name}: {number}</ListItemText>
            <DeleteBtn type="button" id={id} onClick={onDeleteBtn}>Delete</DeleteBtn>
        </ListItem>))}
        </List>
    )
}