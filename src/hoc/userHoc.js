import React from "react";

const UserHoc = (WrappedComponent, WrappedComponent2, arg1) => {
    
        return (props) => (
            <div>
                {console.log(props)}
                {arg1}
                <WrappedComponent {...props}/>
                <WrappedComponent2 {...props}/>
            </div>
        )

}

export default UserHoc;