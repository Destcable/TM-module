import React from "react";
import Layout from "../Layout"
import NumberField from "../../Input/NumberField"
import TextField from "../../Input/TextField";
import PasswordField from "../../Input/PasswordField";
import LanguageStorage from "../../../services/Storage/Language/LanguageStorage";
import LanguageField from "../../Input/LanguageField";
import Text from "../../Text/Text";

const AuthLayout: React.FC = () => {
    const languageStorageInstance = new LanguageStorage();
    console.log(languageStorageInstance.get());
    return (
        <Layout>
            <h3>SAP</h3>
            <span>Авторизация</span>
            <br />
            <br />
            <div>
                <Text>Мандант</Text>
                <NumberField />
            </div>
            <br />
            <div>
                <Text>Пользователь</Text>
                <TextField maxLength={30} />
            </div>

            <div>
                <Text>Пароль</Text>
                <PasswordField maxLength={50}/>
            </div>
            <br />
            <div>
                <Text>Язык</Text>
                <LanguageField />
            </div>

            <hr />
        </Layout>
    )
};

export default AuthLayout;