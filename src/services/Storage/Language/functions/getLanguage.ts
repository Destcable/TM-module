function getLanguage(): string | null { 
    return localStorage.getItem('language');
};

export default getLanguage;