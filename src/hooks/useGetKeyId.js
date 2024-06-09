import React, { useEffect, useState } from 'react'

const useGetKeyId = () => {
    const [loading, setloading] = useState(false);
    const [key, setkey] = useState('');
    useEffect(() => {
        const keyId = async () => {
            setloading(true);
            try {
                const response = await fetch('http://localhost:5000/payment/getKeyId', {
                    method: "GET", // *GET, POST, PUT, DELETE, etc.
                    mode: "cors", // no-cors, *cors, same-origin
                    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const res = await response.json();
                if (res.error) {
                    throw new Error(res.error);
                }
                setkey(res);
            } catch (error) {
                console.log(error.message);
                return error.message;
            } finally {
                setloading(false);
            }
        }

        if (key === '') {
            keyId();
        }
    });

    return { loading, key };
}

export default useGetKeyId