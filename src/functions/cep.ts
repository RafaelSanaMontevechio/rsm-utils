export const maskCEP = (value: string) => {
    const formattedValue = String(value)
        .replace(/\D/g, '')
        .slice(0, 8)
        .replace(/(\d{5})(\d)/, '$1-$2');

    return formattedValue;
};

export const unMaskCEP = (value: string) => {
    const formattedValue = String(value).replace(/\.|\-/g, '');

    return formattedValue;
};
