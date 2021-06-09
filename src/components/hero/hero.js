import { Hero } from './hero.styles.js'
import { GlobalTitle } from '../global-components'

function HeroComponent() {
    return (
        <Hero>
            <GlobalTitle
                fontSize={['34px','50px']}
                lineHeight={['40px','59px']}
                width={['350px', '460px']}
                color='white'
                textAlign={['center', 'center', 'left']}
                m={['auto', 'auto', '0px']}
                mt={['218px', '205px', '0px']}>
                REINVENTING BEAUTY ON DEMAND
            </GlobalTitle>
        </Hero>
    )
}

export default HeroComponent