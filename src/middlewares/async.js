export default ({dispatch}) => next => action => {
    //If there is no async then property or no action
    //continue the middleware process
    if (!action.payload || !action.payload.then){
        return next(action);
    }
    /*
    1. Takes action that has a then statement.
    2. Finishes async and gets response.
    3. Puts reponse into new action payload.
    4. Repeats middleware process by dispatching new action.
    */
    action.payload.then(function(response){
        const newAction = {...action, payload: response};
        dispatch(newAction);
    });
};
