import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'
import { useLanguage } from 'hooks/use-language'
import { useRouter } from 'next/router'

const Footer = () => {
  const { language } = useLanguage()
  const router = useRouter()

  return (
    <S.Wrapper>
      <Logo />
      <S.Content>
        <S.Column>
          <Heading size="small" lineBottom lineColor="secondary" marginBottom>
            {language.components.Footer.contactUs}
          </Heading>

          <a href="mailto:sac@l30.com">sac@l30.com</a>
        </S.Column>

        <S.Column aria-labelledby="social-media">
          <Heading lineColor="secondary" lineBottom size="small" marginBottom>
            {language.components.Footer.socialMedia}
          </Heading>

          <nav id="social-media">
            <a
              href="https://www.instagram.com/l30"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/l30"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/l30"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/l30"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column aria-labelledby="resources">
          <Heading lineColor="secondary" lineBottom size="small" marginBottom>
            {language.components.Footer.links}
          </Heading>

          <nav id="resources">
            <div
              onClick={() =>
                router.push({
                  pathname: '/tracking',
                  query: { confirm: true }
                })
              }
            >
              {language.components.Footer.linkTracking}
            </div>
            <div
              onClick={() =>
                router.push({
                  pathname: '/about',
                  query: { confirm: true }
                })
              }
            >
              {language.components.Footer.linkAboutUs}
            </div>
            <div
              onClick={() =>
                router.push({
                  pathname: '/faq',
                  query: { confirm: true }
                })
              }
            >
              {language.components.Footer.linkFrequentlyAskedQuestions}
            </div>
            <div
              onClick={() =>
                router.push({
                  pathname: '/suggestions',
                  query: { confirm: true }
                })
              }
            >
              {language.components.Footer.linkSuggestions}
            </div>
          </nav>
        </S.Column>

        <S.Column aria-label="contact">
          <Heading lineColor="secondary" lineBottom size="small" marginBottom>
            {language.components.Footer.services}
          </Heading>
          <span>{language.components.Footer.serviceTracking}</span>
        </S.Column>
      </S.Content>
      <S.Copyright>Copyright © 2024 L30 LTDA.</S.Copyright>
    </S.Wrapper>
  )
}
export default Footer
