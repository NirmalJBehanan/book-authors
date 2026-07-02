import React, { useEffect, useState } from 'react'
import '../App.css'
import Popup from '../components/Popup'
import Details from './Details'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks, addBooks, editBooks, deleteBooks } from '../slice/counterSlice'
const Index = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.counter.books);

    const [showPopup, setShowPopup] = useState(false);

    const fetchBooks = async () => {
        const response = await axios.get("/users");
        dispatch(getBooks(response.data));
    }

    const add = async (data) => {
        const response = await axios.post("/users", {
            title: data.title,
            isbn: data.isbn,
            date: data.publicationDate,
            author: data.author,
            dob: data.dob,
            bio: data.bio
        })
        dispatch(addBooks(response.data))
    }

    const edit = async (data) => {
        const response = await axios.put(`/users/${data.id}`, {
            title: data.values.title,
            isbn: data.values.isbn,
            date: data.values.publicationDate,
            author: data.values.author,
            dob: data.values.dob,
            bio: data.values.bio
        })
        dispatch(editBooks(response.data))
    }

    const deleted = async (id) => {
        dispatch(deleteBooks(id));
        await axios.delete(`/users/${id}`);
        
    };
    useEffect(() => {
        fetchBooks()
    }, [])
    console.log(books)
    
    return (
        <>
            <div className='container'>
                <h1>Admin DashBoard</h1>
                <button onClick={() => setShowPopup(true)}>Add Book</button>
                {
                    showPopup && <Popup setShowPopup={setShowPopup} add={add} />
                }
                <Details books={books} edit={edit} deleted={deleted} />
            </div>

        </>
    )
}

export default Index