/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'

export default function Post({ post }) {
    return (
        <div className='card'>
            <img src={post.frontmatter.cover_image} alt="" />
            <div className='post-date'>Posted on {post.frontmatter.date}</div>
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.excerpt}</p>
            <Link legacyBehavior href={`/blog/${post.slug}`}>
                <a className='btn'>Read More</a>
            </Link>
        </div>

    )
}