import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
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