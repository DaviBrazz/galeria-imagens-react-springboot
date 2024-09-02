'use client'

import { Template, ImageCard } from '@/components'
import { useState } from 'react'
import { useImageService } from '@/resources/image/image.service'
import { Image } from '@/resources/image/image.resource';



export default function GaleriaPage() {

    const useService = useImageService();
    const [images, setImages] = useState<Image[]>([]);


    async function searchImages() {
        const result = await useService.buscar();
        setImages(result);
        console.table(result);

    }
    return (
        <Template>
            <button className="bg-gray-500" onClick={searchImages}>Clique para mudar</button>
            <section className="grid grid-cols-3 gap-8">

                <ImageCard nome="{nomeImage}" tamanho='10MB' dataUpload='01/01/2024' src="" />

            </section>
        </Template>
    )
}