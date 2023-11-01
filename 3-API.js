const data = fetch('https://jsonplaceholder.typicode.com/users')

async function ambilNama() {
  try{
    const res = await data
    const nama = await res.json()
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

//--------------------------------------------------------------------------------------------------------------------------------//

const ifError = (param) => {
  if(param.message === 'Invalid response'){
    console.log('request is invalid')
  } else {
    console.group(param.message)
  }
}

const getData = (url, cb) => {
  fetch(url).then(res => {
      res.json().then(
        res2 => {
          if(res2.length){
            cb(res2)
          }else{
            throw new Error('Invalid response')
          }
        }
      ).catch(ifError)
  }).catch(ifError)
}

function getName(param) {
    let x = ''
    let result = []
  for(i = 0; i < param.length; i++){
    x += param[i].name
    result = [...result, x]
    x = ''
  }
  console.log(result)
}

getData('https://jsonplaceholder.typicode.com/users', getName)

