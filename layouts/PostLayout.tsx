import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import type { Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import { ReactNode } from 'react'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}
interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
}

export default function PostLayout({ content, children }: LayoutProps) {
  const { date, title, draft } = content

  return (
    <SectionContainer>
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
                {draft && (
                  <p className="pt-4 text-red-500">
                    You are viewing a draft version of this post. Information may not be up to date,
                    complete or valid.
                  </p>
                )}
              </div>
            </div>
          </header>
          <div className="divide-y divide-gray-200 xl:pb-0 dark:divide-gray-700">
            <div className="prose dark:prose-invert max-w-none pt-10 pb-8">{children}</div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
