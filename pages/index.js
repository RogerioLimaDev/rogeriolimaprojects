import {useState} from 'react';


function Home(){
    return <div>
    <h1>Home page</h1>
    <Contador/>
    </div>
}

function Contador(){

    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador +1);
    }
    return <div>
        <div>
            {contador}
        </div>
    </div>
}


export default Home;