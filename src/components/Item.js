import {Link} from 'react-router-dom';
import apiHandler from '../utils/apiHandler';

function Item(props) {
    return(
        <>
            <div className="container">
                <h1>{props.item.store}</h1>
                <div className='purchaseItem'>
                    <h2>${props.item.amount}</h2>
                    <h2>{props.item.date}</h2>
                </div>
            </div>
            <div className="lower">
                <button className="styledButton" onClick={async() => {
                    const newDoc = await clickHandler(props.item.uniqid);
                    props.updateUserObject(newDoc);
                    }}><Link to=".." >Delete Purchase</Link></button>
                <Link to="../purchases">Back</Link>
            </div>
        </>
    )
}

async function clickHandler(purchaseId) {
    const newDoc = await apiHandler("DELETE", {uniqid: purchaseId});
    return newDoc;
}

export default Item;