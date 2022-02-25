import { useEffect, useState } from "react"

export const useFetch = (url, object) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        let isMounted = true

        //Simulating a fetch that is taking some time to load
        setTimeout(() => {
            fetch(url,
                    {
                        object : {
                    }
                })
            .then((response) => {
                if(response.ok && isMounted) {
                    return response.json()
                }
                throw new Error("Could not fetch the data...")
            })
            .then((jsonResponse) => {
                setData(jsonResponse)
                setIsLoading(false)
            }).catch(error => {
                setError(error.message)
            })
        }, 50);

        return () => {
            isMounted = false
        }
    }, [url])

    return {data, isLoading, error}
}
