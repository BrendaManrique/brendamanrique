import { CaseStudy, type CaseStudyLang } from './articles/case-study'
import { casicornioContent } from './articles/casicornio-i18n'

export default function Casicornio({ lang = 'en' }: { lang?: CaseStudyLang }) {
  return <CaseStudy articleId="casicornio" lang={lang} content={casicornioContent} />
}
