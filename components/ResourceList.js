import React from 'react';
import Link from 'next/link';

export default function ResourceList({resources}) {
    const renderedResource = () => 
        resources.map(resources => {
            return(
                <div key={resources.id} className="column is-5 is-offset-1 ">
                    <div className="content is-medium">
                        <h2 className="subtitle is-5 has-text-grey">{resources.createdAt}</h2>
                        <h1 className="title has-text-black is-3">{resources.title}</h1>
                        <p className="has-text-dark">{resources.description}</p>
                        <Link href={`/resources/${resources.id}`}><a className="button is-link">See More</a></Link>
                    </div>
                </div>
            )
        })

    return (
        <>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        <section className="section">
                            <div className="columns is-multiline is-variable is-8">
                                { renderedResource()}
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}
