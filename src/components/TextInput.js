import { Button, TextField, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapForm : {
            display: "flex",
            justifyContent: "center",
            width: "95%",
            margin: `${theme.spacing(0)} auto`
        },
        wrapText  : {
            width: "100%"
        },
        button: {
            //margin: theme.spacing(1),
        },
    })
);

export const TextInput = () => {
    const classes = useStyles();
    return (
        <>
            <form className={classes.wrapForm}  noValidate autoComplete="off">
                <TextField
                    id="standard-text"
                    label="メッセージを入力"
                    className={classes.wrapText}
                    //margin="normal"
                />
                <Button variant="contained" color="primary" className={classes.button}>
                    <p>&gt</p>
                </Button>
            </form>
        </>
    )
}