﻿import React from "react";
import { Formik } from 'formik';
import useAddService from "../../hooks/useAddService";
import useGetService from "../../hooks/useGetService";
import {Link as RouterLink} from 'react-router-dom'
import {editServiceUrl} from "../../consts/urls";


const EditService = (props) => {
    const {addService, loading, error} = useAddService(editServiceUrl);
    const {service} = useGetService(props.match.url);

    return (loading
            ? <div className={"service-details"}>
                <h2>Loading...</h2>
            </div>
            : <div className={"service-details"}>
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
                            <label> Service type:
                                <div>{errors.name}</div>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </label>
                            <label> Phone number:
                                <div>{errors.phoneNumber}</div>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phoneNumber}
                                />
                            </label>
                            <label> Description:
                                <div>{errors.description}</div>
                                <textarea
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                />
                            </label>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
    )
}

export default EditService