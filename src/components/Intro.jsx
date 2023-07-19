import myImage from "../assets/elliepic.jpeg"

export default function Intro() {
    return (
        <div className="introdiv">
            <img src={myImage} alt="pic of ellie" className="profilepic" />
            <h2>Ellie Zubrowski</h2>
            <h4>Front-end Developer</h4>
            <a className="emaillink" href="mailto: ellieslife@icloud.com">ellieslife@icloud.com</a>
        </div>
    )
}