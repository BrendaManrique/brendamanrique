import { CaseStudy, type CaseStudyLang } from './articles/case-study'
import { moodysContent } from './articles/moodys-i18n'

export default function Moodys({ lang = 'en' }: { lang?: CaseStudyLang }) {
  return <CaseStudy articleId="moodys" lang={lang} content={moodysContent} />
}
