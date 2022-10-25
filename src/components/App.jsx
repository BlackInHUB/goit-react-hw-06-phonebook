import useLocalStorage from "./hooks/useLocalStorage";
import { Box } from "utils/Box";
import { MainTitle, Title } from './Contacts/Titles.styled';
import ContactForm from "./Contacts/ContactForm/ContactForm";
import { ContactsList } from './Contacts/ContactsList/ContactsList'
import {ContactsFilter} from "./Contacts/ContactsFilter/ContactsFilter";

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useLocalStorage('filter', '')

  const newContactAdd = (newContact) => {
    for (let contact of contacts) {
      if (contact.name === newContact.name) {
        return alert(`${newContact.name} is already in contacts.`);
      }
    }

    setContacts(state => [...state, newContact])
  }
  
  const deleteContact = (deleteId) => {
    setContacts(state => state.filter(contact => contact.id !== deleteId))
  }

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredNames = () => {
    const normilizedName = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normilizedName))
  }

    const contactsToRender = getFilteredNames();

  

    return (
      <Box width="20%" m="0 auto" mt={[4]} p={[4]} border="1px solid" borderColor="teal" borderRadius={[4]}>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm
          onSubmit={newContactAdd}
        />
        <Title>Contacts</Title>
        <ContactsFilter value={filter} onChange={handleFilterChange} />
        <ContactsList
          contacts={contactsToRender}
          onDeleteBtnClick={deleteContact}
        />
      </Box>
    )
};