#! /usr/bin/env node

import * as fs from 'fs';
import Console from './systems/classes/Console.js';
import Time from './systems/classes/Time.js';

export default class Parser {
    constructor(code, fileName) {
        this.code = code
        this.fileName = fileName.replace('.rang', '.js')

        code = this.addEntryPoint(code);
        code = this.parseCatchKeyword(code);
        code = this.parseTypeOfOperator(code);

        code = this.addConsoleClass(code);
        code = this.addTimeClass(code);

        code = this.parseOpenBrace(code);
        code = this.parseCloseBrace(code);

        code = this.parseEqualToOperator(code);
        code = this.parseNotEqualToOperator(code);
        code = this.parseGreaterThanOperator(code);
        code = this.parseLessThanOperator(code);
        code = this.parseGreaterEqualThanOperator(code);
        code = this.parseLessEqualThanOperator(code);
        code = this.parseAndConditionalOperator(code);
        code = this.parseNotConditionalOperator(code);
        code = this.parseOrConditionalOperator(code);
        
        this.code = code

        fs.writeFile(this.fileName, code, (err) => {
            if (err) throw err;
        });
    }

    addEntryPoint(code) {
        // code += `
        // let main = new Main();
        // main.Main();
        // `;
        // return code

        const lines = code.split('\n');

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i]

            if (line.includes('class Main ') && !this.checkString('class Main ', line)) {
                code += `
                let main = new Main();
                main.Main();
                `;

                return code;
            }
        }

        return code;
    }

    parseEqualToOperator(code) {
        const lines = code.split('\n')
      
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          const words = line.split(' ')
      
          for (let wordNo = 0; wordNo < words.length; wordNo++) { // cambio en esta linea
            let word = words[wordNo];
      
            if (word == 'equal' && !this.checkString('equal', line)) {
              if (words[wordNo - 1] != 'not') {
                code = code.replace(/\bequal to\b/g, "=="); // uso de regex para reemplazar solo la palabra exacta
              }
            }
          }
        }
      
        return code;
      }

    parseNotEqualToOperator(code) {
        const lines = code.split('\n')

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const words = line.split(' ')   

            // if (line.includes('not equal to') && !this.checkString('not equal to', line)) {
            //     code = code.replace(line, line.replace('not equal to', "!="))
            // }

            for (let wordNo = 0; wordNo < words.length; wordNo++) {
                let word = words[wordNo];

                if (word == 'not' && !this.checkString('not', line)) {
                    if (words[wordNo + 1] == 'equal') {
                        if (words [wordNo + 2] == 'to') {
                            code = code.replace(line, line.replace(/\bnot equal to\b/g, "!="))
                        }
                    }
                }
            }
        }

        return code;
    }

    parseGreaterThanOperator(code) {
        const lines = code.split('\n')

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const words = line.split(' ')   

            for (let wordNo = 0; wordNo < words.length; wordNo++) {
                let word = words[wordNo];

                if (word == 'greater' && !this.checkString('greater', line)) {
                    if (words[wordNo + 1] == 'than') {
                        code = code.replace(line, line.replace(/\bgreater than\b/g, ">"))
                    }
                }
            }
        }

        return code;
    }

    parseGreaterEqualThanOperator(code) {
        const lines = code.split('\n')

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const words = line.split(' ')   

            for (let wordNo = 0; wordNo < words.length; wordNo++) {
                let word = words[wordNo];

                if (word == 'greater' && !this.checkString('greater', line)) {
                    if (words[wordNo + 1] == 'equal') {
                        if (words[wordNo + 1] == 'than') {
                            code = code.replace(line, line.replace(/\bgreater equal than\b/g, '>='))
                        }
                    }
                }
            }
        }

        return code;
    }

    parseLessEqualThanOperator(code) {
        const lines = code.split('\n')

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const words = line.split(' ')   

            for (let wordNo = 0; wordNo < words.length; wordNo++) {
                let word = words[wordNo];

                if (word == 'less' && !this.checkString('less', line)) {
                    if (words[wordNo + 1] == 'equal') {
                        if (words[wordNo + 1] == 'than') {
                            code = code.replace(line, line.replace(/\bless equal than\b/g, '<='))
                        }
                    }
                }
            }
        }

        return code;
    }

    parseLessThanOperator(code) {
        const lines = code.split('\n')

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const words = line.split(' ')   

            for (let wordNo = 0; wordNo < words.length; wordNo++) {
                let word = words[wordNo];

                if (word == 'less' && !this.checkString('less', line)) {
                    if (words[wordNo + 1] == 'than') {
                        code = code.replace(line, line.replace(/\bless than\b/g, "<"))
                    }
                }
            }
        }

        return code;
    }

    parseAndConditionalOperator(code) {
        const lines = code.split('\n')

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('and') && !this.checkString('and', line)) {
                code = code.replace(line, line.replace(/\band\b/g, "&&"))
            }
        }

        return code;
    }

    parseOrConditionalOperator(code) {
        const lines = code.split('\n')

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('or') && !this.checkString('or', line) && line.includes('if')) {
                code = code.replace(line, line.replace(/\bor\b/g, "&&"))
            }
        }

        return code;
    }

    parseNotConditionalOperator(code) {
        const lines = code.split('\n')

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('not') && !this.checkString('not', line)) {
                code = code.replace(line, line.replace(/\bnot\b/g, "!"))
            }
        }

        return code;
    }

    parseCatchKeyword(code) {
        const lines = code.split('\n')

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('except') && !this.checkString('except', line)) {
                code = code.replace(line, line.replace(/\bexcept\b/g, "catch"))
            }
        }
        
        return code;
    }

    parseOpenBrace(code) {
        const lines = code.split('\n')

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];

          if (line.includes('then') && !this.checkString('then', line)) {
            code = code.replace(line, line.replace('then', "{"))
          }
        }
        
        return code;
    }

    parseTypeOfOperator(code) {
        const lines = code.split('\n')

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const words = line.split(' ')   

            for (let wordNo = 0; wordNo < words.length; wordNo++) {
                let word = words[wordNo];

                if (word == 'type' && !this.checkString('type', line)) {
                    if (words[wordNo + 1] == 'of') {
                        code = code.replace(line, line.replace(/\btype of\b/g, "typeof"))
                    }
                }
            }
        }

        return code;
    }

    parseCloseBrace(code) {
        const lines = code.split('\n')

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];

          if (line.includes('end') && !this.checkString('end', line)) {
            code = code.replace(line, line.replace(/\bend\b/g, "}"))
          }
        }
        
        return code;
    }

    addConsoleClass(code) {
        let consoleString = Console.getString();
        code = consoleString + code;
        return code
    }

    addTimeClass(code) {
        let timeString = Time.getString();
        code = timeString + code;
        return code
    }

    parseEverything(code) {

    }

    checkString(phrase, line, returnIfMultiple=false) {
        if (!line.includes(phrase)) {
            return false;
        }
        if (line.split(phrase).length - 1 > 1) {
            return returnIfMultiple;
        }
        const leftSide = line.split(phrase)[0];
        if (leftSide.split("\"").length - 1 > 0) {
            if (leftSide.split("\"").length - 1 % 2 === 0) {
                return false;
            } else {
                return true;
            }
        }
        if (leftSide.split("\'").length - 1 > 0) {
            if (leftSide.split("\'").length - 1 % 2 === 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}