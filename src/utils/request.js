const restUrl = 'https://mjwdadmkprxoobcrtvzj.supabase.co/rest/v1'
const authUrl = 'https://mjwdadmkprxoobcrtvzj.supabase.co/auth/v1'

async function baseRequest(url, path = '/', method = 'GET', data = null, opts = {}) {
        const options = {
            ...opts,
        headers: {
            ...opts.headers,
            apiKey: import.meta.env.VITE_API_KEY,
            Prefer: 'return=representation'
        },
        
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

    return res.json()
}

export default async function request(path = '/', method = "GET", data = null, opts = {}) {
    return baseRequest (restUrl, path, method, data, opts)
}

export const authRequest= async (path = '/', method = "GET", data = null, opts = {}) => {
    return baseRequest (authUrl, path, method, data, opts)
}
