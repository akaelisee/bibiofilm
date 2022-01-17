import React from 'react'
import PropTypes from 'prop-types'
import Logout from '../Components/logout';


const Content = ({ children }) => {
    return (
        <div>
             header
            <Logout />
            {children}
            footer
        </div>
    )
}

Content.propTypes = {
  children: PropTypes.any
}

export default Content
