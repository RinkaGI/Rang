/**
 * Console class for control the console of the project.
 */
class Console {
    /**
     * Print static method, this shows something on the console
     * @param  {...any} args you can put anything
     * @return {Function}
     */
    static Print(...args) { 
        return console.log(...args);
    } 
    
    /**
     * Clear static method, this clears the console.
     * @return {Function}
     */
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

export default Console;