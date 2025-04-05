import * as Yup from 'yup'

export interface FormProps {
    name: string;
    tags: string;
    file: any;
}

export const formScheme: FormProps = {
    name: '',
    tags: '',
    file: ''
}

export const formValidationScheme = Yup.object().shape({
    name: Yup.string().trim()
        .required('Nome é necessário!')
        .max(50, 'O nome tem um limite de 50 caracteres'),
    tags: Yup.string().trim()
        .required('Tags são necessárias!')
        .max(50, 'Tags têm um limite de 50 caracteres!'),
})