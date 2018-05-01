import React from "react";
//Import React Router


const PostItem = (props) => {
    console.log(props);

    return (
        <div>
            {props.match.params.id}
        </div>
    )
}

export default PostItem;