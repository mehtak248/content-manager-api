import React, { useEffect } from 'react'
import Layout from 'components/Layout'
import ResourceHighlights from 'components/ResourceHighlights'
import Newsletter from 'components/Newsletter'
import ResourceList from 'components/ResourceList'
import Footer from 'components/Footer'

// import { resources } from 'api/data'

const index = ({resources}) => {

  // useEffect = () => {
  //   fetch(`http://localhost:3000/api/resources`)
  // }

  return (
    <Layout>
      <ResourceHighlights resources={resources.slice(0,2)} />
      <Newsletter />
      <ResourceList resources={resources.slice(2)} />
      <Footer />
    </Layout>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.API_URL}/resources`)
//   const data = await res.json()
//   return {
//     props: {
//       resources: data
//     }, // will be passed to the page component as props
//   }
// }

// There will be local folder path for this function
export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/resources`);
  const data = await res.json();

  return {
    props: {
      resources: data
    }, // will be passed to the page component as props
  }
}

export default index;