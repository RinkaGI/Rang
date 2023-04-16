import * as fs from 'fs';

export default class Parser {
    constructor(code) {
        this.code = code
        this.code = this.parseEverything(code);
    }

    addEntryPoint(code) {
        code += `
        let main = new Main();
        main.Main();
        `;
        return code
    }

    parseCatchKeyword(code) {
        const lines = code.split('\n')

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.includes('except') && !this.checkString('except', line)) {
                code = code.replace(line, line.replace("except", "catch"))
            }
        }
        
        return code;
    }

    parseOpenBrace(code) {
        const lines = code.split('\n')

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];

          if (line.includes('then') && !this.checkString('then', line)) {
            code = code.replace(line, line.replace("then", "{"))
          }
        }
        
        return code;
    }

    parseCloseBrace(code) {
        const lines = code.split('\n')

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];

          if (line.includes('end') && !this.checkString('end', line)) {
            code = code.replace(line, line.replace("end", "}"))
          }
        }
        
        return code;
    }

    addConsoleClass(code) {
        let consoleClass = `
        class Console { 
            static Print(...args) { 
                return console.log(...args);
            } 
            
            static Clear() {
                return console.clear()
            } 
            
            static Debug(...args) {
                return console.debug(...args)
            }

            static ViewObject(object){
                console.dir(object)
            } 
            
            static Error(...args){
                console.error(...args)
            } 

            static Group(label){
                console.group(label)
            } 
            
            static EndGroup(){
                console.groupEnd()
            } 
            
            static Info(...args){
                console.info(...args)
            } 
            
            static Table(...args){
                console.table(...args)
            } 
            
            static Warn(...args){
                console.warn(...args)
            }
        } \n`
        code = consoleClass + code;
        return code
    }

    parseEverything(code) {
        code = this.addEntryPoint(code);
        code = this.parseCatchKeyword(code);

        code = this.addConsoleClass(code);

        code = this.parseOpenBrace(code);
        code = this.parseCloseBrace(code);

        fs.writeFile("output.js", code, (err) => {
            if (err) throw err;
        });

        return code;
    }

    checkString(phrase, line, returnIfMultiple=false) {
        if (!line.includes(phrase)) {
            return false;
        }

        if (line.split(phrase).length - 1 > 1) {
            return returnIfMultiple;
        }

        const leftSide = line.split(phrase)[0];

        if (leftSide.split('"').length - 1 > 0) {
            if (leftSide.split('"').length % 2 === 0) {
                return false;
            } else {
                return true;
            }
        }

        if (leftSide.split("'").length - 1 > 0) {
            if (leftSide.split("'").length % 2 === 0) {
                return false;

            } else {
                return true;
            }
        }
    }
}