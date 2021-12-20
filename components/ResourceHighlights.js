import React from 'react';
import Link from 'next/link';

export default function ResourceHighlights({resources}) {
    return (
        <>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        {
                            resources.map(resources => {
                                return(
                                    <section key={resources.id} className="section">
                                        <div className="columns">
                                            <div className="column is-8 is-offset-2">
                                                <div className="content is-medium">
                                                    <h2 className="subtitle is-4">{resources.createdAt}</h2>
                                                    <h1 className="title">{resources.title}</h1>
                                                    <p>{resources.description}</p>
                                                    <Link href={`/resources/${resources.id}`}><a className="button is-link">See More</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
