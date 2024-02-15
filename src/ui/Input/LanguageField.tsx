const LanguageField = () => { 
    const options = [
        { value: 'RU', label: 'RU' },
        { value: 'EN', label: 'EN' }
    ];
      
    return <select>
        {
            options.map(opt => <option value={opt.value}>{opt.label}</option>)
        }
    </select>
};

export default LanguageField;