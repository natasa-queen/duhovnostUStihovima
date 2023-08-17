import * as React from "react";
import { graphql, useStaticQuery, Link } from 'gatsby';
import "../assets/css/lista.scss";
// import slugify from 'slugify'

const Lista = () => {

    const data = useStaticQuery(graphql`
        query {
          allMarkdownRemark {
            totalCount
            edges {
              node {
                frontmatter {
                  title
                }
                id
                parent {
                  ... on File {
                    name
                  }
                }
              }
            }
          }
        }
  `)

    const total = data.allMarkdownRemark.totalCount
    const pesme = data.allMarkdownRemark.edges



    return(

        <div className='lista'>
            <h1>Duhovnost u stihovima</h1>

            <h1>{total}</h1>



            <ul className="list-group list-group-light spisak">
                {pesme.map(({node}) => {

                    // const slug = slugify(node.frontmatter.title, {lower:true})

                    const pesmaName = node.parent.name

                    return(
                        <li className="list-group-item d-flex justify-content-between align-items-center spisak-item">
                            <div className="d-flex align-items-center">

                                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="slika"
                                     className="rounded-circle slika"/>

                                <div className="ms-3">

                                    <Link to={pesmaName}>
                                        <p className="fw-bold mb-1 naslov-pesme">{node.frontmatter.title}</p>
                                    </Link>

                                </div>

                            </div>
                        </li>
                    )
                })}
            </ul>

        </div>

    )
}
export default Lista


// export const query = graphql`
//   query {
//     pesme: allFile {
//       totalCount
//     }
//   }
// `

