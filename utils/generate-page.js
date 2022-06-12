const fs = require('fs')


const writeFile = fileContent =>{
    return new Promise((resolve, reject)=>{
    fs.writeFile('/dist/index.html', fileContent, err => {
        if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
          }
          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
        ok: true,
        message: 'File created!'
      });
    })
})
}

const copyFile = fileContent =>{
    return new Promise((resolve, reject)=>{
        console.log('Page created! Check out index.html in this directory to see it!');
            fs.copyFile('../src/style.css', '../dist/style.css', err => {
              if (err) {
                console.log(err);
                return;
              }
              console.log('Style sheet copied successfully!');
           
            });
        });
}

module.exports = { writeFile, copyFile };