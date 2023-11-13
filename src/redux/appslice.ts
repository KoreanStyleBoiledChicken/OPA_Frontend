import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { PullRequestType } from "../models/PullRequestType"

type appState = {
    appState : PullRequestType
}

const initialState : appState = {
    appState: {
        id: 3,
        companyName: 'Hello',
        prName: '#16 ingress 보안 설정 변경',
        prTimeStamp: "03 January 2023 02:47 PM",
        status: '위험',
        count: 15
    }
}

export const appStateSlice = createSlice({
    name: "appState",
    initialState,
    reducers : {
        setAppState : (state, action: PayloadAction<PullRequestType>) => {
            state.appState = action.payload
        }
    }
})

export const {
    setAppState
} = appStateSlice.actions

export default appStateSlice.reducer;