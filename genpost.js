// Invocation
// node genpost.js takes three args: {path-without-slash} {subject} {exceprt or nothing} 

const fs = require('fs');
const path = require('path');
let date = new Date()
let d = date.toISOString()
let today = d.substring(0, d.indexOf('T'))

function createDirectory(directoryPath) {
  const directory = path.normalize(directoryPath);

  return new Promise((resolve, reject) => {
    fs.stat(directory, (error) => {
      if (error) {
        if (error.code === 'ENOENT') {
          fs.mkdir(directory, (error) => {
            if (error) {
              reject(error);
            } else {
              resolve(directory);
            }
          });
        } else {
          reject(error);
        }
      } else {
        resolve(directory);
      }
    });
  });
}

const directoryPath = `./src/pages/${today}-${process.argv[2]}`;

createDirectory(directoryPath).then((path) => {
  console.log(`Successfully created directory: '${path}'`);
  fs.writeFile(`${directoryPath}/index.md`,
`
---
path: '/${process.argv[2]}'
date: ${today}
title: '${process.argv[2].replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ')}'
subject: '${process.argv[3]}'
tags: ['blog']
excerpt: ${process.argv[4] || 'The latest blog post is here!'}
author: 'alchematrix0'
class: 'blog'
---

### Friends, family, lend me your ears...`, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
}).catch((error) => {
  console.log(`Problem creating directory: ${error.message}`)
});
