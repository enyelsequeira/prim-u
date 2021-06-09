import { Hero } from './hero.styles.js'
import { GlobalTitle } from '../global-components'

function HeroComponent() {
    return (
        <Hero>
            <GlobalTitle fontSize='50px' lineHeight='59px' width='460px' color='white'>
                REINVENTING BEAUTY ON DEMAND
            </GlobalTitle>
        </Hero>
    )
}

export default HeroComponent