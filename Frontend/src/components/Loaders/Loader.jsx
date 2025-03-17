import React from 'react'
import {HashLoader} from 'react-spinners'

const Loader = () => {
  return (
    <div className="loader" style={{ width: "100vw" }}>
          <HashLoader color="white" size="100px"
            style={{
              marginTop: "100px",
            }}
          />
        </div>
  )
}

export default Loader
