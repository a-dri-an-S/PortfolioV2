import './Projects.css'

export const BeerStoreDetails = () => {
    return (
        <div className="project-details">
            <p className="project-detail">
                Fully functioning e-commerce website with User login and Order history<br/><br/>
                Stripe checkout in place for easy user checkout flow.<br/><br/>
                Ability to add, update and delete items in the store, dependent on user permissions.<br/><br/>
                UI designed with Semantic-UI for seamless, responsive view across all screen sizes.
            </p>
        </div>
    )
}

export const FingerDrumsDetails = () => {
    return (
        <div className="project-details">
            <p className="project-detail">8 pad digital drums that can be played with keyboard input</p>
            <p className="project-detail">Made with Tone.js to add musical ability to playback audio clips</p>
        </div>
    )
}

export const PokemonDetails = () => {
    return (
        <div className="project-details">
            <p className="project-detail">Pokemon guessing game made with Poke API</p>
            <p className="project-detail">Two difficulty levels with different visual filters</p>
            <p className="project-detail">Confetti sprinkles when the user wins the game!</p>
        </div>
    )
}