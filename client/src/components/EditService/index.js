import React from "react";
import { Formik } from 'formik';
import useAddService from "../../hooks/useAddService";
import useGetService from "../../hooks/useGetService";
import {Link as RouterLink} from 'react-router-dom'
import {editServiceUrl} from "../../consts/urls";


const EditService = (props) => {
    const {addService, loading, error} = useAddService(editServiceUrl);
    const {service} = useGetService(props.match.url);

    return (loading
            ? <div className={"service-details form-page"}>
                <h2>Loading...</h2>
            </div>
            : <div className={"service-details form-page"}>
                <RouterLink class="btn btn--link" to="/services"> &larr; Back to services</RouterLink>
                <Formik
                    initialValues={{...service}}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        }
                        if (!values.phoneNumber) {
                            errors.phoneNumber = 'Required';
                        }
                        if (!values.description) {
                            errors.description = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        let result = addService(values)
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <h2>Edit service</h2>
                            <div class="form-group">
                                <label><span className="red">*</span>Service type</label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                <div className="error">{errors.name}</div>
                            </div>
                           
                            <div class="form-group">
                                <label><span className="red">*</span>Phone number</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phoneNumber}
                                />
                                <div className="error">{errors.phoneNumber}</div>
                            </div>
                            <div class="form-group">
                                <label><span className="red">*</span>Description</label>
                                    <textarea
                                        name="description"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                    />
                                    <div className="error">{errors.description}</div>
                                </div>
                            <div>
                                <button type="submit" className="btn btn--secondary" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
    )
}

export default EditService
