import Head from "next/head"

export default function Meta(props: any) {
    const title = props.title ? `${props.title} - KAVINI` : `KAVINI`
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="kavini.com" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}