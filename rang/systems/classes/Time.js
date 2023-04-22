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
        }
        `
    }
}