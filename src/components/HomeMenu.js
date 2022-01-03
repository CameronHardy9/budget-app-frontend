import {Link} from 'react-router-dom';

function HomeMenu() {
    return(
        <div className='home'>
            <Link to="budget">Budget</Link>
            <Link to="purchases">Purchases</Link>
        </div>
    )
}

export default HomeMenu;