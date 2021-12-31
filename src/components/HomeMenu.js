import {Link} from 'react-router-dom';

function HomeMenu(props) {
    return(
        <>
            <h1>Budget App</h1>
            {props.loaded ? (
                <>
                    <Link to="budget">Budget</Link>
                    <Link to="purchases">Purchases</Link>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default HomeMenu;