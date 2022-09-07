import Trick from './SingleTrick'

const TrickList = ({tricks}) => {
    // const { trickList } = tricks
    tricks.map(trick => {
        return (
            <Trick
            trick={trick.id}
            stance={trick.stance}
            name={trick.name}
            obstacle={trick.obstacle}
            tutorial={trick.tutorial}
            key={trick.id}
            />
        )
    })
    return (
        <div className='Tricks'>
            <Trick />
            <Trick />
            <Trick />
        </div>
    )
}

export default TrickList;