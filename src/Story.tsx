import { CaseStudy, type CaseStudyLang } from './articles/case-study'
import { storyContent } from './story-i18n'

export default function Story({ lang = 'en' }: { lang?: CaseStudyLang }) {
  return <CaseStudy articleId="story" lang={lang} content={storyContent} />
}
