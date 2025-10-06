import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact  from "./AddContact";
import ContactList from "./ContactList";


import './App.css';

function App() {

  const Contacts = [
    {
      id: 1,
      name: "Jui Mandal",
      email: "juimandal31@gmail.com"
    },
    {
      id: 2,
      name: "Abhishek Purohit",
      email: "abhishekp@example.com"
    },
    {
      id: 3,
      name: "Nikita Sharma",
      email: "nikita.sharma@example.com"
    },
    {
      id: 4,
      name: "Rahul Verma",
      email: "rahul.verma@example.com"
    },
    {
      id: 5,
      name: "Ananya Singh",
      email: "ananya.singh@example.com"
    }
  ];
  
 
  
  return (
 <div>
  <Header/>
  <AddContact/>
  <ContactList Contacts={Contacts} />



 </div>

  );
}

export default App;
