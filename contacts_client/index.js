// any global variables 
const base_url = `http://127.0.0.1:3000`
const contactService = new ContactService(base_url)
const deleteBttn = document.getElementById('delete-bttn')
deleteBttn.addEventListener('click', )
Contact.contactForm.addEventListener('submit', handleSubmit())

contactService.getContacts()
Contact.renderForm()

function handleSubmit(event){
    event.preventDefault()
    contactService.createContact()
    event.target.reset()
}