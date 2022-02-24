export const OrdenarVehiculo = (option, array) => {
    if (option === '1') {
        array.sort(function (a, b) {
            return (a.precio - b.precio);
        })
    }
    else if (option === '2') {
        array.sort(function (a, b) {
            return (b.precio - a.precio);
        })
    }
}
