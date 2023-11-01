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

cekHariKerja('senin').then((value)=>console.log(`${value} adalah hari kerja`)).catch((eror)=>console.log(eror.message))
cekHariKerja('sabtu').then((value)=>console.log(`${value} adalah hari kerja`)).catch((eror)=>console.log(eror.message))
// then adalah method dari promise. then memiliki parameter yang akan mereturn value resolve dalam promise
// catch juga merupakan method dari promise. catch berisi parameter yang akan mereturn value reject dalam promise


async function hari(str){
  try{
    x = await cekHariKerja(str)
    console.log(`${x} adalah hari kerja`)
  }catch (eror) {
    console.log(eror.message)
  }
}

//try...catch terdiri dari block try & catch (& finaly jika dibutuhkan).
//data akan dijalankan try terlebih dahulu, jika terdapat pengecualian, maka block catch akan dijalankan

hari('senin')
hari('minggu')


