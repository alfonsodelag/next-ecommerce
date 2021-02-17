import { getToken, hasExpiredToken } from "../api/token";

export async function authFetch(url, params, logout) {
    const token = getToken();
    if (!token) {
        // Usuario no logeado
        logout();
    } else {
        if (hasExpiredToken(token)) {
            // Token caducado
            logout();
        } else {
            const paramsTemp = {
                ...params,
                headers: {
                    ...params?.headers,
                    // Esta api trabaja con este estándar de usar Bearer
                    Authorization: `Bearer ${token}`
                },
            };

            try {
                const response = await fetch(url, paramsTemp)
                const result = await response.json()
                return result;
            } catch (error) {
                return error;
            }
        }
    }
}