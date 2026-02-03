let userName = getFirstName('Vinicius-Almeida-Juanito');
console.log(`Welcome, ${userName}`)

function getFirstName(name){
    let firstName = name.split('-')[0]
    return firstName
}