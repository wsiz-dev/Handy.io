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
            <h1>Find a <u>professional</u> you can <u>trust</u></h1>
            <div className="search-form">
                <div className="search-input">
                    <Input placeholder={"Type service name..."}  onChange={onInputChange}/>
                </div>
                <button className="search-button btn btn--primary btn--lg" onClick={(() => routeChange(phrase))}>SEARCH FOR PROFESSIONALS</button>
            </div>
        </div>
    )
}
export default Hero
