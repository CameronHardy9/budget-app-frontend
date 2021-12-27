async function apiHandler (method, body) {
    let id = process.env.REACT_APP_USER_ID;
    
    try {
        let response = await fetch(`https://family-budget-app-server.herokuapp.com/api/${id}`, {
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            method: method,
            body: body
        })
        let data = await response.json();
        return data;
    }
    catch (e){
        console.error(e);
    }
    
}

export default apiHandler;