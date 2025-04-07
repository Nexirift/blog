import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import Link from 'next/link'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Staff
        </h1>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
        <ul className="flex flex-wrap justify-center gap-4 pt-8 sm:space-x-12 xl:block xl:space-y-8 xl:space-x-0">
          {allAuthors
            .sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999))
            .map((author) => (
              <li className="flex items-center space-x-4" key={author.name}>
                {author.avatar && (
                  <Link href={`/staff/${author.slug}`}>
                    <Image
                      src={author.avatar}
                      width={64}
                      height={64}
                      alt={`${author.name}'s avatar`}
                      className="h-16 w-16 rounded-full"
                    />
                  </Link>
                )}
                <dl className="text-sm leading-5 font-medium whitespace-nowrap">
                  <dt className="sr-only">Name</dt>
                  <dd>
                    <Link
                      href={`/staff/${author.slug}`}
                      className="text-2xl text-gray-900 dark:text-gray-100"
                    >
                      {author.name}
                    </Link>
                    <p className="text-xl text-gray-400">{author.occupation}</p>
                  </dd>
                  <dt className="sr-only">Twitter</dt>
                  <dd>
                    {author.twitter && (
                      <Link
                        href={author.twitter}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {author.twitter
                          .replace('https://twitter.com/', '@')
                          .replace('https://x.com/', '@')}
                      </Link>
                    )}
                  </dd>
                </dl>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

/*
<div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
              <SocialIcon kind="bluesky" href={bluesky} />
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
*/
