import Link from 'next/link';


function Home()
{
    return 
    (<div>
    <h1>Home Teste</h1>
        <Link href="/sobre">
            <a>Saiba mais</a>
        </Link>
    </div>)
}


export default Home;