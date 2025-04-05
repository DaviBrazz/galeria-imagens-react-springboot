import * as Yup from 'yup'

export interface FormProps {
    name: string;
    tags: string;
    file: string | Blob;
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
    file: Yup.mixed<Blob>()
        .required('Selecione uma imagem para carregar')
        .test('size', 'Tamanho do aqrquivo não pode ser maior do que 30MB', (file) => {
            return file.size < 30000000;
        })
        .test('type', 'Formatos aceitos: jpeg, gif ou png', (file) => {
            return file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif';
        })
})