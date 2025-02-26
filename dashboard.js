import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard() {
    return (
        <div>
            <Head>
                <title>PlantWildly - Dashboard</title>
            </Head>
            <main>
                <h1>Dashboard</h1>
                <nav>
                    <Link href="/location"><button>Location Info</button></Link>
                    <Link href="/plants"><button>Plant Recommendations</button></Link>
                </nav>
            </main>
        </div>
    );
}