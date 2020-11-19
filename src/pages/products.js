import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../Layouts/Layout"
import PresetCard from "../Components/PresetCard"
import { css, jsx } from "@emotion/react"
import "../styles/global.scss"
const ProductsPage = ({ data }) => {
  return (
    <Layout>
      <div className="products-page">
        <h1>Products Page</h1>
        <div className="products-layout">
          {data.allShopifyProduct.edges.map(({ node }) => {
            console.log(node)
            return (
              <PresetCard
                key={node.shopifyId}
                link={`/product/${node.handle}`}
                image={node.images[0].originalSrc}
                title={node.title}
                price={node.priceRange.minVariantPrice.amount}
                description={node.description}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default ProductsPage

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          images {
            originalSrc
          }
          shopifyId
          description
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`
