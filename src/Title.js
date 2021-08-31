//import './Title.css';

function Title(props) {
    return (
        <div className="Title">
            <h1>{props.title}</h1>
            <p>{props.subHeading}</p>
        </div>
    );
}

export default Title;