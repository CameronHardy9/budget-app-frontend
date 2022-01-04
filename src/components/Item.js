import {Link} from 'react-router-dom';
import apiHandler from '../utils/apiHandler';

function Item(props) {
    return(
        <>
            <div className="container">
                <h1 className='bold'>{props.item.store}</h1>
                <div className='purchaseItem'>
                    <h2 className='medium'>${props.item.amount}</h2>
                    <h2 className='medium'>{props.item.date.replaceAll('-','/')}</h2>
                </div>
            </div>
            <div className="lower">
                <button className="styledButton" onClick={async() => {
                    const confirm = window.confirm("Delete purchase?");
                    if(!confirm) {
                        return;
                    }
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