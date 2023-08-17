import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import '../assets/css/header.scss'


const Header = () => {

    const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "poruke"}}) {
        totalCount
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
              }
              html
            }
            id
          }
        }
      }
    }
  `)

    const quotes = data.allFile.edges;

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex].node;



    return(

        <header>
            <div className=" slika">
                <div className="mask">
                    <div className="d-flex justify-content-center align-items-center h-100">



                        <div className="text-white poruke">


                            <figure className="p-3 text-end">
                                {/*<blockquote className="blockquote">*/}
                                {/*    <p dangerouslySetInnerHTML={{__html: node.childMarkdownRemark.html}} />*/}

                                {/*</blockquote>*/}
                                {/*<figcaption className="blockquote-footer">*/}
                                {/*    {node.childMarkdownRemark.frontmatter.title}*/}
                                {/*</figcaption>*/}


                                <blockquote className="blockquote">
                                    <p dangerouslySetInnerHTML={{ __html: randomQuote.childMarkdownRemark.html }} />
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    {randomQuote.childMarkdownRemark.frontmatter.title}
                                </figcaption>

                            </figure>




                            {/*<figure className="p-3 text-end">*/}
                            {/*    <blockquote className="blockquote">*/}
                            {/*        <p>*/}
                            {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.*/}
                            {/*        </p>*/}
                            {/*    </blockquote>*/}
                            {/*    <figcaption className="blockquote-footer">*/}
                            {/*        Someone famous in Source Title*/}
                            {/*    </figcaption>*/}
                            {/*</figure>*/}
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header



// export const query = graphql`
//   query {
//     poruke: allFile(filter: {relativeDirectory: {eq: "poruke"}}) {
//       totalCount
//       edges {
//         node {
//           childMarkdownRemark {
//             frontmatter {
//               title
//             }
//             html
//           }
//           id
//         }
//       }
//     }
//   }
// `
