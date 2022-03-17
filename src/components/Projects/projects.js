import Slide from '../Slider/Slide/Slide';
import { BeerStoreTech, FingerDrumsTech, PokemonTech } from './ProjectTech';
import { BeerStoreDetails, FingerDrumsDetails, PokemonDetails } from './ProjectDetails';

import BeerStore from '../../assets/images/BeerStore.png'
import FingerDrums from '../../assets/images/FingerDrums.png'
import Pokemon from '../../assets/images/Pokemon.png'

import './Projects.css'

export const projects = [
    <Slide 
        title="Beer Store" 
        img={BeerStore}
        tech={<BeerStoreTech />}
        details={<BeerStoreDetails />}
        repoUrl="https://github.com/a-dri-an-S/MERN-stack"
        liveUrl="https://fake-beerstore.vercel.app/"
    />,
    <Slide 
        title="Finger Drums" 
        img={FingerDrums}
        tech={<FingerDrumsTech />}
        details={<FingerDrumsDetails />}
        repoUrl="https://github.com/a-dri-an-S/finger-beats"
        liveUrl="https://finger-drums.netlify.app/"
    />,
    <Slide 
        title="Guess that Pokémon!" 
        img={Pokemon}
        tech={<PokemonTech />}
        details={<PokemonDetails />}
        repoUrl="https://github.com/a-dri-an-S/Guess-That-Pokemon-"
        liveUrl="https://guessthepokemon.netlify.app/"
    />,

];
