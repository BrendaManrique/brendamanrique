import { CaseStudy, type CaseStudyLang } from './articles/case-study'
import { portfolioAgentContent } from './articles/portfolio-agent-i18n'

export default function PortfolioAgent({ lang = 'en' }: { lang?: CaseStudyLang }) {
  return <CaseStudy articleId="portfolio-agent" lang={lang} content={portfolioAgentContent} />
}
