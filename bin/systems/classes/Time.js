#! /usr/bin/env node
/**
 * Time class, you can code time-related things
 */
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
     * @param {Boolean} utc Choose if get UTC or local
     * @return {Number}
     */
    static GetCurrentMonthDay(utc=false) {
        return utc ? new Date().getUTCDate() : new Date().getDate()
    }

    /**
     * Get current day, but day in week format (1-7) 
     * @param {Boolean} utc Choose if get UTC or local
     * @return {Number}
     */
    static GetCurrentWeekDay(utc=false) {
        return utc ? new Date().getUTCDay() : new Date().getDay()
    }

    /**
     * Get current year
     * @param {Boolean} utc  Choose if get UTC or local
     * @return {Number}
     */
    static GetCurrentYear(utc=false) {
        return utc ? new Date().getUTCFullYear() : new Date().getFullYear()
    }

    /**
     * Get current hour
     * @param {Boolean} utc Choose if get UTC or local 
     * @return {Number}
     */
    static GetCurrentHour(utc=false) {
        return utc ? new Date().getUTCHours() : new Date().getHours()
    }

    /**
     * Get current milliseconds
     * @param {Boolean} utc Choose if get UTC or local 
     * @return {Number}
     */
    static GetCurrentMilliseconds(utc=false) {
        return utc? new Date().getUTCMilliseconds(): new Date().getMilliseconds()
    }

    /**
     * Get current minutes
     * @param {Boolean} utc Choose if get UTC or local
     * @return {Number}
     */
    static GetCurrentMinutes(utc=false) {
        return utc? new Date().getUTCMinutes(): new Date().getMinutes()
    }

    /**
     * Get current month
     * @param {Boolean} utc Choose if get UTC or local
     * @return {Number}
     */
    static GetCurrentMonth(utc=false) {
        return utc? new Date().getUTCMonth(): new Date().getMonth()
    }

    /**
     * Get current seconds
     * @param {Boolean} utc Choose if get UTC or local
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
     * Get difference between UTC and local
     * @return {Number}
     */
    static GetDifferenceUTCAndLocal() {
        return new Date().getTimezoneOffset()
    }

    /**
     * Start a console timer, this is a timer when it finishes it will print the name and duration
     * @param {String} label Name of the console timer
     * @return {VoidFunction}
     */
    static StartConsoleTimer(label=undefined) {
        return console.time(label)
    }

    /**
     * End a console timer, this is a timer when it finishes it will print the name and duration
     * @param {String} label Name of the console timer to finish
     * @return {VoidFunction}
     */
    static EndConsoleTimer(label=undefined) {
        return console.timeEnd(label)
    }

    /**
     * Get source code of this class
     * @return {String}
     */
    static getString() {
        return `
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
             * @param {Boolean} utc Choose if get UTC or local
             * @return {Number}
             */
            static GetCurrentMonthDay(utc=false) {
                return utc ? new Date().getUTCDate() : new Date().getDate()
            }
        
            /**
             * Get current day, but day in week format (1-7) 
             * @param {Boolean} utc Choose if get UTC or local
             * @return {Number}
             */
            static GetCurrentWeekDay(utc=false) {
                return utc ? new Date().getUTCDay() : new Date().getDay()
            }
        
            /**
             * Get current year
             * @param {Boolean} utc  Choose if get UTC or local
             * @return {Number}
             */
            static GetCurrentYear(utc=false) {
                return utc ? new Date().getUTCFullYear() : new Date().getFullYear()
            }
        
            /**
             * Get current hour
             * @param {Boolean} utc Choose if get UTC or local 
             * @return {Number}
             */
            static GetCurrentHour(utc=false) {
                return utc ? new Date().getUTCHours() : new Date().getHours()
            }
        
            /**
             * Get current milliseconds
             * @param {Boolean} utc Choose if get UTC or local 
             * @return {Number}
             */
            static GetCurrentMilliseconds(utc=false) {
                return utc? new Date().getUTCMilliseconds(): new Date().getMilliseconds()
            }
        
            /**
             * Get current minutes
             * @param {Boolean} utc Choose if get UTC or local
             * @return {Number}
             */
            static GetCurrentMinutes(utc=false) {
                return utc? new Date().getUTCMinutes(): new Date().getMinutes()
            }
        
            /**
             * Get current month
             * @param {Boolean} utc Choose if get UTC or local
             * @return {Number}
             */
            static GetCurrentMonth(utc=false) {
                return utc? new Date().getUTCMonth(): new Date().getMonth()
            }
        
            /**
             * Get current seconds
             * @param {Boolean} utc Choose if get UTC or local
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
             * Get difference between UTC and local
             * @return {Number}
             */
            static GetDifferenceUTCAndLocal() {
                return new Date().getTimezoneOffset()
            }

            /**
             * Start a console timer, this is a timer when it finishes it will print the name and duration
             * @param {String} label Name of the console timer
             * @return {VoidFunction}
             */
            static StartConsoleTimer(label=undefined) {
                return console.time(label)
            }

            /**
             * End a console timer, this is a timer when it finishes it will print the name and duration
             * @param {String} label Name of the console timer to finish
             * @return {VoidFunction}
             */
            static EndConsoleTimer(label=undefined) {
                return console.timeEnd(label)
            }
        }
        `
    }
}

export default Time;