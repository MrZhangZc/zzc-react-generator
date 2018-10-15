'use strict';
const fs = require('fs');
const path = require('path');
module.exports = {
    items: [
        {
            name: 'src',
            type: 'dir', 
            items: [
                {
                    name: 'componens',
                    type: 'dir'
                },
                {
                    name: 'pages',
                    type: 'dir'
                },
                {
                    name: 'public',
                    type: 'dir'
                },
                {
                    name: 'index.js',
                    type: 'file',
                    content: fs.readFileSync(path.join(__dirname, 'indextpl.js'))
                },
                {
                    name: 'root.js',
                    type: 'file',
                    content: fs.readFileSync(path.join(__dirname, 'root.js'))
                },
                {
                    name: 'root.sass',
                    type: 'file',
                    content: fs.readFileSync(path.join(__dirname, 'root.sass'))
                }
            ]
        },
        {
            name: 'dist',
            type: 'dir'
        },
        {
            name: 'index.tpl.html',
            type: 'file',
            content: fs.readFileSync(path.join(__dirname, 'index.tpl.html'))
        },
        {
            name: '.gitignore',
            type: 'file',
            content: fs.readFileSync(path.join(__dirname, '.gitignore'))
        },
        {
            name: 'package.json',
            type: 'file',
            content: fs.readFileSync(path.join(__dirname, 'package.json'))
        },
        {
            name: 'server.js',
            type: 'file',
            content: fs.readFileSync(path.join(__dirname, 'server.js'))
        },
        {
            name: 'webpack.config.js',
            type: 'file',
            content: fs.readFileSync(path.join(__dirname, 'webpack.config.js'))
        }
    ]
};