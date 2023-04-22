export default class Console {
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

    static getString() {
        return `
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
    }
}