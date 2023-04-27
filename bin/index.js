#! /usr/bin/env node

import Parser from './parser.js';
import * as fs from 'fs';
import { spawn, exec } from 'child_process';

class Interpreter {
    static Interpret(code) {
        // migrated to 'spawn' for support huge data output 

        // exec('node output.js', (error, stdout, stderr) => {
        //     if (error) throw error;
        //     console.log(stdout);
        //     console.log(stderr)
        // })


        const process = spawn('node', ['output.js']);

        process.stdout.on('data', (data) => {
            console.log(data.toString())
        })

        process.stderr.on('data', (data) => {
            console.log(data.toString())
        })

        process.on('close', (code) => {
            console.log('Script was exited with code ' + code)
        })
    }
}

function getCode(filePath) {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf-8');
    } else {
        throw new Error("Input file not found");
    }
}

function handleArgs() {
    if (!process.argv.slice(0)[2]) throw new Error("You need to add a command, try --help")

    if (process.argv.slice(0)[2] == '--help' || process.argv.slice(0)[2] == '-h') {
        console.log(`
        Command    |||| Args   |||| Explanation
        ---------------------------------------

        --help         None         Shows this msg
        --run          file dir     Run your .rang code and create output.js file
        --transpile    file dir     Create output.js file
        `)
    }

    if (process.argv.slice(0)[2] == '--run' || process.argv.slice(0)[2] == '-r') {
        if (!process.argv.slice(0)[3]) throw new Error("You need to add a file")
        let parser = new Parser(getCode(process.argv.slice(0)[3]));
        Interpreter.Interpret(parser.code);
    }

    if (process.argv.slice(0)[2] == '--transpile' || process.argv.slice(0)[2] == '-t') {
        if (!process.argv.slice(0)[3]) throw new Error("You need to add a file")
        let parser = new Parser(getCode(process.argv.slice(0)[3]));
        console.log('Saved in output.js');
    }
}

handleArgs();