const SendNuiCallback = async (endpoint, data, cb) => {
    try {
        const response = await fetch(`https://${process.env.NEXT_PUBLIC_RESOURCENAME}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data || {})
        });
        const responseData = await response.json();
        cb(responseData);
    } catch (error) {
        console.error('Fejl i callback der sender forkert data', error);
    }
};

export default SendNuiCallback;

// Currently working on a fix on the error so for now we just log it.
