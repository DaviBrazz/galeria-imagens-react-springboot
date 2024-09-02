import { Template, ImageCard } from '@/components'


export default function GaleriaPage() {
    return (
        <Template>
            <section className="grid grid-cols-3 gap-8">
                <ImageCard nome='Paraiso' tamanho='10MB' dataUpload='01/01/2024' src='https://media.istockphoto.com/id/517188688/pt/foto/paisagem-de-montanha.jpg?s=612x612&w=0&k=20&c=uFGUrUT6gA8FrTWhE10YYzngWPlDLssKxJiDs1Qw2Qs='/>
                <ImageCard nome='Paraiso' tamanho='10MB' dataUpload='01/01/2024' src='https://media.istockphoto.com/id/517188688/pt/foto/paisagem-de-montanha.jpg?s=612x612&w=0&k=20&c=uFGUrUT6gA8FrTWhE10YYzngWPlDLssKxJiDs1Qw2Qs='/>
                <ImageCard nome='Paraiso' tamanho='10MB' dataUpload='01/01/2024' src='https://media.istockphoto.com/id/517188688/pt/foto/paisagem-de-montanha.jpg?s=612x612&w=0&k=20&c=uFGUrUT6gA8FrTWhE10YYzngWPlDLssKxJiDs1Qw2Qs='/>
            </section>
        </Template>
    )
}