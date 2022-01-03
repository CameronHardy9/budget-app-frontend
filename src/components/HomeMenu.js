import {Link} from 'react-router-dom';

function HomeMenu() {
    return(
        <div className='container'>
            <Link to="budget">Budget</Link>
            <Link to="purchases">Purchases</Link>
        </div>
    )
}

export default HomeMenu;