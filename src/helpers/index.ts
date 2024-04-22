export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {currency: 'CLP'}).format(amount)
}

export function formatDate(datestr: string) : string {
    const dateObj = new Date(datestr)
    const options :Intl.DateTimeFormatOptions  = { weekday:'long' ,year: 'numeric', month: 'long', day: 'numeric' }
    return new Intl.DateTimeFormat('es-ES', options).format(dateObj)
    
}