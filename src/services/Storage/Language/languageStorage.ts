import getLanguage from "./functions/getLanguage";
import setLanguage from "./functions/setLanguage";
import ISetLanguage from "./interface";

function languageStorage() { 
    function get() { 
        return getLanguage()
    };

    function set(lang: ISetLanguage) { 
        return setLanguage(lang)
    };
};

export default languageStorage;