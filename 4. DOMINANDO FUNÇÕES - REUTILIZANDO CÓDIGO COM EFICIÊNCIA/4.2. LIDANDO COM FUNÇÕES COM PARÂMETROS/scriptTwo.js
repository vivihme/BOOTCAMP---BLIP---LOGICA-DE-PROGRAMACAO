createStringConnection('db_products', 'Vinicius', '9876')

function createStringConnection(dataBaseName, user, pass){
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database =${dataBaseName}`)
}