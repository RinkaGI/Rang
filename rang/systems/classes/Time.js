export default class Time {
    static ConvertToDate(...args) {
        return new Date(...args)
    }

    static GetCurrentDate() {
        return new Date()
    }
    
    static GetCurrentMonthDay(utc=false) {
        return utc ? new Date().getUTCDate() : new Date().getDate()
    }

    static GetCurrentWeekDay(utc=false) {
        return utc ? new Date().getUTCDay() : new Date().getDay()
    }

    static GetCurrentYear(utc=false) {
        return utc ? new Date().getUTCFullYear() : new Date().getFullYear()
    }

    static GetCurrentHour(utc=false) {
        return utc ? new Date().getUTCHours() : new Date().getHours()
    }

    static GetCurrentMilliseconds(utc=false) {
        return utc? new Date().getUTCMilliseconds(): new Date().getMilliseconds()
    }

    static GetCurrentMinutes(utc=false) {
        return utc? new Date().getUTCMinutes(): new Date().getMinutes()
    }

    static GetCurrentMonth(utc=false) {
        return utc? new Date().getUTCMonth(): new Date().getMonth()
    }

    static GetCurrentSeconds(utc=false) {
        return utc? new Date().getUTCSeconds(): new Date().getSeconds()
    }

    static GetCurrentTime() {
        return new Date().getTime()
    }

    static GetDifferenceUTCAndLocal() {
        return new Date().getTimezoneOffset()
    }

    static StartConsoleTimer(label=undefined) {
        return console.time(label)
    }

    static EndConsoleTimer(label=undefined) {
        return console.timeEnd(label)
    }

    static getString() {
        return `
        class Time {
            static ConvertToDate(...args) {
                return new Date(...args)
            }
        
            static GetCurrentDate() {
                return new Date()
            }
            
            static GetCurrentMonthDay(utc=false) {
                return utc ? new Date().getUTCDate() : new Date().getDate()
            }
        
            static GetCurrentWeekDay(utc=false) {
                return utc ? new Date().getUTCDay() : new Date().getDay()
            }
        
            static GetCurrentYear(utc=false) {
                return utc ? new Date().getUTCFullYear() : new Date().getFullYear()
            }
        
            static GetCurrentHour(utc=false) {
                return utc ? new Date().getUTCHours() : new Date().getHours()
            }
        
            static GetCurrentMilliseconds(utc=false) {
                return utc? new Date().getUTCMilliseconds(): new Date().getMilliseconds()
            }
        
            static GetCurrentMinutes(utc=false) {
                return utc? new Date().getUTCMinutes(): new Date().getMinutes()
            }
        
            static GetCurrentMonth(utc=false) {
                return utc? new Date().getUTCMonth(): new Date().getMonth()
            }
        
            static GetCurrentSeconds(utc=false) {
                return utc? new Date().getUTCSeconds(): new Date().getSeconds()
            }
        
            static GetCurrentTime() {
                return new Date().getTime()
            }
        
            static GetDifferenceUTCAndLocal() {
                return new Date().getTimezoneOffset()
            }

            static StartConsoleTimer(label=undefined) {
                return console.time(label)
            }

            static EndConsoleTimer(label=undefined) {
                return console.timeEnd(label)
            }
        }
        `
    }
}