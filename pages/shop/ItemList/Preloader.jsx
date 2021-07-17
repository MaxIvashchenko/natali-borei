import React from 'react'

export default function Preloader() {
    return (
        <div className="d-flex justify-content-center">
            <div style={{ color: '#7a5940' }} className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
