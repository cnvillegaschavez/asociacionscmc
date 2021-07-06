import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  withStyles
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ColoredButton from "../../../shared/components/ColoredButton";

const styles = theme => ({
  dialogActions: {
    justifyContent: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  dialog: {
    zIndex: 1400
  },
  backIcon: {
    marginRight: theme.spacing(1)
  }
});

function CookieRulesDialog(props) {
  const { classes, onClose, open, theme } = props;
  return (
    <Dialog
      open={open}
      scroll="paper"
      onClose={onClose}
      className={classes.dialog}
    >
      <DialogTitle>Nuestra Política de cookies</DialogTitle>
      <DialogContent>
        <Typography variant="h6" color="primary" paragraph>
        ¿Qué son las cookies?
        </Typography>
        <Typography paragraph>
          Como es práctica común en casi todos los sitios web profesionales, este sitio
          utiliza cookies, que son pequeños archivos que se descargan en su computadora, para mejorar tu experiencia.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Cómo usamos las cookies
        </Typography>
        <Typography paragraph>
          Utilizamos cookies por una variedad de razones detalladas a continuación. Desafortunadamente, 
          en la mayoría de los casos no hay opciones estándar de la industria para deshabilitar las cookies 
          sin deshabilitar por completo la funcionalidad y las funciones que agregan a este sitio. 
          Se recomienda que deje todas las cookies si no está seguro de si las necesita o no en 
          caso de que se utilicen para proporcionar un servicio que utiliza.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
        Deshabilitar cookies
        </Typography>
        <Typography paragraph>
          Puede evitar la configuración de cookies ajustando la configuración en su navegador (consulte la Ayuda de su navegador para saber cómo hacerlo). 
          Tenga en cuenta que deshabilitar las cookies afectará la funcionalidad de este y muchos otros sitios web que visita. 
          La desactivación de las cookies generalmente también provocará la desactivación de ciertas funciones y características de este sitio.
          Por lo tanto, se recomienda que no desactive las cookies.
        </Typography>        
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <ColoredButton
          onClick={onClose}
          variant="contained"
          color={theme.palette.common.black}
        >
          <ArrowBackIcon className={classes.backIcon} />
          Atras
        </ColoredButton>
      </DialogActions>
    </Dialog>
  );
}

CookieRulesDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(CookieRulesDialog);
