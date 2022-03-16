import Slide from '../Slider/Slides/Slide';
import { BeerStoreInfo, FingerDrumsInfo, PokemonInfo } from './projectDetails';

import BeerStore from '../../assets/images/BeerStore.png'
import FingerDrums from '../../assets/images/FingerDrums.png'
import Pokemon from '../../assets/images/Pokemon.png'

import './projects.css';

export const projects = [
    <Slide 
        title="Beer Store" 
        img={BeerStore}
        info={<BeerStoreInfo />}
    />,
    <Slide 
        title="Finger Drums" 
        img={FingerDrums}
        info={<FingerDrumsInfo />}
    />,
    <Slide 
        title="Guess that Pokémon!" 
        img={Pokemon}
        info={<PokemonInfo />}
    />,

];
