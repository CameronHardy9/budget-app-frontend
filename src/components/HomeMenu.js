import {Link} from 'react-router-dom';

function HomeMenu() {
    return(
        <>
            <h1>Home Menu</h1>
            <Link to="budget">Budget</Link>
            <Link to="purchases">Purchases</Link>
        </>
    )
}

export default HomeMenu;