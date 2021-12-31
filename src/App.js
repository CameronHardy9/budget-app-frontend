import apiHandler from './utils/apiHandler';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import HomeMenu from './components/HomeMenu';
import Purchases from './components/Purchases';
import Budget from './components/Budget';
import Item from './components/Item';

function App() {

    const [userObject, setUserObject] = useState(undefined);

    useEffect(() => {
       (async () => {
           const response = await apiHandler("GET");
           setUserObject(response);
       })();
    },[]);

    function updateUserObject(object) {
        setUserObject(object);
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<HomeMenu loaded={!!userObject} />} />
                <Route path="budget" element={<Budget userObject={userObject} updateUserObject={updateUserObject} />} />
                <Route path="purchases" element={<Purchases userObject={userObject} updateUserObject={updateUserObject} />} />
                {!!userObject && userObject.purchases.map((item) => {
                    return(
                        <Route key={item.uniqid} path={item.uniqid} element={<Item userObject={userObject} item={item} updateUserObject={updateUserObject} />} />
                    )
                })}
            </Routes>
        </>
    );
}

export default App;
