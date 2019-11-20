import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400,
       
    },
  
 }));



// Create a new theme using Nunito Sans
const yangjin = createMuiTheme({
  typography: {
    fontFamily: "양진체"
  }
});

const museumclassic = 
({
    typography: {
      fontFamily: "국립박물관문화재단클래식B"
    }
  });


export default function MultilineTextFields() {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
                <MuiThemeProvider theme = {yangjin}>
                <TextField
                    id="filled-textarea"
                    label="여기에 입력을 하세요!"
                    placeholder="안녕하세요!"
                    multiline
                    className={ classes.textField}
                    margin="normal"
                    variant="filled"
                />
                </MuiThemeProvider>
                <MuiThemeProvider theme = {museumclassic}>
                <TextField
                    id="filled-textarea"
                    label="여기에 입력을 하세요!"
                    placeholder="안녕하세요!"
                    multiline
                    className={ classes.textField}
                    margin="normal"
                    variant="filled"
                />
                </MuiThemeProvider>

        </form>
    );
}