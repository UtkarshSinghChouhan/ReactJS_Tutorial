import React from 'react';

function sum(a, b){
    let sol = a+b;
    return sol;
}

function multiply(a, b){
    let product = a*b;
    return product;
}

function division(a, b){
    let res = a/b;
    // for showing only upto two decimal places
    res = res.toFixed(2);
    return res;
}

function subtract(a, b){
    let sub = a-b;
    return sub;
}

export {sum, subtract, multiply, division};

