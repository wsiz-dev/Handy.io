import withStyles from "@material-ui/core/styles/withStyles";
import StyledButton from "./index";

const BorderButton = withStyles({
    root: {
        border: 'solid 2px'
    },
})(StyledButton);

export default BorderButton
