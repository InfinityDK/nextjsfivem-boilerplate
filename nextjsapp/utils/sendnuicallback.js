const SendNuiCallback = async (endpoint, data, cb) => {
    await fetch(`https://${process.env.NEXT_PUBLIC_RESOURCENAME}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify((data ? data : {}))
    }).then(response => response.json()).then((data) => {
        cb(data)
    });
}

export default SendNuiCallback;