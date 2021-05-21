import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required.')
        .min(2, 'Name must be at least 2 characters long'),
    size: yup
        .string()
        .required('Size is required'),
    sauce: yup.boolean(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadian: yup.boolean(),
    spicySausage: yup.boolean(),
    chicken: yup.boolean(),
    onions: yup.boolean(),
    peppers: yup.boolean(),
    tomatoes: yup.boolean(),
    olives: yup.boolean(),
    garlic: yup.boolean(),
    artichoke: yup.boolean(),
    threeCheese: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
})

export default formSchema;