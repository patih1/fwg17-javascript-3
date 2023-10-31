const getMonth = (callback) => {
  setTimeout (() => {
    let error = false
    let month = ['Januari', 'Februari', 'Maret', 'April',
                  'Mei', 'Juni', 'Juli','Agustus', 'September',
                  'Oktober', 'November', 'Desember']
    if (!error) {
      callback(null, month)
    } else {
      callback(new Error('Sorry Data Not Found'), [])
    }
  }, 4000)
}

async function show (){
  try{
    console.log(value)
  }catch (eror) {
    console.log(eror.message)
  }
}

function printOut(a, b){
  console.log(a, b)
}

getMonth(printOut)