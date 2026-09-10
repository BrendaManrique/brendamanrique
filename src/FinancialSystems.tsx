import { CaseStudy, type CaseStudyLang } from './articles/case-study'
import { financialSystemsContent } from './articles/financial-systems-i18n'

export default function FinancialSystems({ lang = 'en' }: { lang?: CaseStudyLang }) {
  return <CaseStudy articleId="financial-systems" lang={lang} content={financialSystemsContent} />
}
