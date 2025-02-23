import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HealthConcern {
  id: number;
  name: string;
}

interface FormState {
  healthFocus: HealthConcern[];
}

const initialState: FormState = {
  healthFocus: [],
};

export const healthSlice = createSlice({
  name: "healthConcern",
  initialState,
  reducers: {
    updateForm: (
      state,
      action: PayloadAction<{ healthFocus: HealthConcern[] }>
    ) => {
      state.healthFocus = action.payload.healthFocus;
    },
  },
});

export const { updateForm } = healthSlice.actions;
export default healthSlice.reducer;
