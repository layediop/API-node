// function Sum(a, b) {
//     return a + b;
// }

// function substracte (a, b) {
//     return a - b;
// }

// module.exports = { Sum, substracte }

function Sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error('Les deux arguments doivent être des nombres valides');
    }
    return a + b;
}

function substracte(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error('Les deux arguments doivent être des nombres valides');
    }
    return a - b;
}

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error('Les deux arguments doivent être des nombres valides');
    }
    if (b === 0) {
        throw new Error('Division par zéro interdite');
    }
    return a / b;
}

module.exports = { Sum, substracte, divide };
