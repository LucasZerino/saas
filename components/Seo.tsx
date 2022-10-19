import Head from "next/head"

interface Props{
    tittle: string,
    description?: string
}

const Seo = ({tittle, description}: Props) => {
    return <Head>
        <title>{tittle}</title>
        {description && <meta name="description" content={description}/>}
        <link rel='icon' href='/favicon.ico' />
    </Head>
}

export default Seo