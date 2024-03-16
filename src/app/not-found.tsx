export default function Example() {
    return (
        <>
            
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-core">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-neutral-600">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/"
                            className="rounded-md bg-core px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-core/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </a>
                        <a href="/" className="text-sm font-semibold text-neutral-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}