import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Welkom" />
    <div style={{ maxWidth: `400px`, margin: `auto`, marginBottom: `64px` }}>
      <Image />
    </div>
    <p>Aan deze website wordt momenteel nog gewerkt.</p>
    <p>Wil je graag een handje helpen in de nieuwe bijentuin in het Erasmuspark? Laat het ons weten via bijentuinamsterdam@gmail.com</p>
  </Layout>
)

export default IndexPage
