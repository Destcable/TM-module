import languagesData from '../../data/languages';

const LanguageField = () => {
    
    return <select>
        {
            languagesData.map(lang => <option value={lang.value}>{lang.label}</option>)
        }
    </select>
};

export default LanguageField;