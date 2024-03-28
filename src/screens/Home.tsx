import { About } from "../component/About"
import { Youtubevideo } from "../component/Youtubevideo"
import { Sociallinks } from "../component/Sociallinks"
export const Home=()=>{
    return(
        <div>
           <About/>
           <Youtubevideo/>
           <Sociallinks/>
        </div>
    )
}