import Input from "@material-ui/core/Input";
import BorderButton from "../StyledButton/BorderButton";
import '../../style/style.css'
import history from "../../helpers/history";



const Hero = () => {
    let phrase = ""

    const onInputChange = (e) => {
        phrase = e.target.value;
    }

    const routeChange = (phrase) => {
        let path = "/services/" + phrase
        history.push(path);
        window.location.reload(false);
    }

    return (
        <div className="hero">
            <h1>Find a professional you can trust </h1>
            <div className="search-input">
                <Input placeholder={"Type service name..."} color={"secondary"}  onChange={onInputChange}/>
            </div>
            <BorderButton classes={{ label: 'search-button' }} color={"secondary"} onClick={(() => routeChange(phrase))}>SEARCH FOR PROFESSIONALS</BorderButton>
        </div>
    )
}
export default Hero
