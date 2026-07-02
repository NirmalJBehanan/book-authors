import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

const Popup = ({ setShowPopup,add }) => {
    const formik = useFormik({
        initialValues: {
            title: "",
            isbn: "",
            publicationDate: "",

            author: "",
            dob: "",
            bio: "",
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
        onSubmit: (values) => {
            console.log(values);
            formik.resetForm();
            add(values)
            setShowPopup(false)
            
        },

    })


    return (
        <>
            <div className='container-2'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='close'>
                        <i onClick={() => setShowPopup(false)}
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
                    <button type='submit'>Add Book</button>
                </form>
            </div>

        </>

    )
}

export default Popup