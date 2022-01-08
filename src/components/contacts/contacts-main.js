import React, { useState, useEffect } from 'react';
import './contacts-main.css';
import ContactsList from './contacts-list';
import GenderFilter from './gender-filter';

const contactsData = [{
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male"
    }, {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female"
    }, {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666",
        gender: "none"
    }, {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female"
    }, {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male"
    }, {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male"
  }];

export function getContact(lastName) {
  return contactsData.find(
    contact => contact.lastName === lastName
  );
}

function Contacts() {
  const [contacts, setContacts] = useState(contactsData);
  const [genderFilter, setGenderFilter] = useState({
    female: true,
    male: true,
    none: true
  });
  const [searchValue, setSearchValue] = useState('');
  
  // Get data from gender-filter element
  const getGenderValue = ({showGender}) => {
    setGenderFilter(showGender);
    setContacts(contactsData);
  };

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
    setContacts(contactsData);
  }

  useEffect(() => {
    if (searchValue === '') {
      setContacts(contacts.filter(contact => (genderFilter[contact.gender])));
    } else {
    setContacts(contacts.filter((contact) =>
    ((contact.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.phone.includes(searchValue)) &&
      (genderFilter[contact.gender]))));
    }
  }, [searchValue, genderFilter]);

  return <div className='main-container'>
            <div className="header">
              <h2>Contacts</h2>
            </div>
            <div>
              <input type="text" placeholder="Search" onChange={onChangeHandler}></input>
            </div>
            <div>
               <GenderFilter getGenderValue={getGenderValue}/>
            </div>
            <div className='contacts'>
                <ContactsList someContacts={contacts}/>
            </div>
        </div>
}


export default Contacts;