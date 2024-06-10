import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    products: [],
    error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchProducts = createAsyncThunk('product/fetchProducts', () => {
    return axios
        .get('https://661783abed6b8fa43482d698.mockapi.io/intuit/training/reactjs/products')
        .then(response => response.data)
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            state.error = ''
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.products = []
            state.error = action.error.message
        })
    }
})

export default productSlice.reducer