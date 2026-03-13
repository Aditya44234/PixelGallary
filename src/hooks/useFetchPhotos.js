import { useEffect, useState } from "react";

const PHOTO_URL = "https://picsum.photos/v2/list?limit=30";


export const useFetchPhotos = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {


        async function fetchPhotos() {
            try {
                setLoading(true);
                const response = await fetch(PHOTO_URL);

                if (!response.ok) {
                    throw new Error("Failed to fetch photos...");
                }

                const data = await response.json();
                setPhotos(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchPhotos();
    }, [])

    return { photos, loading, error }
}

export default useFetchPhotos
