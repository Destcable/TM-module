import Layout from "../Layout"
import NumberField from "../../Input/NumberField"

const AuthLayout = () => {
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
            </div>
            <div>
                <span>Пароль</span>
            </div>
            <hr />
        </Layout>
    )
};

export default AuthLayout;