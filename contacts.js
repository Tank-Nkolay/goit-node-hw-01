const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("./db/contacts.json");

// TODO: задокументировать каждую функцию
async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(id) {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === id);
  if (!result) {
    return null;
  }
  return result;
}

async function removeContact(id) {
  const contacts = await listContacts();

  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const [removeById] = contacts.splice(idx, 1);

  async function updatedContacts(contacts) {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  }

  await updatedContacts(contacts);

  return removeById;
}

async function addContact({ name, email, phone }) {
  const contacts = await listContacts();

  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

// node index.js --action add --name Peach --email peach@gmail.com --phone 777-22-22
