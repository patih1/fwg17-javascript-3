const data = fetch('https://jsonplaceholder.typicode.com/users')

async function ambilNama() {
  try{
    const res = await data
    const nama = await res.json()
    // const [name] = nama
    // return console.log(nama)
    let result = ''
    for(i = 0; i < nama.length; i++){
      result += nama[i].name
    }
    console.log(result)

  }catch(error){
    throw error
  }
}

ambilNama()