/**
 * Transforma una fecha en formato Date a un string con el formato dd/mm/yyyy hh:mm:ss
 * @param {Date} date 
 */
export function dateToString(date) 
{
    // //FORMA 1: 
   
    // //parseamos manualmente la fecha para que tenga el formato dd/mm/yyyy hh:mm:ss
    // const day = normalizeSegment(date.getDate()); // 1-31
    // const month = normalizeSegment(date.getMonth() + 1); // Enero es 0
    // const year = date.getFullYear(); // 2023
    // const hours = normalizeSegment(date.getHours()); // 0-23
    // const minutes = normalizeSegment(date.getMinutes()); // 0-59
    // const seconds = normalizeSegment(date.getSeconds()); // 0-59

    // /**
    //  * Función que recibe un valor y lo transforma en un string de dos dígitos agregando un 0 a la izquierda si es necesario
    //  * @param {*} value 
    //  * @returns 
    //  */
    // function normalizeSegment(value)
    // {
    //     return ("" + value).padStart(2, '0');
    // }

    // return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
    // /*

    // //FORMA 2:
    const dateFormatter = new Intl.DateTimeFormat('es-AR', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
}).format(date);

return dateFormatter.replace(',', ' -');
}