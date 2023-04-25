# RANG
<a href="https://github.com/RinkaGI/Rang" onClick = "return false"><img alt = "Repo size" src = "https://img.shields.io/github/repo-size/RinkaGI/Rang"></a>
<a href="https://github.com/RinkaGI/Rang/pulls"><img alt = "Pull Requests" src = "https://img.shields.io/github/issues-pr/RinkaGI/Rang"></a>
<a href="https://github.com/RinkaGI/Rang/graphs/contributors"><img alt = "Contributors" src = "https://img.shields.io/github/contributors/RinkaGI/Rang"></a>
<a href="https://github.com/RinkaGI/Rangstargazers"><img alt = "Stars" src = "https://img.shields.io/github/stars/RinkaGI/Rang"></a>
<a href="https://github.com/RinkaGI/Rang/blob/main/LICENSE"><img alt = "License" src = "https://img.shields.io/github/license/RinkaGI/Rang"></a>

**RANG** is a JavaScript transpiled programming language, the goal of this project is convert JavaScript to a more friendly-language.

The file extension of Rang codes is `.rang`.
If there is a thing that you don't like with Rang, you can just use that like JavaScript (ex: "i dont like then/end system", so use normal javascript braces lol)

## TO-DO:
    - [X] More source organization (separate systems (Console system, future Time system) on different files)
    - [X] Add a time system
    - [X] Add support to non-main class.
    - [ ] Code explanation in README.md (working on it)
    - [ ] Documentation
    - [ ] Logo
    - [ ] NPM Package 
    - [ ] Web: rang playground 

    - [ ] **FIRST RELEASE**

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

## Differences from JS
| Rang                                                 | JavaScript                           | Why?                                                                      |
|------------------------------------------------------|--------------------------------------|---------------------------------------------------------------------------|
| Main entry point (Main class with Main method class and not compulsory) | No main entry point                  | More organized code                                                       |
| then / end                                           | { }                                  | More readable code for new programmers                                    |
| `Console` class                                      | `console` class                      | `Console` class is `console` class adapted for NodeJS and new programmers |
| `except` keyword                                     | `catch` keyword                      | More understable for new programmers                                      |
| `Time` class                                         | `Date` class and `console` functions | We can use most used JavaScript time tools in just one class.             |