﻿import React from "react";
import {TextField} from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import BorderButton from "../StyledButton/BorderButton";


const ServiceEdit = (props) => {
    return (
        <div>
            <h2 className={"text-left"}>Add new post</h2>
            <form>
                <div className={"service-details"}>
                    <div>
                        <div>
                            <TextField label="Name" type={String}/>
                        </div>
                        <div>
                            <TextField label="Phone Number" type={Number}/>
                        </div>
                        <div>
                            <p>Description:</p>
                            <TextareaAutosize aria-label="empty textarea" placeholder="Empty" rowsMin={10}
                                              className={"description"}/>
                        </div>

                        <BorderButton className={"edit-button"} color={"secondary"}>Accept</BorderButton>
                        <BorderButton className={"edit-button"}>Cancell</BorderButton>
                    </div>
                    <div>
                        {props.description}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ServiceEdit
