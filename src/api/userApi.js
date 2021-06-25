import instanceAxios from './baseApi';

export const sendEmail = (messageDto) => {
    return instanceAxios.post('sendemail', messageDto);
}

export default sendEmail;

