import {Link} from 'react-router-dom';

function HomeMenu(props) {
    return(
        <div className='container'>
            <h1>Budget App</h1>
            {props.loaded ? (
                <div className='dataBox'>
                    <Link to="budget">Budget</Link>
                    <Link to="purchases">Purchases</Link>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default HomeMenu;