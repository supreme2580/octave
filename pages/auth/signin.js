import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import Header from "../../components/Header"

function signIn({ providers }) {
  return (
    <>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center -mt-20">
            <img
                src="/octave.png"
                alt="logo image"
                className="w-80"
            />
            <p className="font-xs italic">
                Login to your octave account
            </p>
            <div className="mt-10">
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button className="p-3 bg-red-500 text-white rounded-lg" onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
        
    </>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: {
            providers
        }
    }
}

export default signIn
