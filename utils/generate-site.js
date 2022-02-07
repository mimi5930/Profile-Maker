const fs = require('fs');
const { resolve } = require('path');

const createHTML = content => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', content, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'HTML created!'
            });
        });
    });
};

// copy style sheet
const copyCSS = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
    
            resolve({
                ok: true,
                message: 'CSS created!'
            });
        });
    });
};

module.exports = { createHTML, copyCSS };