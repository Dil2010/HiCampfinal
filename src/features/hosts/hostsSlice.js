import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';



export const fetchHosts = createAsyncThunk(
    'hosts/fetchHosts',
    async () => {
        const response = await fetch(baseUrl + 'hosts');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    hostsArray: [],
    isLoading: true,
    errMsg: ''
};

const hostsSlice = createSlice({
    name: 'hosts',
    initialState,
    reducers: {},
    extraReducers:  {
        [fetchHosts.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchHosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.hostsArray = mapImageURL(action.payload);
        },
        [fetchHosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const hostsReducer = hostsSlice.reducer;

export const selectAllHosts = (state) => {
    return state.hosts.hostsArray;
};

export const selectHostByCampsiteId = (id) => (state) => {
    return state.hosts.hostsArray.find((host) => host.id === parseInt(id));
}

export const selectFeaturedHost = (state) => {
    return {
        featuredItem: state.host.hostsArray.find(
            (host) => host.featured
        ),
        isLoading: state.hosts.isLoading,
        errMsg: state.hosts.errMsg
    };
};