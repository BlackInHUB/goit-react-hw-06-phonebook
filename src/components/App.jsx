import { Box } from "utils/Box";
import { MainTitle, Title } from './Contacts/Titles.styled';
import ContactForm from "./Contacts/ContactForm/ContactForm";
import { ContactsList } from './Contacts/ContactsList/ContactsList'
import {ContactsFilter} from "./Contacts/ContactsFilter/ContactsFilter";

export default function App() {
    return (
      <Box width="20%" m="0 auto" mt={[4]} p={[4]} border="1px solid" borderColor="teal" borderRadius={[4]}>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <Title>Contacts</Title>
        <ContactsFilter />
        <ContactsList />
      </Box>
    )
};