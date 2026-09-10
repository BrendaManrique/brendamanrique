import { CaseStudy, type CaseStudyLang } from './articles/case-study'
import { invipContent } from './articles/invip-i18n'

export default function Invip({ lang = 'en' }: { lang?: CaseStudyLang }) {
  return <CaseStudy articleId="invip" lang={lang} content={invipContent} />
}
