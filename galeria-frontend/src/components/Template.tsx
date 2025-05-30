'use client'

import { useAuth } from "@/resources";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";


interface TemplateProps {
    children: React.ReactNode;
    loading?: boolean;
}

export const Template: React.FC<TemplateProps> = ({ children, loading = false }: TemplateProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className={`${loading ? 'animate-pulse' : ''} flex-grow container mx-auto mt-8 px-4`}>
                <RenderIf condition={loading}>
                    <div className="text-center">
                        <Loading />
                    </div>
                </RenderIf>

                {children}
            </main>

            <Footer />
        </div>
    );
}

interface RenderIfProps {
    condition?: boolean;
    children: React.ReactNode;
}

export const RenderIf: React.FC<RenderIfProps> = ({ condition = true, children }) => {
    if (condition) {
        return children;
    }
    return null;
}

const Loading: React.FC = () => {
    return (
        <div role="status">
            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
        </div>
    )
}

const Header: React.FC = () => {

    const auth = useAuth();
    const user = auth.getUserSession();
    const router = useRouter();

    function logout() {
        auth.invalidateSession();
        router.push("/login");
    }

    return (
        <header className="bg-sky-950 text-white py-3 ">
        <div className="container mx-auto flex justify-between items-center px-4">
            <Link href="/galeria">
                <h1 className="text-3xl font-bold">Galeria</h1>
            </Link>
            <RenderIf condition={!!user}>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <span>Olá, {user?.name} </span>
                    </div>
                    <span>
                        <a href="#" onClick={logout} className="ml-20 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-200">Sair</a>
                    </span>
                </div>
            </RenderIf>
        </div>
    </header>
    
    );
};

const Footer: React.FC = () => {
    return (
        <><footer className="bg-sky-950 text-white py-4 mt-8 text-sm text-center">
            <div className="container mx-auto">
                Desenvolvido por Davi Braz
            </div>
        </footer>
            <ToastContainer
                position="top-right"
                autoClose={8000}
                hideProgressBar={false}
                draggable={false}
                closeOnClick={true}
                pauseOnHover={true}
            />
        </>
    );
};
