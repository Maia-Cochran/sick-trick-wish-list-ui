import Trick from './SingleTrick'

const TrickList = ({tricks}) => {
    const trickList = 
    tricks.map(trick => {
        return (
            <Trick
            stance={trick.stance}
            name={trick.name}
            obstacle={trick.obstacle}
            tutorial={trick.tutorial}
            trick={trick.id}
            key={trick.id}
            />
        )
    })
    return (
        <div className='Tricks'>
            {trickList}
        </div>
    )
}

export default TrickList;