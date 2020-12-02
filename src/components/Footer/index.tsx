import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import partnersMathwallet from '../../assets/images/partners-mathwallet.png'
import partnersBitkeep from '../../assets/images/partners-bitkeep.png'
import partnersSafepal from '../../assets/images/partners-safepal.png'
import partnersTrustwallet from '../../assets/images/partners-trustwallet.png'
import partnersTokenpocket from '../../assets/images/partners-tokenpocket.png'
import partnersBancor from '../../assets/images/partners-bancor.png'
import partnersAave from '../../assets/images/partners-aave.png'
import partnersYfii from '../../assets/images/partners-yfii.png'

import partners499block from '../../assets/images/partners-499block.png'
import partnersBitribe from '../../assets/images/partners-bitribe.png'
import partnersRoark from '../../assets/images/partners-roark.png'
import partnersMarsfinance from '../../assets/images/partners-marsfinance.png'
import partnersV from '../../assets/images/partners-v.png'
import partners4chan from '../../assets/images/partners-4chan.png'
import partnersDeepchain from '../../assets/images/partners-deepchain.png'
import partnersJfi from '../../assets/images/partners-jfi.png'
import Nav from './components/Nav'

const partnersList = [
  partnersMathwallet,
  partnersBitkeep,
  partnersSafepal,
  partnersTrustwallet,
  partnersTokenpocket,
  partnersBancor,
  partnersAave,
  partnersYfii,
  partners499block,
  partnersBitribe,
  partnersRoark,
  partnersMarsfinance,
  partnersV,
  partners4chan,
  partnersDeepchain,
  partnersJfi
]

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <StyledFooter>
      <StyledFooterInner>
        <StyledFooterItem style={{ alignItems: 'flex-start', marginBottom: 20 }}>
          <StyledFooterItemTitle>{t('partners')}:</StyledFooterItemTitle>
          <StyledFooterItemContennt>
            <StyledFooterItemContenntGrid>
              {partnersList.map((i, idx) => (
                <StyledFooterItemPartner key={idx}>
                  <img src={i} alt="partners" />
                </StyledFooterItemPartner>
              ))}
            </StyledFooterItemContenntGrid>
          </StyledFooterItemContennt>
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledFooterItemTitle>{t('medias')}:</StyledFooterItemTitle>
          <StyledFooterItemContennt>
            <Nav />
          </StyledFooterItemContennt>
        </StyledFooterItem>
      </StyledFooterInner>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  background: #12161c;
  box-shadow: 0px -3px 11px 0px rgba(0, 0, 0, 0.38);
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding-bottom: 40px;
  `}
`
const StyledFooterInner = styled.div`
  /* align-items: center; */
  /* display: flex; */
  /* justify-content: center; */
  max-width: 1200px;
  width: 100%;
  padding: 34px 15px 34px;
  box-sizing: border-box;
`

const StyledFooterItem = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`
const StyledFooterItemTitle = styled.span`
  font-size: 21px;
  font-weight: 500;
  color: #f6c92a;
  line-height: 24px;
  min-width: 100px;
`
const StyledFooterItemContennt = styled.section`
  flex: 1;
  flex-wrap: wrap;
  display: flex;
`
const StyledFooterItemContenntGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 10px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 940px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 740px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const StyledFooterItemPartner = styled.section`
  min-width: 120px;
  height: 32px;
  @media (max-width: 1200px) {
    height: 36px;
  }
  @media (max-width: 940px) {
    height: 40px;
  }
  @media (max-width: 740px) {
    height: 36px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default Footer
