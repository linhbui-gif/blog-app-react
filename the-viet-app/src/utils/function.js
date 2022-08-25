export const parseObjectToFormData = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
    });
    return formData;
};
export const objectToQueryString = (obj, prefix) => {
    return Object.keys(obj).map(objKey => {
        if (obj.hasOwnProperty(objKey)) {
            const key = prefix ? `${prefix}[${objKey}]` : objKey;
            const value = obj[objKey];

            return typeof value === "object" ?
                this.objectToQueryString(value, key) :
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
        return null;
    }).join("&");
}