/*

Задание:

Необходимо составить Mapping Type для следующего объекта:
const formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Должен быть длинее 5 символов'}
}

*/

interface IForm {
  name: string;
  password: string;
}

const form: IForm = {
  name: 'Вася',
  password: '123',
}

// написать Mapping Type для следующей функции:
const formValidation: FormValidation = {
  name: { isValid: true },
  password: { isValid: false, errorMessage: 'Должен быть длинее 5 символов'}
}

// результат
type IFormToValidation<Type> = {
  [Property in keyof Type]:
    { isValid: true} | { isValid: false, errorMessage: string };
}

type FormValidation = IFormToValidation<IForm>;
