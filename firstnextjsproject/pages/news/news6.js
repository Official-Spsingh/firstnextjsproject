import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
const News6 = () => (
    <Layout>
        <Head>
            <title>Dynamic Image</title>
            <link rel="icon" href="/images/dp.jpg" />
        </Head>
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
            }
        />
        <Image
            src="/images/dp.jpg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
        />
    </Layout>
);
export default News6