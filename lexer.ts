/* 
goal: let x = 45 + (foo + bar) / [LetToken, IdentifierToken, EqualToken, NumberToken]
*/


export enum TokenType {
    Number,
    Identifier,
    Equals,
    OpenParen, CloseParen,
    Let,
    BinaryOperator,
}

export interface Token {
    value: string,
    type: TokenType
}

const KeyWords: Record<string, TokenType> = {
    "let": TokenType.Let
}

function token(value="", type:TokenType): Token {
    return {
        value, type
    };
}

function isAlphabetic(src: string) {
    return src.toUpperCase() != src.toLowerCase();
}

function isInteger(src: string) {
    let number = src.charCodeAt(0);
    let bounds = ['0'.charCodeAt(0), '9'.charCodeAt(0)];
    return (number >= bounds[0] && number <= bounds[1]);
}

function isSkippeable(src: string) {
    return src == ' ' || src == '\n' || src == '\t'
}

export function tokenize(sourceCode: string): Token[] {
    const tokens = new Array<Token>();
    const src = sourceCode.split("");

    while (src.length > 0) {
        if (src[0] == '(') {
            tokens.push(token(src.shift(), TokenType.OpenParen));
        } else if (src[0] == ')') {
            tokens.push(token(src.shift(), TokenType.CloseParen));
        } else if (src[0] == "+" || src[0] == "-" || src[0] == "*" || src[0] == "/") {
            tokens.push(token(src.shift(), TokenType.BinaryOperator));
        } else if (src[0] == "=") {
            tokens.push(token(src.shift(), TokenType.Equals));
        } else {
            ///////////// HANDLE MULTICHARACTER TOKENS ///////////7

            // build number token
            if (isInteger(src[0])) {
                let num = "";

                while (src.length > 0 && isInteger(src[0])) {
                    num += src.shift();
                }

                tokens.push(token(num, TokenType.Number));
            } else if (isAlphabetic(src[0])) {
                let identifier = "";

                while (src.length > 0 && isAlphabetic(src[0])) {
                    identifier += src.shift();  
                }

                let reserved = KeyWords[identifier];

                if (reserved == undefined) {
                    tokens.push(token(identifier, TokenType.Identifier));
                } else {
                    tokens.push(token(identifier, reserved))
                }
            } else if (isSkippeable(src[0])) {
                src.shift()
            } else {
                console.log(`ILLEGAL CHAR ERROR: `, src[0])
                Deno.exit(1)
            }
        }
    }

    return tokens;
}


const source = await Deno.readTextFile("./code.text");
console.log(source)

for (const token of tokenize(source)) {
    console.log(token)
}