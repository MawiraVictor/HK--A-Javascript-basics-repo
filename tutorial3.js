// simple contact management system
/*
functionalities of the simple app
1. Add a contact
2. Delete a contact
3. Search a contact
4. view the contacts 
5. exit the application
*/
const prompt = require ("prompt-sync")()

function printInfo(){
    const contacts = []
    let keepGoing = true;
    while (keepGoing) {  

    console.log('--------------')// here we define how the app works
    console.log("1. Add a contact")
    console.log("2. Delete a contact")
    console.log("3. view the contacts")
    console.log("4. Search for a contact")
    console.log("5. Exit the application")

    const operation = prompt('Enter an option from the above: ')

    function addContact() {
        const name = prompt("Name: ") // prompting the user to enter the name and email
        const email = prompt("Email: ")
        const contact = { // create an object so that we can store the name and email
            name: name,
            email: email
        }
        contacts.push(contact) // add the contacts at the top of the array
        console.log(`Contacts ${name} added successfuly`)
    
        
    }

    function deleteContact() { // this funtion helps us delete users
        for(let i = 0; i < contacts.length; i++){ // using thisfor loop we are aaccess contacts from the array => const contacts = []
            const contact = contacts[i] 
            console.log((i + 1).toString() + ":", contact.name) // here we assign and index to the contacts in the array
        }
        const number = parseInt(prompt('Enter an Id: ')) // prompt the user to enter an id so we can delete
        if (isNaN(number) || number> contacts.length){ // check if the length is valid from the number of items in the array
            console.log("Invalid Input") //error message
        }
        contacts.splice(number -1, 1) // we use the splice to remove the index stated from the id
        console.log("Removed.") // feedback message that user has been deleted
        
    }
    
    function searchContacts () {
        const searchString = prompt("Search: ").toLowerCase()
        const results = [];

        for (let contact of contacts){
            if (contact.name.toLowerCase.includes(searchString)) results.push(contact)
        }
        
        listContacts(results)
    }

    function listContacts (contact) {
        for (let contact of contacts){
            console.log("---------------------")            
            console.log('Name: ',contact.name)
            console.log('Email: ',contact.email)
        }
    }

    
    //const contacts = []// helps to store our contacts


    
    
    switch(operation){
        case "1":// this case 1 where we add a contact
            addContact()
            break
        case "2": //case 2 for Deleting a contact
            deleteContact()
            break
        case "3":// case for viewing the contacts
            listContacts(contacts)
            break
        case "4":// for search contact
            searchContacts()
            break
        case "5":// for exiting the application
            keepGoing = false;
            break
        default:
        console.log("Invalid input")
        valid = false
        break
        }
    }
}
printInfo() //calling the funtion

/*
        UNDERSTANDING ARRAYS => arrays uses lifo -> Last in first out

         const arr = [1, 2, 3, 4, 5]
            arrays are called using indexes
            1 => is at index 0
            2 => is at index 1
            3 => is at index 2
            4 => is at index 3
            5 => is at index 4
 */
//     // working example
//     const arr = [1,2,3,4,5]
//     arr.push(10) // add a array at the top of the stack
//    // arr.pop() // used to remove an item at the top of the stack
//     arr.splice(0, 2)//used to remove an array based on the index
//     //arr[0] = 9 // we can set the values of an array by this function
//     //console.log(arr[1]) //possible to acccess an array using their index position
//     console.log(arr.length)// can be used to see the length of an array
//     console.log(arr)

   /*
        Understanding Objects => objects is a way we can group information together

    */
        // const contact = {
        //     name: 'vic',
        //     email: 'vic@example.com'
        // }
        // console.log(contact)

        /**
                understanding a FOR - Loop

                const arr = ['apple', 'peach', 'mango']
                for (let i = 0; i< arr.length; i++) {
                console.log(arr[i])
                }

        
                
        */
