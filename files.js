const fs = require('fs');

// reading files(takes relative path of the file and fires a call back)
fs.readFile('./docs/blogs.txt', (err, data) => {
  if (err) {
    console.log('>>>err<<<', err);
  }
  console.log('>>>data<<<', data.toString());
});

//writing files(realtive path,text that we want to write,call back function)
// will replace the entire text in the file with assigned text
fs.writeFile('./docs/blogs.txt', 'replaced the text', () => {
  console.log('>>>file was written<<<');
});

fs.writeFile('./docs/blog1.txt', 'replaced new the text', () => {
  console.log('>>>file was written<<<');
});

//diresctories(mkdir->create directory, rmdir-> remove directory )
if (!fs.existsSync('./assests')) {
  fs.mkdir('./assests', (err) => {
    if (err) {
      console.log('>>>err<<<', err);
    }
    console.log('>>>folder created<<<');
  });
} else {
  fs.rmdir('./assessts', (err) => {
    if (err) {
      console.log('>>>err<<<', err);
    }
    console.log('>>>folder deleted<<<');
  });
}

//deleting files
//unlink to delete a file
//existSync-> check a file or folder exists or not
if (fs.existsSync('./docs/blog1.txt')) {
  fs.unlink('./docs/blog1.txt', (err) => {
    if (err) {
      console.log('>>>err<<<', err);
    }
    console.log('>>>file delted<<<');
  });
}
