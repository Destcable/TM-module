import React from "react";
import Layout from "../Layout"
import NumberField from "../../Input/NumberField"
import TextField from "../../Input/TextField";
import PasswordField from "../../Input/PasswordField";
import LanguageStorage from "../../../services/Storage/Language/LanguageStorage";

const AuthLayout: React.FC = () => {
    const languageStorageInstance = new LanguageStorage();
    alert(languageStorageInstance.get());
    return (
        <Layout>
            <h3>SAP</h3>
            <span>Авторизация</span>
            <br />
            <br />
            <div>
                <span>Мандант</span>
                <NumberField />
            </div>

            <div>
                <span>Пользователь</span>
                <TextField maxLength={30} />
            </div>
            <div>
                <span>Пароль</span>
                <PasswordField maxLength={50}/>
            </div>
            <hr />
        </Layout>
    )
};

export default AuthLayout;