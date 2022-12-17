const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
  // ...твой код
}

function getContactById(contactId) {
  //
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
