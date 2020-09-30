import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {
            main: "rgba(81,172,245,1)"
        },
        secondary: {
            main: "#000"
        }
    },
    typography: {
        fontFamily: [
            'Greycliff CF',
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Arial',
        ]
    }
});