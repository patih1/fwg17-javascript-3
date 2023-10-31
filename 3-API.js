const data = fetch('https://jsonplaceholder.typicode.com/users')

async function ambilNama() {
  try{
    const res = await data
    const nama = await res.json()
    const {name} = nama
    return console.log(name)
  }catch(error){
    throw error
  }
}

ambilNama()