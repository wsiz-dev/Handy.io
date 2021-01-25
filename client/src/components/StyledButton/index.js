﻿import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const StyledButton = withStyles({
    root: {
        padding: '2px 20px',
        borderRadius: '10px',
        fontSize: '1.3rem',
    },
})(Button);


export default StyledButton
