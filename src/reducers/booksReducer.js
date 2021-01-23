import React, { Component } from 'react';
import { connect } from 'react-redux';
import booksReducer from './reducers/booksReducer';
import uuid from "uuid";

function booksReducer(state = [], action) {
    let idx;
    switch (action.type) {
      
      case "ADD_BOOK":
        // return {
        //   ...state,
        //   books: [...state.books, action.book]
        // };
        let existingAuthor = state.filter(author => author.authorName === action.book.authorName);
        if(existingAuthor.length > 0) {
          return state;
        } else {
            return [...state, { authorName: action.book.authorName, id: uuid() }];
        }
   
  
      case "REMOVE_BOOK":
        idx = state.books.findIndex(book => book.id === action.id);
        return {
          ...state,
          books: [...state.books.slice(0, idx), ...state.books.slice(idx + 1)]
        };
  
        default:
          return state;
      }
    }

    export default booksReducer;