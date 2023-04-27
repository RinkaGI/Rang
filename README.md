# RANG
<a href="https://github.com/RinkaGI/Rang" onClick = "return false"><img alt = "Repo size" src = "https://img.shields.io/github/repo-size/RinkaGI/Rang"></a>
<a href="https://github.com/RinkaGI/Rang/pulls"><img alt = "Pull Requests" src = "https://img.shields.io/github/issues-pr/RinkaGI/Rang"></a>
<a href="https://github.com/RinkaGI/Rang/graphs/contributors"><img alt = "Contributors" src = "https://img.shields.io/github/contributors/RinkaGI/Rang"></a>
<a href="https://github.com/RinkaGI/Rangstargazers"><img alt = "Stars" src = "https://img.shields.io/github/stars/RinkaGI/Rang"></a>
<a href="https://github.com/RinkaGI/Rang/blob/main/LICENSE"><img alt = "License" src = "https://img.shields.io/github/license/RinkaGI/Rang"></a>

<img src="./rang/assets/logo.png" alt="Rang logo" align="right" width="128" height="128"/>

**RANG** is a JavaScript transpiled programming language, the goal of this project is convert JavaScript to a more friendly-language.

The file extension of Rang codes is `.rang`.
If there is a thing that you don't like with Rang, you can just use that like JavaScript (ex: "i dont like then/end system", so use normal javascript braces lol)

Docs: https://rinkagi.github.io/Rang/

## TO-DO:
- [X] More source organization (separate systems)
- [x] Add a time system
- [X] Add support to non-main class.
- [X] Code explanation in README.md
- [X] Documentation
- [X] Logo
- [ ] NPM Package
- [ ] Web: Rang Playground
- [ ] FIRST OFFICIAL RELEASE 🎉🎉🎉

`Do you have a suggest? Add it to issues`

## EXAMPLES:

### [Hello world!](https://www.helloworld.org)
```
class Main then
    Main() then
        Console.Print("Hello world");
    end
end
```

### [For VS While](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_console_time3)
```
// Example program: Which is faster, for or while.

class Main then
    Main() then
        Time.StartConsoleTimer("for")

        for (let i = 0; i > 10; i++) then

        end

        Time.EndConsoleTimer("for")


        Time.StartConsoleTimer("while")

        let i = 0

        while (i > 10) then
            i++
        end

        Time.EndConsoleTimer("while")
    end
end
```

### [No Main Entry Point](https://github.com/RinkaGI/Rang/blob/main/example/NoEntryPoint.rang)
```
Console.Print("This is a program written in Rang without use the Main class")
```

## Rang code explanation
- rang/index.js:
  - *Interpreter class* It uses the child_process func: `spawn` for execute JavaScript files.
  - *getCode function*  It uses `fs` for read the `.rang` script, if it the script is not found, throw an error.
  - *handleArgs function* It reads the args received from terminal call. It verify what func is calling (run, transpile or help) and returns something. If its run, it will parse it and execute it (with Interpreter class)
  
- rang/parser.js
  - *Parser class* It has the methods: constructor, parseEverything, checkString and parsing methods. The parsing methods follows 2 types of ways to parse it. The `first type` is making a for that go with every line checking if a word is in the script, if it is, replace it to JavaScript. `Second type` is to include systems (rang/systems/). Just call the systems and get the code.
  - *parseEverything method* it calls every parse method.
  - *addEntryPoint method* Is a combination of 2 ways mentioned. If it detects "class Main " in a line. It will add the Entry Point support.
  - *parseCatchKeyword method* It uses the first type mentioned. It changes catch -> except.
  - *parseOpenBrace and parseCloseBrace methods* First type mentioned.
  - *addConsoleClass and addTimeClass methods* Second type mentioned.

- rang/systems/classes/Console.js
  - *Almost every static method* It calls a `console` function depending on what method. In some methods it uses `...args`, if there is a function that needs an unkown arg, i use ...args.
  - *getString method* It returns the code of the system.

- rang/systems/classes/Time.js
    - *Almost every static method* It calls a `Date` function or `console` depending on what method. In some methods it uses `...args`, if there is a function that needs an unkown arg, i use ...args.
    - *getString method* It returns the code of the system.


## Differences from JS
| Rang                                                 | JavaScript                           | Why?                                                                      |
|------------------------------------------------------|--------------------------------------|---------------------------------------------------------------------------|
| Main entry point (Main class with Main method class and not compulsory) | No main entry point                  | More organized code                                                       |
| then / end                                           | { }                                  | More readable code for new programmers                                    |
| `Console` class                                      | `console` class                      | `Console` class is `console` class adapted for NodeJS and new programmers |
| `except` keyword                                     | `catch` keyword                      | More understable for new programmers                                      |
| `Time` class                                         | `Date` class and `console` functions | We can use most used JavaScript time tools in just one class.             |