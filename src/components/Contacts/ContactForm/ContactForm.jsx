import { useState } from "react";
import { nanoid } from "nanoid";
import { Form, FormLabel, FormInput, SubmitBtn } from "./ContactForm.styled";

export default function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break;
            default:
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            id: nanoid(),
            name: e.target.name.value,
            number: e.target.number.value
    }

        onSubmit(newContact)
        resetForm();
}

    const resetForm = () => {
        setName('');
        setNumber('');
  }

    return (
        <Form onSubmit={handleSubmit}>
            <FormLabel htmlFor="name">Name
                <br />
                <FormInput
                    type="text"
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </FormLabel>
            <FormLabel htmlFor="number">Number
                <br />
                <FormInput
                    type="tel"
                    value={number}
                    name="number"
                    onChange={handleInputChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </FormLabel>
            <SubmitBtn type="submit">Add contact</SubmitBtn>
        </Form>
    )
}