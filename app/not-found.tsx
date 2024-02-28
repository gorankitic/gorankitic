// next
import Link from "next/link";

const NotFound = () => {
    return (
        <main className="grow pt-20 text-center">
            <h2 className="text-3xl">There was a problem.</h2>
            <p className="mt-6">{`We couldn't find that route.`}</p>
            <p>Go back to the <Link href='/' className="text-teal-600 underline">Homepage</Link>.</p>
        </main>
    )
}

export default NotFound;