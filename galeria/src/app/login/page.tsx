'use client'

import { Template, RenderIf, InputText, Button } from '@/components'
import { useState } from 'react'

export default function login() {

    const [loading, setLoading] = useState<boolean>(false);
    const [newUserState, setNewUserState] = useState<boolean>(true);

    return (
        <Template loading={loading}>
            <div className='felx min-h-full flex-1 flex-col justify-center px-6 py-12 lg:pc-8'>

                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='mt-10 text-center text-1x1 font-bold leading-9 traking-tight text-gray-900'>
                        {newUserState ? 'Criar novo usuário' : 'Entre com sua conta'}
                    </h2>
                </div>

                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form className='space-y-2'>
                        <RenderIf condition={newUserState}>
                            <div>
                                <label className='block text-sm font-medium leading-6 text-gray-900'>Nome: </label>
                            </div>
                            <div className='mt-2'>
                                <InputText style='w-full'
                                    id='name'

                                />
                            </div>
                        </RenderIf>
                        <div>
                            <label className='block text-sm font-medium leading-6 text-gray-900'>Email: </label>
                        </div>
                        <div className='mt-2'>
                            <InputText style='w-full'
                                id='email'

                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium leading-6 text-gray-900'>Senha: </label>
                        </div>
                        <div className='mt-2'>
                            <InputText style='w-full'
                                type='password'
                                id='password'

                            />
                        </div>

                        <RenderIf condition={newUserState}>
                            <div>
                                <label className='block text-sm font-medium leading-6 text-gray-900'>Repita a senha: </label>
                            </div>
                            <div className='mt-2'>
                                <InputText style='w-full'
                                    type='password'
                                    id='passwordMatch'

                                />
                            </div>
                        </RenderIf>
                        <div>
                            <RenderIf condition={newUserState}>
                                <Button type='submit' style='bg-indigo-700 hover:bg-indigo-500' label='Salvar' />

                                <Button type='button' style='bg-red-700 hover:bg-red-500 mx-2' label='Cancelar' onClick={event => setNewUserState(false)} />
                            </RenderIf>

                            <RenderIf condition={!newUserState}>
                                <Button type='submit' style='bg-indigo-700 hover:bg-indigo-500' label='Entrar' />

                                <Button type='button' style='bg-red-700 hover:bg-red-500 mx-2' label='Cadastrar' onClick={event => setNewUserState(true)} />
                            </RenderIf>
                        </div>
                    </form>
                </div>
            </div>
        </Template>
    )

}