import api from './baseServer';

// --------------getAllSeyfs--------------
export const getAllSeyfs = async () => {
    const response = await api.get("/seyfs")
    .then(res => res.data)
    .catch(error => error.message )

    return response
}

// --------------getAllOthers--------------
export const getAllOthers = async () => {
    const response = await api.get("/others")
    .then(res => res.data)
    .catch(error => error.message);

    return response
}

// --------------getSeyfCategories--------------
export const getSeyfCategories = async () => {
    const response = await api.get("/cathegories/seyfsCath")
    .then(res => res.data)
    .catch(error => error.message);
    return response
}

// --------------getOthersCategories--------------
export const getOthersCategories = async () => {
    const response = await api.get("/cathegories/othersCath")
    .then(res => res.data)
    .catch(error => error.message);
    return response
}