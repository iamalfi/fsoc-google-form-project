// const baseUrl = "https://google-form-r1wu.onrender.com";
const baseUrl = "http://localhost:3500";

const RegisterAPI = `${baseUrl}/user/register`;
const LoginAPI = `${baseUrl}/user/login`;
const CreateFormAPI = `${baseUrl}/form/create`;
const GetUserAPI = `${baseUrl}/user`;
const GetFormAPI = `${baseUrl}/form`;
const CreateResponseFormAPI = `${baseUrl}/response-form/create`;
export {
    GetUserAPI,
    RegisterAPI,
    LoginAPI,
    CreateFormAPI,
    GetFormAPI,
    CreateResponseFormAPI,
};
