import styled from 'styled-components'
import iconCart from '/images/icon-cart.svg'
import theme from '../../components/Theme'

const ProductCard = styled.article`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
  font-family: ${theme.font_montserrat};
  font-size: .875rem;
  font-weight: 500;
  color: ${theme.dark_grayish_blue};
  background-color: ${theme.white};
  border-radius: 12px;
  overflow: hidden;

  & picture {
    width: 100%;
    height: 100%;
    overflow: hidden;
    aspect-ratio: 343/240;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      aspect-ratio: 343/240;
    }
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 1.5rem;
  }

  @media (width >= 40rem) {
    flex-direction: row;
    max-width: 40rem;
    max-height: 28.125rem;

    & picture,
    & div {
      width: 50%;
    }

    & picture {
      aspect-ratio: 2/3;
    }

    & div {
      padding: 2rem;
    }
  }
`

const Title = styled.h1`
  font-family: ${theme.font_fraunces};
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.very_dark_blue};
  text-wrap: balance;
`

const Subtitle = styled.p`
  text-transform: uppercase;
  letter-spacing: .25rem;
`

const Paragraph = styled.p`
  line-height: 1.5;
`

const Price = styled.p`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  & .now {
    font-family: ${theme.font_fraunces};
    font-size: 2rem;
    font-weight: 700;
    color: ${theme.dark_cyan};
  }

  & .before {
    text-decoration: line-through;
  }

  @media (width >= 40rem) {
    margin-block: .5rem;
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  width: 100%;
  padding: 1rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  color: ${theme.white};
  background-color: ${theme.dark_cyan};
  border-radius: .375rem;
  border: none;
  cursor: pointer;
  transition: background-color .3s ease-in-out;

  &:hover {
    background-color: #1a4031;
  }

  & img {
    user-select: none;
    pointer-events: none;
  }
`

const Card = ({ children }) => {
  return (
    <ProductCard>
      <picture>
        <source srcSet="/images/image-product-desktop.jpg" media="(min-width: 40rem)" />
        <img src="/images/image-product-mobile.jpg" alt="Perfume - Gabrielle Essence Eau De Parfum" />
      </picture>
      <div>
        <Subtitle>Perfume</Subtitle>
        <Title>Gabrielle Essence Eau De Parfum</Title>
        <Paragraph>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</Paragraph>
        <Price>
          <span className="now">$149.99</span>
          <span className="before">$169.99</span>
        </Price>
        <Button>
          <img src={iconCart} alt="Icon Cart" aria-hidden="true" />
          Add to Cart
        </Button>
      </div>
    </ProductCard>
  )
}

export default Card