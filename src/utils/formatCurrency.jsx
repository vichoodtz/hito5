
export const formatCurrency = (number) => {
    return number.toLocaleString('es-CL', {
       style: 'currency',
       currency: 'CLP',
    }).replace('CLP', '$');
 };
 