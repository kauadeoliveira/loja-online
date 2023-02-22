export function removeFromArray(array: any[], valueToRemove: any){ 
    return array.filter(value => value != valueToRemove)
}