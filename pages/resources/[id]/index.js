import Layout from "components/Layout";
import Link from "next/link";
import axios from "axios";

const ResourceDetail = ({resource}) => {

    const activeResource = () => {
        axios.patch("/api/resources", {...resource, status: "active"})
          .then(_ => alert("Resource has been activated!"))
          .catch(_ => alert("Cannot active the resource!"))
      }

  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{resource.createdAt}</h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <Link href={`/resources/${resource.id}/edit`}>
                      <a className="button is-warning">
                        Update
                      </a>
                    </Link>
                    <button
                      onClick={activeResource}
                      className="button is-success ml-1">
                      Activate
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps({params}) {
  const dataRes = await fetch(`${process.env.API_URL}/resources/${params.id}`);
  const data = await dataRes.json();

  return {
    props: {
      resource: data
    }
  }
}


export default ResourceDetail;