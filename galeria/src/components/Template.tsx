interface TemplateProps {
    children: React.ReactNode
}

export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
    return (
        <>
            <Header />
             <div className="container mx-auto mt-8 px-4"> 
            {props.children}
            </div>

            <Footer />
        </>
    )
}

const Header: React.FC = () => {
    return (
        <header className="bg-sky-950 text-white py-3">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-3xl font-bold">Galeria</h1>
            </div>


        </header>
    )
}

const Footer: React.FC = () => {
    return (
        <footer className="bg-sky-950 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                Desenvolvido por Davi Braz
            </div>

        </footer>
    )
}