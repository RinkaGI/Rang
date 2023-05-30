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

function token(value="", type:TokenType): Token {
    return {
        value, type
    };
}

export function tokenize(sourceCode: string): Token[] {
    const tokens = new Array<Token>();
    const src = sourceCode.split("");

    while (src.length > 0) {
        if (src[0] == '(') {
            tokens.push(token[src.shift(), TokenType.OpenParen]);
        } else if (src[0] == ')') {
            tokens.push(token[src.shift(), TokenType.CloseParen]);
        }
    }

    return tokens;
}