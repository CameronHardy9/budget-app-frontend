import {Link} from 'react-router-dom';
import apiHandler from '../utils/apiHandler';

function Item(props) {
    return(
        <div className="container">
            <h1>Item</h1>
            <div className='dataBox'>
                <h2 className={``}>{props.item.store}</h2>
                <h2 className={``}>${props.item.amount}</h2>
                <h2 className={``}>{props.item.date}</h2>
            </div>
            <Link to=".." onClick={async() => {
                const newDoc = await clickHandler(props.item.uniqid);
                props.updateUserObject(newDoc);
                }}>Delete Purchase</Link>
            <Link to="../purchases">Back</Link>
        </div>
    )
}

async function clickHandler(purchaseId) {
    const newDoc = await apiHandler("DELETE", {uniqid: purchaseId});
    return newDoc;
}

export default Item;