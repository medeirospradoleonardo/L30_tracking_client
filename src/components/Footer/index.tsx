import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'
import { useLanguage } from 'hooks/use-language'

const Footer = () => {
  const { language } = useLanguage()
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
            Links
          </Heading>

          <nav id="resources">
            <a href="http://localhost:3000/tracking">
              {language.components.Footer.linkTracking}
            </a>
            <a href="http://localhost:3000/about">
              {language.components.Footer.linkAboutUs}
            </a>
            <a href="http://localhost:3000/faq">
              {language.components.Footer.linkFrequentlyAskedQuestions}
            </a>
            <a href="http://localhost:3000/suggestions">
              {language.components.Footer.linkSuggestions}
            </a>
          </nav>
        </S.Column>

        <S.Column aria-label="contact">
          <Heading lineColor="secondary" lineBottom size="small" marginBottom>
            Location
          </Heading>
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem Ipsum</span>
          <span>Lorem, ipsum dolor.</span>
        </S.Column>
      </S.Content>
      <S.Copyright>Copyright © 2024 L30 LTDA.</S.Copyright>
    </S.Wrapper>
  )
}
export default Footer
