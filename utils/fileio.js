const fs = require('fs');

//////////////////////////////////////////////
// FUNCTION copyFile
// copies a file into the distribution
///////////////////////////////////////////////

fs.copyFile('./src/style.css', './dist/style.css', err => {
  if (err) {
  console.log(err);
  return;
  }
  console.log('Style sheet copied successfully!');
});
  
// usage copyfile (localfile ./DirectoryPath)
// destination directory must already exist

  const copyFile = (localFile, path) => {
    return new Promise((resolve, reject) => {
      fs.copyfile(`./${localFile}`, `${path}/${localFile}`, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
        });
      });
      console.log(`${fileName} created in ./dist folder`)
    });
  };
  





//////////////////////////////////////////////
// FUNCTION writeFile
// writes fileContent string to ./dist/outputFileName
///////////////////////////////////////////////

const writeFile = (fileContent, fileName) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./dist/${fileName}`, fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
      });
    });
    console.log(`${fileName} created in ./dist folder`)
  });
};

module.exports = writeFile;
