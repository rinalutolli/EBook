import {createSlice} from "@reduxjs/toolkit";
import lastViewedBooks from "../../screens/lastViewedBooks";

const bookSlice = createSlice({
    name: "book",
    initialState: {
        book: null,
        lastViewedBooks: [],
        favoriteBooks: [],
        theme: "light"
    },
    reducers: {
        addBook(state, action) {
            state.book = action.payload;
        },
        updateLastViewedBooks(state, action) {
            const newItem = action.payload;
            const numberOfItems = state.lastViewedBooks.length;
            const existingItem = state.lastViewedBooks.find((item) => item.isbn13 === newItem.isbn13)
            if (!existingItem) {
                if (numberOfItems === 10) {
                    state.lastViewedBooks.shift()
                }
                state.lastViewedBooks.push((newItem))
            }
        },
        removeViewedBooks(state, action) {
            const removedItemId = action.payload;
            state.lastViewedBooks = state.lastViewedBooks.filter(item => item.isbn13 !== removedItemId)
        },
        makeFavorite(state, action) {
            const existingItem = state.favoriteBooks.find((item) => item.isbn13 === action.payload.isbn13)
            if (!existingItem) {
                state.favoriteBooks.push(action.payload)
            }
        },
        removeFavoriteBook(state, action) {
            const removedItemId = action.payload;
            state.favoriteBooks = state.favoriteBooks.filter(item => item.isbn13 !== removedItemId)
        },
        changeTheme(state, action) {
            state.theme = action.payload
        }
    },
});

export const {
    addBook,
    changeTheme,
    updateLastViewedBooks,
    removeViewedBooks,
    removeFavoriteBook,
    makeFavorite
} = bookSlice.actions;

export default bookSlice.reducer;
