import { GatsbyNode } from "gatsby"
import { IGatsbyState } from "gatsby/dist/redux/types"

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
}) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/old-page-1`,
    toPath: `/new-page-1`
  })  

  createRedirect({
    fromPath: `old-page-2`,
    toPath: `new-page-2`
  })    

  createRedirect({
    fromPath: `https://www.gatsbyjs.org`,
    toPath: `https://www.netlify.com`
  })

  createRedirect({
    fromPath: `(.*)\.gif$`,
    toPath: `$1.jpg`
  })

  createRedirect({
    fromPath: `(?i)^/oldpath(.*)`,
    toPath: `/newpath$1`
  })

  createRedirect({
    fromPath: `adapterspecificfromkeyword`,
    toPath: `adapterspecifickeytokeyword`
  })
}

export const onPostBuild: GatsbyNode["onPostBuild"] = async ({ store }) => {
  const { redirects = []} = store.getState() as IGatsbyState
  console.log(JSON.stringify(redirects.map(r => ({ fromPath: r.fromPath, toPath: r.toPath })), null, 2))
}