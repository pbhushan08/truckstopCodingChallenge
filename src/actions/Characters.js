import { FETCH_CHARACTERS } from './types';
import datas from '../constant/characters.json';



export function fetchCharacters() {
 console.log('ACTION',datas.characters)
    // let names = datas.characters.map(data => data.name);
    // let url = datas.characters.map(data => data.url);
    // let id = url.map((u) => u.slice(0,-1).split('/people/')[1]);
     
    let augData = datas.characters.map(data => {

        return{
            name : data.name,
            url : data.url,
            id : data.url.slice(0,-1).split('/people/')[1]
        }
    })
    
    console.log('augData',augData);

    return{
        type: FETCH_CHARACTERS,
        augData
    }
    
};

