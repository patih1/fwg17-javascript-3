const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
      let cek = dataDay.find((item) => {
        return item === day
      })
      if(cek){
      resolve(cek)
      }else {
        reject(new Error('Hari ini bukan hari kerja'))
      }
    }, 3000)
  })
}

cekHariKerja('senin').then((value)=>console.log(value)).catch((eror)=>console.log(eror.message))

async function hari(str){
  try{
    x = await cekHariKerja(str)
    console.log(str)
  }catch (eror) {
    console.log(eror.message)
  }

}

hari('senin')
