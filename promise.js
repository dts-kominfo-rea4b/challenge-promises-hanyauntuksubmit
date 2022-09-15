const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi === null) {
      reject("Gatau")
    }
    let marah = 0
    let gmarah = 0
    
    promiseTheaterIXX().then((data) => {
		for (let i = 0; i < data.length; i++) {
	  
      if (data[i].hasil === 'marah') {
        marah += 1
      } else {
        gmarah += 1
      }
	  promiseTheaterVGC().then((data) => {
		for (let i = 0; i < data.length; i++) {

      if (data[i].hasil === 'marah') {
        marah += 1
      } else {
        gmarah += 1
      }
	  if (emosi === 'marah') {
      resolve(marah + 1)
	} else {
      resolve(gmarah + 1)
	}
    }
	})
    }
	
	})
    
    
  });
};

module.exports = {
  promiseOutput,
};
