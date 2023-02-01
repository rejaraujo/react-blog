import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
// import { sortByDate } from '../utils'


export default function Home({ posts }) {

  return (
    <>
      <div>
        <Head>
          <title>React Dev Blog</title>
          {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <div className='post'>
          {posts.map((post, index) => (
            // eslint-disable-next-line react/jsx-key
            <Post post={post} />
          ))}</div>
      </div>
    </>
  )
}

export async function getStaticProps() {

  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {

    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  console.log(posts);


  return {
    props: {
      posts,
    },
  }
}