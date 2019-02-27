export const initialState = {
    total: 0
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'add':
            return {
                ...state,
                total: state.total + action.amount
            }
        case 'subtract':
            return {
                ...state,
                total: state.total - action.amount
            }
        default:
            throw new Error(`Unhandled action: ${action}`);
    }
}

export default reducer;