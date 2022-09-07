import Trick from './SingleTrick'
import './TrickList.css'

const TrickList = ({tricks}) => {
    const trickCards = 
    tricks.map(trick => {
        return (
            <Trick
            id={trick.id}
            stance={trick.stance}
            name={trick.name}
            obstacle={trick.obstacle}
            tutorial={trick.tutorial}
            key={trick.id}
            />
        )
    })
    return (
        <div className='tricks'>
            { trickCards }
        </div>
    )
}

export default TrickList;