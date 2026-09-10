import { CaseStudy, type CaseStudyLang } from './articles/case-study'
import { consultingContent } from './articles/consulting-i18n'

export default function Consulting({ lang = 'en' }: { lang?: CaseStudyLang }) {
  return <CaseStudy articleId="consulting" lang={lang} content={consultingContent} />
}
