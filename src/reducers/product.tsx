import { produce } from "immer";

const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as { products: any[]; isLoading: boolean; error: string }
export const productReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "fetchProducts":
                draftState.products = action.payload;
                break;
            case "addProduct":
                draftState.products.push(action.payload);
                break;
            case "updateProduct":
                const product = action.payload;
                draftState.products = draftState.products.map((item: any) => item.id === product.id ? product : item);
                break;
            case "deleteProduct":
                const id = action.payload;
                draftState.products = draftState.products.filter(item => item.id !== id);
                break;
            default:
                return state;
        }
    })
}