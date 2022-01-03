import {Link} from 'react-router-dom';
import apiHandler from '../utils/apiHandler';
import {useState} from 'react';
import ranStyle from '../utils/ranStyle';

function Purchases(props) {

    const [purchases, setPurchases] = useState(props.userObject.purchases);

    return(
        <div className='container'>
            <h1>Purchases</h1>
            {purchases.map((item) => {
                const style = ranStyle();
                return (
                    <Link to={`../${item.uniqid}`} key={item.uniqid}>
                        <div className={`dataBox ${style}`}>
                            <span >{item.store}</span>
                            <span >${item.amount}</span>
                            <span >{item.date}</span>
                        </div>
                    </Link>
                )
            })}
            <div className="lower">
                <button onClick={async () => {
                    const newDoc = await clickHandler();
                    props.updateUserObject(newDoc);
                    setPurchases(newDoc.purchases);
                }}>Add Purchase</button>
                <Link to="..">Back</Link>
            </div>
        </div>
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