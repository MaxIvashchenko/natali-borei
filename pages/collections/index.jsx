import React from 'react'

const collections = ["Edelweiss", "Aquaworld", "Molecula"]

export default function Collections() {
    return (
        <section className="container Collections">
            <div className="row">
                {collections.map(collection => {
                    return (
                        <div key={collection} className="col-12 collection">
                            <h1>{collection}</h1>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
