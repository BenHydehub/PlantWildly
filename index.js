import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Head>
                <title>PlantWildly</title>
            </Head>
            <main>
                <h1>Welcome to PlantWildly</h1>
                <p>Discover and grow native plants in your area.</p>
                <Link href="/location"><button>Get Started</button></Link>
            </main>
        </div>
    );
}