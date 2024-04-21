export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount)
}

export function formatDate(datestr: string) : string {
    const dateObj = new Date(datestr)
    const options :Intl.DateTimeFormatOptions  = { weekday:'long' ,year: 'numeric', month: 'long', day: 'numeric' }
    return new Intl.DateTimeFormat('es-ES', options).format(dateObj)
    
}