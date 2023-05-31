## lexer
code = `let x = 45`
tokenized = `
{ value: "let", type: 5 }
{ value: "x", type: 1 }
{ value: "=", type: 2 }
{ value: "45", type: 0 }
`