import React, { useState, useEffect } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [searchText, setSearchText] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [searching, setSearching] = useState(false);
  const [previousContacts, setPreviousContacts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = () => {
    if (name.length < 3 || /\d/.test(name)) {
      setErrorMessage('Имя должно содержать более 3 символов и не должно содержать цифры.');
      setTimeout(() => {
        setErrorMessage('');
      }, 4000);
      return;
    }

    if (number.length !== 10 || /\D/.test(number)) {
      setErrorMessage('Номер должен содержать ровно 10 цифр.');
      setTimeout(() => {
        setErrorMessage('');
      }, 4000);
      return;
    }

    const newContact = {
      name: name,
      number: number,
      id: Date.now(),
    };
    setContacts([...contacts, newContact]);
    setName('');
    setNumber('');
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const editContact = (index) => {
    const contactToEdit = contacts[index];
    setName(contactToEdit.name);
    setNumber(contactToEdit.number);
    setEditIndex(index);
  };

  const saveContact = () => {
    const updatedContact = {
      name: name,
      number: number,
      id: contacts[editIndex].id,
    };
    const updatedContacts = [...contacts];
    updatedContacts[editIndex] = updatedContact;
    setContacts(updatedContacts);
    setName('');
    setNumber('');
    setEditIndex(-1);
  };

  const searchContact = () => {
    const filteredContacts = contacts.filter(
      (contact) =>
        contact.id.toString() === searchText ||
        contact.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setPreviousContacts(contacts);
    setContacts(filteredContacts);
    setSearching(true);
  };

  const goBack = () => {
    setContacts(previousContacts);
    setSearching(false);
    setSearchText('');
  };

  return (
    <div className="container">
      <h1 className="mt-4">Список контактов</h1>

      {!searching ? (
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Поиск по ID или имени..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="btn btn-primary mt-2" onClick={searchContact}>
            Найти
          </button>
        </div>
      ) : (
        <div>
          <button className="btn btn-secondary" onClick={goBack}>
            Назад
          </button>
        </div>
      )}

      {!searching && (
        <>
          <h2>Создать контакт</h2>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Имя пользователя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Номер пользователя"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          {editIndex === -1 ? (
            <button className="btn btn-primary mb-3" onClick={createContact}>
              Создать контакт
            </button>
          ) : (
            <button className="btn btn-primary mb-3" onClick={saveContact}>
              Сохранить контакт
            </button>
          )}

          <h2>Список контактов</h2>
          <ul className="list-group">
            {contacts.map((contact, index) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={contact.id}>
                <div>
                  {contact.name} - {contact.number} - {contact.id}
                </div>
                {!searching && (
                  <>
                    <button className="btn btn-outline-danger me-2" onClick={() => deleteContact(contact.id)}>
                      Удалить
                    </button>
                    <button className="btn btn-outline-success" onClick={() => editContact(index)}>
                      Изменить
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
