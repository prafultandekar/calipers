import { GET } from "./action";



const initState = {
    userData: [],
};

export const Reducer = (store = initState, action) => {
  switch (action.type) {
    case GET:
      return { ...store, userData: action.payload };

   

    default:
      return store;
  }
};
