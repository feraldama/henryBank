import {makeStyles} from '@material-ui/styles'

const useStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    appBar:{
        zIndex: theme.zIndex.drawer + 1, 
    },
    title: {
        width: `${theme.spacing(2)}%`, 
        heigth: `${theme.spacing(2)}%`
    },
    space: {
        flexGrow: 1
    },
    btn: {
        color: '#fff',
        textDecoration: 'none',
    },
}))

export default useStyle;