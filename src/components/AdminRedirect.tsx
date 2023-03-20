import { useState, useEffect } from "react";

export function AdminRedirect() {
    const [loading , setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
                </div>
            ) : (
                <>
                    <h2 className="text-3xl font-bold underline text-primary">
                        Pep's Design
                    </h2>
                </>
            )}
        </>
    );
}