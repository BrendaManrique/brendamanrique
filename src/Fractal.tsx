import { CaseStudy, type CaseStudyLang } from './articles/case-study'
import { fractalContent } from './articles/fractal-i18n'

export default function Fractal({ lang = 'en' }: { lang?: CaseStudyLang }) {
  return <CaseStudy articleId="fractal" lang={lang} content={fractalContent} />
}
