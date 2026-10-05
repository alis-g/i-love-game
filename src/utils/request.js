const url = 'https://mjwdadmkprxoobcrtvzj.supabase.co/rest/v1/'

export async function request(path = '/', method = 'GET', data = null, opts = {} ) {
    const options = {
        headers: {
            apiKey: import.meta.env.VITE_API_KEY
        },
        ...opts
    }

    if(method !== 'GET'){
        options.method = method
    }

    if(data){
        options.headers["Content-type"] = "application/json"
        options.body = JSON.stringify(data)
    }

    const res = await fetch(`${url}${path}`, options);

    if(!res.ok){
        throw new Error(`HTTP error! status ${res.status}`)
    }

    if(res.status === 204){
        return null
    }

    return res.json()
}