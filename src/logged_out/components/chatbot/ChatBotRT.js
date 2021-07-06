import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { ThemeProvider } from 'styled-components';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import { sendEmail } from '../../../redux/actions/contactActions';

const otherFontTheme = {
    background: '#f5f8fb',
    headerBgColor: '#1D5BA6',
    headerFontColor: '#fff',
    headerFontSize: '16px',
    botBubbleColor: '#1583C2',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a'
  };
  
class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, email, theme } = steps;

    this.setState({ name, email, theme });
  }

  render() {
    const { name, email, theme } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <table>
          <tbody>
            <tr>
              <td> <b>Nombre</b></td>
            </tr>
            <tr>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td><b>Correo electrónico</b></td>
            </tr>
            <tr>
              <td>{email.value}</td>
            </tr>
            <tr>
              <td><b>Servicio</b></td>
            </tr>
            <tr>
              <td>{theme.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

const isEmails = (value) => {
  const reg= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(value);
};

const steps = [
    {
      id: '1',
      message: 'Bienvenido soy BotcitoRT. ¿Cuál es su nombre?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      validator :(value) => {
        if(!value || value.trim().length===0)
        {
          return 'Ingrese su nombre por favor.';
        }
        return true;
      },
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hola {previousValue}! ¿Cuál es su correo electrónico?',
      trigger: 'email',
    },
    {
      id: 'email',
      user: true,
      validator :(value) => {
        if(!isEmails(value))
        {
          return 'El formato del correo electrónico es incorrecto.';
        }
        return true;
      },
      trigger: '5',
    },
    {
      id: '5',
      message: '¿Cuál de nuestros servicios te interesaría conocer a más detalle?',
      trigger: 'theme',
    },
    {
      id: 'theme',
      options: [
        { value: 'Desarrollo de Software', label: 'Desarrollo de Software', trigger: '6' },
        { value: 'Capacitación en tecnologías', label: 'Capacitación en tecnologías', trigger: '6' },
        { value: 'Automatización', label: 'Automatización', trigger: '6' },
        { value: 'Domótica', label: 'Domótica', trigger: '6' },
        { value: 'IA', label: 'IA', trigger: '6' },
        { value: 'Gestión de proyectos', label: 'Gestión de proyectos', trigger: '6' },
        { value: 'Marketing digital y publicidad', label: 'Marketing digital y publicidad', trigger: '6' },
        { value: 'Venta de Dominio y Hosting', label: 'Venta de Dominio y Hosting', trigger: '6' },
      ]
    },
    {
      id: '6',
      message: '¡Excelente! te enviaremos información según el servicio que elegiste.',
      trigger: 'review',
    },
    {
      id: 'review',
      component: <Review />,
      asMessage: true,
      trigger: 'update',
    },
    {
      id: 'update',
      message: '¿Desea actualizar algún campo?',
      trigger: 'update-question',
    },
    {
      id: 'update-question',
      options: [
        { value: 'yes', label: 'Si', trigger: 'update-yes' },
        { value: 'no', label: 'No', trigger: 'end-message' },
      ],
    },
    {
      id: 'update-yes',
      message: '¿Qué campo te gustaría actualizar?',
      trigger: 'update-fields',
    },
    {
      id: 'update-fields',
      options: [
        { value: 'name', label: 'Nombre', trigger: 'update-name' },
        { value: 'email', label: 'Correo electrónico', trigger: 'update-email' },
        { value: 'theme', label: 'Información de servicios', trigger: 'update-theme' },
      ],
    },
    {
      id: 'update-name',
      update: 'name',
      trigger: '6',
    },
    {
      id: 'update-email',
      update: 'email',
      trigger: '6',
    },
    {
      id: 'update-theme',
      update: 'theme',
      trigger: '6',
    },
    {
      id: 'end-message',
      message: '¡Gracias! ¡Sus datos fueron enviados con éxito!',
      end: true,
    },
  ];


  const ButtonChatIcon = withStyles({
    root: {
      color: '#fff'
    },
  })(ChatBubbleIcon);

class ChatBotRT extends Component {

  componentDidMount() {
    this.handleEnd = this.handleEnd.bind(this);
  }

  handleEnd({ steps, values }) {
    const comments =  `Nombre: ${values[0]}, Servicio: ${values[2]}`;
    const requestDto = {Email: values[1], Message: comments};  
    sendEmail(requestDto);
  }

  render() {
    return (
        <ThemeProvider theme={otherFontTheme}>
        <React.StrictMode>
          <ChatBot  
                    handleEnd={this.handleEnd}
                    steps={steps}
                    headerTitle={'BotcitoRT'}
                    floating={true}
                    placeholder={'Escribe el mensaje'}
                    floatingIcon= { <Badge badgeContent={'...'} color="secondary"> <ButtonChatIcon /> </Badge>}
                    />
        </React.StrictMode>
      </ThemeProvider>
    );
  }
}

export default ChatBotRT;