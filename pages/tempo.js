function Tempo(props)
{
    console.log('>Passando pelo Frontend');
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return(
        <div>
            <h2>
                {dynamicDateString} (dinamico)
            </h2>
            <h2>
                {props.staticDateString} (estático)
            </h2>
        </div>
    )
}

export function getStaticProps()
{
    console.log('>Passando pelo GetStaticProps');
    
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props:{
            staticDateString
        },
        revalidate: 1
    }

}

export default Tempo;