import {Link} from 'react-router-dom';
import apiHandler from '../utils/apiHandler';
import {useState} from 'react';

function Purchases(props) {

    const [purchases, setPurchases] = useState(props.userObject.purchases);

    return(
        <>
            <div className='container'>
                <h1>Purchases</h1>
                {purchases.map((item) => {
                    return (
                        <Link to={`../${item.uniqid}`} key={item.uniqid}>
                            <div className={`dataBox`}>
                                <span >{item.store}</span>
                                <span >${item.amount}</span>
                                <span >{item.date.replaceAll('-','/')}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className="lower">
                <button className='styledButton' onClick={async () => {
                    const newDoc = await clickHandler();
                    props.updateUserObject(newDoc);
                    setPurchases(newDoc.purchases);
                }}>Add Purchase</button>
                <Link to="..">Back</Link>
            </div>
        </>
    )
}

async function clickHandler() {
    const store = prompt("Store name?");
    const amount = Number(prompt("Purchase amount?"));
    const date = new Date().toLocaleDateString("en-US").replaceAll("/","-");;

    const body = {
        store: store,
        amount: amount,
        date: date
    }

    const newDoc = await apiHandler("PUT", body);
    return newDoc;
}

export default Purchases;