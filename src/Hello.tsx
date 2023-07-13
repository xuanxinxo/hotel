

interface Props{
    Name: string
}

const Hello = ({Name}: Props) => {
    return(
        <h1>{Name}</h1>
    )
}

export default Hello;