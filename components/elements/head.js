import Head from "next/head";

const AppHead = (props) => {
    // const {favicon} = props;
    const favicon = "http://localhost:3000/_next/image?url=https%3A%2F%2Frbx-backend-media.s3.sa-east-1.amazonaws.com%2Flogotipo_ribermax_45x45_min_2b9f9d1ee6.webp&w=640&q=75";
    /* Favicon */
    return (
        <Head>
           <link rel="shortcut icon" href={favicon} />
        </Head>
    )
}

export default AppHead;