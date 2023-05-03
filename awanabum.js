
        class Time {
            /**
             * Convert something to Date format.
             * @param  {...any} args Thing to convert to Date
             * @return {DateConstructor}
             */
            static ConvertToDate(...args) {
                return new Date(...args)
            }
        
            /**
             * Get current date
             * @return {DateConstructor}
             */
            static GetCurrentDate() {
                return new Date()
            }
            
            /**
             * Get current day, but day in month format (1-31)
             * @param {Boolean} utc Choose if get UTC && local
             * @return {Number}
             */
            static GetCurrentMonthDay(utc=false) {
                return utc ? new Date().getUTCDate() : new Date().getDate()
            }
        
            /**
             * Get current day, but day in week format (1-7) 
             * @param {Boolean} utc Choose if get UTC && local
             * @return {Number}
             */
            static GetCurrentWeekDay(utc=false) {
                return utc ? new Date().getUTCDay() : new Date().getDay()
            }
        
            /**
             * Get current year
             * @param {Boolean} utc  Choose if get UTC && local
             * @return {Number}
             */
            static GetCurrentYear(utc=false) {
                return utc ? new Date().getUTCFullYear() : new Date().getFullYear()
            }
        
            /**
             * Get current hour
             * @param {Boolean} utc Choose if get UTC && local 
             * @return {Number}
             */
            static GetCurrentHour(utc=false) {
                return utc ? new Date().getUTCHours() : new Date().getHours()
            }
        
            /**
             * Get current milliseconds
             * @param {Boolean} utc Choose if get UTC && local 
             * @return {Number}
             */
            static GetCurrentMilliseconds(utc=false) {
                return utc? new Date().getUTCMilliseconds(): new Date().getMilliseconds()
            }
        
            /**
             * Get current minutes
             * @param {Boolean} utc Choose if get UTC && local
             * @return {Number}
             */
            static GetCurrentMinutes(utc=false) {
                return utc? new Date().getUTCMinutes(): new Date().getMinutes()
            }
        
            /**
             * Get current month
             * @param {Boolean} utc Choose if get UTC && local
             * @return {Number}
             */
            static GetCurrentMonth(utc=false) {
                return utc? new Date().getUTCMonth(): new Date().getMonth()
            }
        
            /**
             * Get current seconds
             * @param {Boolean} utc Choose if get UTC && local
             * @return {Number}
             */
            static GetCurrentSeconds(utc=false) {
                return utc? new Date().getUTCSeconds(): new Date().getSeconds()
            }
        
            /**
             * Get current time
             * @return {Number}
             */
            static GetCurrentTime() {
                return new Date().getTime()
            }
        
            /**
             * Get difference between UTC && local
             * @return {Number}
             */
            static GetDifferenceUTCAndLocal() {
                return new Date().getTimezoneOffset()
            }

            /**
             * Start a console timer, this is a timer when it finishes it will print the name && duration
             * @param {String} label Name of the console timer
             * @return {VoidFunction}
             */
            static StartConsoleTimer(label=undefined) {
                return console.time(label)
            }

            /**
             * End a console timer, this is a timer when it finishes it will print the name && duration
             * @param {String} label Name of the console timer to finish
             * @return {VoidFunction}
             */
            static EndConsoleTimer(label=undefined) {
                return console.timeEnd(label)
            }
        }
        
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
             * EndGroup static method, you } the started group.
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
        } 
Console.Print("awanabumabnksldgañldsflsa")