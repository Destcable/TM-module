import getLanguage from "./functions/getLanguage";
import setLanguage from "./functions/setLanguage";
import ISetLanguage from "./interface";

class LanguageStorage {
    get() { 
        return getLanguage();
    }

    set(lang: ISetLanguage) { 
        setLanguage(lang)
    }
};

export default LanguageStorage;