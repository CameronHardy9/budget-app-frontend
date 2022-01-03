import apiHandler from './utils/apiHandler';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import HomeMenu from './components/HomeMenu';
import Purchases from './components/Purchases';
import Budget from './components/Budget';
import Item from './components/Item';
import NavBar from './components/NavBar';

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
            {!!userObject ? (
                <>
                    <NavBar userObject={userObject}/>
                    <Routes>
                        <Route path="/" element={<HomeMenu />} />
                        <Route path="budget" element={<Budget userObject={userObject} updateUserObject={updateUserObject} />} />
                        <Route path="purchases" element={<Purchases userObject={userObject} updateUserObject={updateUserObject} />} />
                        {!!userObject && userObject.purchases.map((item) => {
                            return(
                                <Route key={item.uniqid} path={item.uniqid} element={<Item userObject={userObject} item={item} updateUserObject={updateUserObject} />} />
                            )
                        })}
                    </Routes>
                </>
            ) : (
                <div className="loaderContainer">
                    <div className="squareLoader"></div>
                </div>
            )}
        </>
    );
}

export default App;
