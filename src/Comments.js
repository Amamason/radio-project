import React from "react";
import Testimonials from "./db.json";

function Comments(){
    return(
        <div className="commentsContainer">
            <div className="comments">
                { Testimonials.map(comment => {
                    return(
                        <div key={ comment.id }>
                            <p>
                                {Testimonials.comment}
                            </p>
                        </div>
                    )
                })}

            </div>

        </div>

    )


}


export default Comments;