const data = fetch('https://jsonplaceholder.typicode.com/users')

async function ambilNama() {
  try{
    const res = await data
    const nama = await res.json()
    // const [name] = nama
    // return console.log(nama)
    let x = ''
    let result = []
    if(nama.length){
      for(i = 0; i < nama.length; i++){
        x += nama[i].name
        result = [...result, x]
        x = ''
      }
      console.log(result)
  } else{
    throw new Error('Invalid Response')
  }
  }catch(error){
    console.log(error.message)
  }
}

ambilNama()

