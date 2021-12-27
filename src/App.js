import apiHandler from './components/apiHandler';
import {useState, useEffect} from 'react';
import DataBox from './components/DataBox';
import {Routes, Route} from 'react-router-dom';
import HomeMenu from './components/HomeMenu';
import Purchases from './components/Purchases';
import Budget from './components/Budget';
import Item from './components/Item';

function App() {

    const [budget, setBudget] = useState(undefined);

    useEffect(() => {
       (async () => {
           const response = await apiHandler("GET");
           setBudget(response.budget);
       })();
    },[budget]);

    async function clickHandler() {
        const response = await apiHandler("GET");
        console.log(response);
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<HomeMenu />}>
                    <Route path="budget" element={<Budget />} />
                    <Route path="purchases" element={<Purchases />} >
                        <Route path="item" element={<Item />} />
                    </Route>
                </Route>
            </Routes>
            <DataBox />
        </>
    );
}

export default App;
