import { CaseStudy, type CaseStudyLang } from './articles/case-study'
import { earlyProjectsContent } from './articles/early-projects-i18n'

export default function EarlyProjects({ lang = 'en' }: { lang?: CaseStudyLang }) {
  return <CaseStudy articleId="early-projects" lang={lang} content={earlyProjectsContent} />
}
