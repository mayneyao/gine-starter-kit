import createImmutableContext from "immutable-context";
import { IAppStatus } from "types";


type StateType = {
  status: IAppStatus;
};

export const loadState = () => {
  const initState: StateType = {
    status: {
      loading: false,
      version: '0.0.1',
    }
  };
  try {
    const serializedState = localStorage.getItem("gine_app_state");
    if (serializedState === null) {
      return initState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return initState;
  }
};

const { StateProvider, useImmutableContext } = createImmutableContext<
  StateType
>(loadState(), {
  onUpdate: s => {
    try {
      localStorage.setItem("gine_app_state", JSON.stringify(s));
      console.log("cache state 🆗");
    } catch (error) {
      console.log("cache state ❌");
    }
  }
});

export { StateProvider, useImmutableContext };