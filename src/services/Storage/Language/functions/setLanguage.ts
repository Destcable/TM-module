import ISetLanguage from "../interface";

function setLanguage(props: ISetLanguage) {
    const { lang } = props;

    localStorage.setItem('language', lang);
};

export default setLanguage;