import * as Yup from 'yup'

export interface LoginForm { 
    name?: string;
    email: string;
    password: string;
    passwordMatch?: string;
}

export const validationScheme = Yup.object().shape({
    email: Yup.string().trim().required('Email é obrigatório').email('Email inválido'),
    password: Yup.string().required('Senha é obrigatória').min(8, 'Senha deve ter pelo menos 8 caracteres!'),
    passwordMatch: Yup.string().oneOf([Yup.ref('password')], 'Senhas não são iguais!')
})

export const formScheme: LoginForm = { email: '', password: '', passwordMatch: '' }  // default values