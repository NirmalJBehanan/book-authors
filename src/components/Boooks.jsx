import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
const Boooks = ({ id, title, isbn, date, author, dob, bio, edit ,deleted }) => {
  const [isedit, setisedit] = useState(false);
  const del=()=>{
    console.log(id)
    deleted(id)
  }
  const formik = useFormik({
    initialValues: {
      title: title,
      isbn: isbn,
      publicationDate: date?.split("T")[0],

      author: author,
      dob: dob?.split("T")[0],
      bio: bio
    },
    validationSchema: yup.object({
      title: yup.string()
        .required("required"),
      isbn: yup.string()
        .required("required"),
      publicationDate: yup.string()
        .required("required"),
      author: yup.string()
        .required("required"),
      dob: yup.string()
        .required("required"),
      bio: yup.string()
        .required("required"),



    }),
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
      setisedit(false)
      edit({values:values,id:id})

    },

  })
 
  return (
    <>
      {
        isedit ? (
          <>
          
            <div className='container-6'>

              <form onSubmit={formik.handleSubmit}>
                <div className='close'>
                  <i onClick={() => setisedit(false)}
                    className="fa-solid fa-xmark"></i>
                </div>
                <div>
                  <div>
                    {
                      formik.touched.title && formik.errors.title ?
                        <p style={{ color: "red" }}>{formik.errors.title}</p> : null
                    }
                    <input
                     
                      type="text"
                      placeholder="Book Title"
                      {...formik.getFieldProps("title")}
                    />
                  </div>

                  <div>
                    {
                      formik.touched.isbn && formik.errors.isbn ?
                        <p style={{ color: "red" }}>{formik.errors.isbn}</p> : null
                    }
                    <input placeholder='ISBN number'
                      type="text"
                      {...formik.getFieldProps("isbn")}
                    />
                  </div>


                  <div>
                    {
                      formik.touched.publicationDate && formik.errors.publicationDate ?
                        <p style={{ color: "red" }}>{formik.errors.publicationDate}</p> : null
                    }
                    <label>Publication Date</label>
                    <input type='date'
                      {...formik.getFieldProps("publicationDate")}
                    />
                  </div>
                </div>

                <div>
                  <h3>Auther Deatils</h3>
                  <div>
                    {
                      formik.touched.author && formik.errors.author ?
                        <p style={{ color: "red" }}>{formik.errors.author}</p> : null
                    }
                    <input placeholder='Auther name'
                      type='text'
                      {...formik.getFieldProps("author")}
                    />
                  </div>

                  <div>
                    {
                      formik.touched.dob && formik.errors.dob ?
                        <p style={{ color: "red" }}>{formik.errors.dob}</p> : null
                    }
                    <label>Date Of Birth</label>
                    <input type='date'
                      {...formik.getFieldProps("dob")}
                    />
                  </div>

                  <div>
                    {
                      formik.touched.bio && formik.errors.bio ?
                        <p style={{ color: "red" }}>{formik.errors.bio}</p> : null
                    }
                    <textarea
                      placeholder="Short biography"
                      {...formik.getFieldProps("bio")}
                    />
                  </div>
                </div>
                <button type="submit" >update</button>
              </form>

            </div>


          </>
        )
          :
          (
            <>
              <div className="container-5">
                <h2>{title}</h2>
                <p><strong>ISBN:</strong> {isbn}</p>
                <p><strong>Publication Date:</strong> {date}</p>

                <h3>Author Details</h3>
                <p><strong>Name:</strong> {author}</p>
                <p><strong>Date of Birth:</strong> {dob}</p>
                <p><strong>Bio:</strong> {bio}</p>
                <div className='edbuttons'>
                  <button onClick={() => setisedit(true)}>edit</button>
                  <button onClick={()=>del()}>delete</button>
                </div> </div>
            </>)
      }

    </>
  )
}

export default Boooks