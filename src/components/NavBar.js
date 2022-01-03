import calcBudget from '../utils/calcBudget';

function NavBar(props) {
    return (
        <div className="navBar">
            <h1 className="bold">Budget App</h1>
            <span className="budget light">${calcBudget(props.userObject.budget, props.userObject.purchases)}</span>
        </div>
    )
}

export default NavBar;