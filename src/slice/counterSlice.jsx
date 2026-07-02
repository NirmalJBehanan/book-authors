import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "book",
    initialState: {
        books: []
    },
    reducers: {
        getBooks: (state, actions) => {
            state.books = actions.payload;
        },
        addBooks: (state, actions) => {
            state.books = [
                ...state.books, actions.payload
            ]
        },
        editBooks: (state, actions) => {
            state.books = state.books.map((book) =>
                book.id === actions.payload.id ?
                   {
                    ...book,
                   ...actions.payload
                   }
                    : book

            )
        },
        deleteBooks:(state, actions)=>{
           state.books=state.books.filter((book)=>
        
            book.id!==actions.payload

        )
        }
    }
})
export const { getBooks, addBooks,editBooks,deleteBooks} = counterSlice.actions
export default counterSlice.reducer;