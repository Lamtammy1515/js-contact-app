// any global variables 
const base_url = `http://127.0.0.1:3000`
const contactService = new ContactService(base_url)

contactService.getContacts()
//any initializations of the application 
console.log(Contact.all)