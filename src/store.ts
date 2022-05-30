import { reactive } from "vue";

interface User {
  id: string;
}

interface State {
  user: User | null;
}

const initialState: State = {
  user: null,
};

export const store = reactive(initialState);
