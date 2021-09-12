//const precioOriginal = 120;
//const descuento = 18;

/* function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
} */

/* function calPriceDiscount() {
    const inputPrice = document.getElementById("input-price");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("input-discount"); 
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
} */

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}) */

const coupons = [
    {
        nombre: "promocion-genial",
        rebaja: 25,
    },
    {
        nombre: "mitad-precio",
        rebaja: 50,
    },
    {
        nombre: "casi-regalo",
        rebaja: 75
    },
]

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function calPriceCoupon() {
    const inputPrecio = document.getElementById("coupon-precio");
    const precioValue = inputPrecio.value;

    const inputCoupon = document.getElementById("input-coupon"); 
    const couponValue = inputCoupon.value;

    const couponIsValid = function(coupon) {
        return coupon.nombre === couponValue;
    }
    
    const userCoupon = coupons.find(couponIsValid);
    
    if(userCoupon) {
        const descuento = userCoupon.rebaja;
        const precioConCupon = calcularPrecioConDescuento(precioValue, descuento);
        const resultCoupon = document.getElementById("resultDescuento");
        resultCoupon.innerText = "El precio con descuento son: $" + precioConCupon;
    }
    else {
        alert("No es un cupón válido");
    }
    
}


