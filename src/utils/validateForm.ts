import * as yup from "yup"

export const LoginValidate = yup.object().shape({
    username: yup.string().trim().required("El nombre de usuario es requerido"),
    password: yup.string().trim().required("La contraseña es requerido"),
})