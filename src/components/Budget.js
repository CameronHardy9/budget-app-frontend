import {Link} from 'react-router-dom';
import {useState} from 'react';
import apiHandler from '../utils/apiHandler';
import calcBudget from '../utils/calcBudget';

function Budget(props) {
    const [budget, setBudget] = useState(props.userObject.budget)
    const [purchases] = useState(props.userObject.purchases);

    return(
        <>
            <div className='container'>
                <div className='budgetData'>
                    <h2>Set Budget</h2>
                    <span className='budget light'>${budget}</span>
                </div>
                <div className='budgetData'>
                    <h2>Remaining Amount</h2>
                    <span className='budget light'>${calcBudget(budget, purchases)}</span>
                </div>
            </div>
            <div className="lower">
                <button className="styledButton" onClick={async() => {
                    const newDoc = await clickHandler();
                    props.updateUserObject(newDoc);
                    setBudget(newDoc.budget);
                    }}>Set Budget
                </button>
                <Link to="..">Back</Link>
            </div>
        </>
    )
}

async function clickHandler() {
    const budget = Number(prompt("New budget?"));
    const newDoc = await apiHandler("PUT", {budget: budget});
    return newDoc;
}

export default Budget;