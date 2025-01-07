import info from '../data/info.json'
import headshot from '../img/gollum.jpg';

function MainCard() {
    const description = info.description;
    const formattedDescription = description.split('\n').map((str, index) => <p key={index}>{str}</p>);

    return (
        <div className="main glass">
            <h1>Gollum | Owner of the Ring</h1>
            <img className='headshot' src={headshot}></img>
            {formattedDescription}
        </div>
    );
}

export default MainCard;
