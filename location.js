import Head from 'next/head';

export default function Location() {
    return (
        <div>
            <Head>
                <title>PlantWildly - Location</title>
            </Head>
            <main>
                <h1>Enter Your Location</h1>
                <p>Find out your climate zone, soil type, and more.</p>
                <input type="text" placeholder="Enter ZIP code or city" />
                <button>Submit</button>
            </main>
        </div>
    );
}