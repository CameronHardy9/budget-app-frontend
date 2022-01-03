import {Link} from 'react-router-dom';
import {useState} from 'react';
import apiHandler from '../utils/apiHandler';
import calcBudget from '../utils/calcBudget';

function Budget(props) {
    const [budget, setBudget] = useState(props.userObject.budget)
    const [purchases] = useState(props.userObject.purchases);

    return(
        <div className='container'>
            <h1>Budget</h1>
            <p>${calcBudget(budget, purchases)}</p>
            <button onClick={async() => {
                const newDoc = await clickHandler();
                props.updateUserObject(newDoc);
                setBudget(newDoc.budget);
                }}>Set Budget</button>
            <Link to="..">Back</Link>
        </div>
    )
}

async function clickHandler() {
    const budget = Number(prompt("New budget?"));
    const newDoc = await apiHandler("PUT", {budget: budget});
    return newDoc;
}

export default Budget;