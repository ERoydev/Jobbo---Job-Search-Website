export const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            "Content-Type": "application/json",
        };
    }

    const token = localStorage.getItem('accessToken');
    // If old headers stays i just add my new token 
    if (token) {
        options.headers = {
            ...options.headers,
            'Authorization': token
        }
    }

    return options;
}

export const request = async (methodParam, url, data) => {
    const response = await fetch(`${url}`, { 
        method: `${methodParam}`,
        ...buildOptions(data),
    });

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');