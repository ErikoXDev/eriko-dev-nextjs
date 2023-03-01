// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import fs from 'fs';
import path from 'path';

type Data = {
  projects: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let projectdir = fs.readdirSync(path.join(process.cwd(), "projects"));
  let projects: any = []
  projectdir.map((project) => {
    let c = fs.readFileSync(path.join(process.cwd(), "projects", project)).toString()
    let parsed = JSON.parse(c)
    if (req.query.featuredOnly === "true") {
      if (parsed.featured) {
        projects.push(parsed)
      }
    } else {
      projects.push(parsed)
    }

  })
  res.status(200).json({ projects })
}
