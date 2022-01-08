import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './contact-links.css';

const ContactsList = ({ someContacts }) => {
    return (<div>
        <nav className='contact-links'>
            {someContacts.map((contact) => (<Link
                className='link'
                to={`/contacts/${contact.lastName}`}
                key={contact.lastName}
            >{contact.firstName} {contact.lastName}
            </Link>))}
        </nav>
        <Outlet />
    </div>)
}

{/* <Routes>
            {someContacts.map((contact) =>
                <Route path={`/contacts/${contact.lastName}`}
                        element={<Contact phone={contact.phone}
                                            name={contact.firstName}
                                            surname={contact.lastName}
                                            gender={contact.gender} />}
                />)}
        </Routes> */}

// const ContactsList = ({ someContacts }) => {
//     return <div>
//         {someContacts.map((contact, index) =>
//         <Contact key={index} phone={contact.phone} name={contact.firstName} surname={contact.lastName} gender={contact.gender} />)}
//     </div>
// }
export default ContactsList;