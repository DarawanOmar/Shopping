const CURRENCCY_FORMATER =  new Intl.NumberFormat(undefined,{currency: "USD",style:"currency"})

export function formatCurrency(number:number){
    return CURRENCCY_FORMATER.format(number)
}