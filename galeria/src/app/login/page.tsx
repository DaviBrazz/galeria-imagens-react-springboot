'use client'

import { Template, RenderIf, InputText } from '@/components'
import { useState } from 'react'

export default function login() {

    const [loading, setLoading] = useState<boolean>(false);
    const [newUserState, setNewUserState] = useState<boolean>(true);

    return (
        <Template loading={loading}>
            <div className='felx min-h-full flex-1 flex-col justify-center px-6 py-12 lg:pc-8'>

                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='mt-10 text-center text-1x1 font-bold leading-9 traking-tight text-gray-900'>
                        Crie uma conta
                    </h2>
                </div>

                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form className='space-y-6'>
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
                    </form>
                </div>
            </div>
        </Template>
    )

}