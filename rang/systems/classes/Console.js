/**
 * Console class for control the console of the project.
 */
class Console {
    /**
     * Print static method, this shows something on the console
     * @param  {...any} args you can write anything
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
    
    /**
     * Debug static method, you can just debug things.
     * @param  {...any} args Thing to debug
     * @returns {Function}
     */
    static Debug(...args) {
        return console.debug(...args)
    }

    /** 
     * ViewObject static method, you can show objects.
     * @param {Object} object Object to show
    */
    static ViewObject(object){
        console.dir(object)
    } 
    
    /**
     * Error static method, you can show error.
     * @param  {...any} args Error to show
     */
    static Error(...args){
        console.error(...args)
    } 

    /**
     * Group static method, you start the group, for finish the group run EndGroup()
     * @param {String} label Name of group
     */
    static Group(label){
        console.group(label)
    } 
    
    /**
     * EndGroup static method, you end the started group.
     */
    static EndGroup(){
        console.groupEnd()
    } 
    
    /**
     * Info static method, you show something
     * @param  {...any} args Info to show
     */
    static Info(...args){
        console.info(...args)
    } 
    
    /**
     * Table static method, you show a table
     * @param  {...any} args Table to show
     */
    static Table(...args){
        console.table(...args)
    } 
    
    /**
     * Warn static method, you show a warn
     * @param  {...any} args Warn to show
     */
    static Warn(...args){
        console.warn(...args)
    }

    /**
     * getString static method, you get the source code of Console class.
     * @returns {String}
     */
    static getString() {
        return `
        class Console {
            /**
             * Print static method, this shows something on the console
             * @param  {...any} args you can write anything
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
            
            /**
             * Debug static method, you can just debug things.
             * @param  {...any} args Thing to debug
             * @returns {Function}
             */
            static Debug(...args) {
                return console.debug(...args)
            }

            /** 
             * ViewObject static method, you can show objects.
             * @param {Object} object Object to show
            */
            static ViewObject(object){
                console.dir(object)
            } 
            
            /**
             * Error static method, you can show error.
             * @param  {...any} args Error to show
             */
            static Error(...args){
                console.error(...args)
            } 

            /**
             * Group static method, you start the group, for finish the group run EndGroup()
             * @param {String} label Name of group
             */
            static Group(label){
                console.group(label)
            } 
            
            /**
             * EndGroup static method, you end the started group.
             */
            static EndGroup(){
                console.groupEnd()
            } 
            
            /**
             * Info static method, you show something
             * @param  {...any} args Info to show
             */
            static Info(...args){
                console.info(...args)
            } 
            
            /**
             * Table static method, you show a table
             * @param  {...any} args Table to show
             */
            static Table(...args){
                console.table(...args)
            } 
            
            /**
             * Warn static method, you show a warn
             * @param  {...any} args Warn to show
             */
            static Warn(...args){
                console.warn(...args)
            }
        } \n`
    }
}

export default Console;