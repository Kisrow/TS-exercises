"use strict";
/*

Задание:

Необходимо составить Mapping Type для следующего объекта:
const formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Должен быть длинее 5 символов'}
}

*/
Object.defineProperty(exports, "__esModule", { value: true });
const form = {
    name: 'Вася',
    password: '123',
};
// написать Mapping Type для следующей функции:
const formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Должен быть длинее 5 символов' }
};
