'use client'

import { Template, RenderIf, InputText, Button, FieldError } from '@/components'
import { useState } from 'react'
import { LoginForm, formScheme, validationScheme } from './formSchema'
import { useFormik } from 'formik'

export default function login() {

    const [loading, setLoading] = useState<boolean>(false);
    const [newUserState, setNewUserState] = useState<boolean>(false);

    const { values, handleChange, handleSubmit, errors} = useFormik<LoginForm>({
        initialValues: formScheme,
        validationSchema: validationScheme,
        onSubmit: onSubmit
    })

   async function onSubmit(values: LoginForm) {
    console.log(values)
   }

    return (
        <Template loading={loading}>
            <div className='felx min-h-full flex-1 flex-col justify-center px-6 py-12 lg:pc-8'>

                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='mt-10 text-center text-1x1 font-bold leading-9 traking-tight text-gray-900'>
                        {newUserState ? 'Criar novo usuário' : 'Entre com seu usuário'}
                    </h2>
                </div>

                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-gray-500'>
                    <form onSubmit={handleSubmit} className='space-y-2'>
                        <RenderIf condition={newUserState}>
                            <div>
                                <label className='block text-sm font-medium leading-6 text-gray-900'>Nome: </label>
                            </div>
                            <div className='mt-2'>
                                <InputText style='w-full'
                                    id='name'
                                    value={values.name}
                                    onChange={handleChange}

                                />
                                <FieldError error={errors.name} />
                            </div>
                        </RenderIf>
                        <div>
                            <label className='block text-sm font-medium leading-6 text-gray-900'>Email: </label>
                        </div>
                        <div className='mt-2'>
                            <InputText style='w-full'
                                id='email'
                                value={values.email}
                                onChange={handleChange}

                            />
                             <FieldError error={errors.email} />
                        </div>
                        <div>
                            <label className='block text-sm font-medium leading-6 text-gray-900'>Senha: </label>
                        </div>
                        <div className='mt-2'>
                            <InputText style='w-full'
                                type='password'
                                id='password'
                                value={values.password}
                                onChange={handleChange}

                            />
                             <FieldError error={errors.password} />
                        </div>

                        <RenderIf condition={newUserState}>
                            <div>
                                <label className='block text-sm font-medium leading-6 text-gray-900'>Repita a senha: </label>
                            </div>
                            <div className='mt-2'>
                                <InputText style='w-full'
                                    type='password'
                                    id='passwordMatch'
                                    value={values.passwordMatch}
                                    onChange={handleChange}

                                />
                                 <FieldError error={errors.passwordMatch} />
                            </div>
                        </RenderIf>
                        <div>
                            <RenderIf condition={newUserState}>
                                <Button type='submit' style='bg-indigo-700 hover:bg-indigo-500' label='Salvar' />

                                <Button type='button' style='bg-red-700 hover:bg-red-500 mx-2' label='Cancelar' onClick={event => setNewUserState(false)} />
                            </RenderIf>

                            <RenderIf condition={!newUserState}>
                                <Button type='submit' style='bg-indigo-700 hover:bg-indigo-500' label='Entrar' />

                                <Button type='button' style='bg-green-700 hover:bg-green-500 mx-2' label='Criar conta' onClick={event => setNewUserState(true)} />
                            </RenderIf>
                        </div>
                    </form>
                </div>
            </div>
        </Template>
    )

}