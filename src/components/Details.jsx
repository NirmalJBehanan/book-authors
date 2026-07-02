import React from 'react'

import Boooks from './Boooks'
const Details = ({ books,edit,deleted }) => {
  return (
    <div className='container-3'>
      {
         books.map((book)=>(
        <Boooks title={book.title} isbn={book.isbn} date={book.date} author={book.author} dob={book.dob} bio={book.bio} edit={edit} key={book.id} id={book.id} deleted={deleted}/>
      ))
        }
    </div>
  )
}

export default Details