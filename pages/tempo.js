function Tempo(props)
{
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
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props:{
            staticDateString
        }
    }

}

export default Tempo;