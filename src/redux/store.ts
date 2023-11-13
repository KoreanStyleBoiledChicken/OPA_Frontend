import { configureStore } from "@reduxjs/toolkit";
import { appStateSlice } from "./appslice";

export const store = configureStore({

    reducer: {
        appState: appStateSlice.getInitialState
    }
})

export type RootState = ReturnType<typeof store.getState>

