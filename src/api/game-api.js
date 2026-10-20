import request from "../utils/request"

export const getAll = (accessToken) => {
    return request("/games?order=created_at.desc", "GET", null, {
        headers: {
            ...getAuthHeader(accessToken)
        }
    })
}


function getAuthHeader(accessToken) {
    return {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
    };
}
