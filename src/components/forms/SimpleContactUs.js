import React, {useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg";
import sendEmail from "../../api/userApi";
import emailjs from 'emailjs-com';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

export default () => {
  const [messageConfirm, setMessageConfirm] = useState();
  const [messageColor, setMessageColor] = useState();
  const [messageHtml, setMessageHtml] = useState({
      name: '',
      email: '',
      message: '',
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setMessageHtml({ ...messageHtml, [name]: value });   
  };

  /* Work with SENDGRID */
  const onSendEmail = (e) => {
    e.preventDefault();
    sendEmail(messageHtml).then(() => {
        setMessageConfirm('Su mensaje fue enviado, un representante de SCMC se comunicará con usted los más pronto posible');
        setMessageColor('#FFFFFF');
        e.target.reset();
    })
    .catch((error) => {
        setMessageConfirm('No se pudo enviar sus datos, intente más tarde');
        setMessageColor('#E3B24B');
    });
  }

  /* Work with EmailJS */
  const onSendEmailJS =(e) =>{
    e.preventDefault();
    emailjs.sendForm('service_4eftzhy', 'template_osenj4a', e.target, 'user_gces61yfrtx4j8VJ8mDOy').then(resp => {
        console.log(resp);
        setMessageConfirm('Su mensaje fue enviado, un representante de SCMC se comunicará con usted los más pronto posible');
        setMessageColor('#FFFFFF');
        e.target.reset();
    }).catch(err => {
        console.log(err);
        setMessageConfirm('No se pudo enviar sus datos, intente más tarde');
        setMessageColor('#E3B24B');
    });
  }

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Mesa de partes</h2>
            <form onSubmit={onSendEmailJS}>
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name">Nombre y Apellidos.</Label>
                    <Input id="name" onChange={handleChange} required type="text" name="name" placeholder="Marilu" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email">Correo electrónico:</Label>
                    <Input id="email" onChange={handleChange} required type="email" name="email" placeholder="correo@mail.com" />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="message">Mensaje</Label>
                    <TextArea id="message" onChange={handleChange} required name="message" placeholder="A continuación, describo mi caso ..."/>
                  </InputContainer>
                </Column>
              </TwoColumn>

              <SubmitButton type="submit">Enviar</SubmitButton>
              <h1 style={{color: messageColor}}>{messageConfirm}</h1>

            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
