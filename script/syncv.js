#!/usr/bin/env node

const { execSync } = require("child_process")
const { exit } = require("process")

if (!process.version.startsWith('v18')) {
    console.log('\x1b[31mNode.js version is not supported\x1b[0m')
    exit(1)
}

const tsv = execSync('tsc -v', { encoding: 'utf8' })

if (!tsv.startsWith('Version 4')) {
    console.log('\x1b[31mTypeScript version is not supported\x1b[0m')
    exit(1)
}

console.log('\x1b[32mAll version are sync with the others\x1b[0m')