import tv4 from 'tv4';
//Gotten from jsonschema.net
import stateSchema from 'middlewares/stateSchema';

export default ({dispatch, getState}) => next => action => {
    //Goes through all the middleware and reducers
    next(action);
    //Validation logic
    const valid = tv4.validate(getState(), stateSchema);
    if (!valid){
        console.warn('Invalid state schema detected');
    }
};