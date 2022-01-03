import calcBudget from '../utils/calcBudget';

function NavBar(props) {
    return (
        <div className="navBar">
            <h1>Budget App</h1>
            <span>${calcBudget(props.userObject.budget, props.userObject.purchases)}</span>
        </div>
    )
}

export default NavBar;