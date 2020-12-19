import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const StyledButton = withStyles({
    root: {
        border: 'solid 2px',
        padding: '2px 20px',
        borderRadius: '10px',
        fontSize: '1.3rem',
        margin: '0 0 0 2vw'
    },
})(Button);

export default StyledButton
