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
    />,
    <Slide 
        title="Finger Drums" 
        img={FingerDrums}
        tech={<FingerDrumsTech />}
        details={<FingerDrumsDetails />}
    />,
    <Slide 
        title="Guess that Pokémon!" 
        img={Pokemon}
        tech={<PokemonTech />}
        details={<PokemonDetails />}
    />,

];
