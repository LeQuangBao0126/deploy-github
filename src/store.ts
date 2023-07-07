import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { blogApi } from 'pages/blog/blog.service'
import blogReducer from 'pages/blog/blog.slice'
import { useDispatch } from 'react-redux'
export const store = configureStore({
  reducer: { blog: blogReducer, [blogApi.reducerPath]: blogApi.reducer },
  //
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(blogApi.middleware)
  }
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
