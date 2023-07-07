const contacts = require("./contacts");
// const yargs = require('yargs');
// const {hideBin} = require("yargs/helpers")
const argv = require('yargs').argv;



const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const listContacts = await contacts.listContacts();
      return console.table(listContacts);

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact)

    case "remove":
          const deleteContact = await contacts.removeContact(id)
          return console.log(deleteContact)

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};


// const arr = hideBin(process.argv)
// const { argv } = yargs(arr)
// console.log(argv)
invokeAction(argv)

// invokeAction({ action: "list" })
// invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({ action: "add", name: "Maxim Lysov", email: "maxim.ante@vestibul.co.uk", phone: "(111) 914-3792" });
// invokeAction({ action: "remove", id: "e6ywwRe4jcqxXfCZOj_1e" });
