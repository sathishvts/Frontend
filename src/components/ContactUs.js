import React, { useState } from 'react';
import sampel1 from '../images/sampel 1.jpg';

function ContactForm() {

  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [Address, setAddress] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && mobile && email && Address) {
      const newContact = { name, mobile, email, Address };
      setContacts([...contacts, newContact]);
      setName('');
      setMobile('');
      setEmail('');
      setAddress('');

    } else {
      alert('Please fill in all fields.');
    }
  };

  return (

    <div className='contact-image'>
      <h1 className='ContactUs'>ContactUs</h1>
      <img src={sampel1} alt="Bridal Jewel1" />

      <div className='form'>
       
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your Name :"

            />
          </label>
          <br />
          <label>
            Mobile Number:
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              placeholder="Enter your Mobile :"

            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your Email :"

            />
          </label>
          <br />
          <label>
            Address:
            <textarea
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              required
              rows="4" 
              cols="50" 
              placeholder="Enter your Address"
            />
          </label>

          <button className="button" type="submit">Submit </button>
        </form>


        <table>

          <tbody>
            <div className='name-form'>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.mobile}</td>
                <td>{contact.email}</td>
                <td>{contact.Address}</td>
               
              </tr>
              
            ))}
              </div>

          </tbody>
        </table>
      </div>
      <div className='get-container'>
        <h1 className='get-in-touch'>Get In Touch</h1>
        <br />
        <h2 className='numbers'>+62880 56432</h2>
        <br />
        <h2 className='www'>www.dkbridal.com</h2>
        <br />
        <h2 className='dkbridal'>dkbridal@gmail.com</h2>
      </div>

     
    </div>
  );
}

export default ContactForm;