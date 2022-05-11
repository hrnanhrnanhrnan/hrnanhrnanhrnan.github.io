import { useEffect, useState } from "react"

export const useFetch = (url, object) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        let isMounted = true

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


        return () => {
            isMounted = false
        }
    }, [url])

    return {data, isLoading, error}
}
