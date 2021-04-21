import React, { useState, useCallback, useEffect } from 'react';
let xorshift = require('xorshift');
import {makeDeck} from '../utils/cards';
import ScroreCard from './ScoreCard';
import '../styles/ShuffleCardDeck.css'

const ShuffleCardDeck = () => {
       
    const [number, setNumber] = useState('');
    const [deck, setDeck] = useState([]);
    const [totalTime, setTotalTime] = useState();
    const [algorithmEvaluation, setAlgorithmEvaluation] = useState();
    const [quality, setQuality] = useState('');
    const [timeShuffle, setTimeSuffle] = useState({
        start: 'start time',
        end: 'end time'
    })
    
    const changeNumbers = useCallback((event) => {
        setNumber(event.target.value)
    }, [number]);
   
    const checkPerformance = (a) => {
        let next = 0;
        let total = 0;
        for( let i = 0; i < a.length -1; i++ ){
            total += 1;
            next += a[i].rank + 1 == (a[i+1].rank);
        }
        setAlgorithmEvaluation(next);
        if(next <= 1){
           return 'good shuffle'          
        } else if (next === 2){
            return 'avarage shuffle'
        }else if (next >= 3){
            return 'bad shuffle'
        }
    }
   
    useEffect(() => {
        let res = makeDeck();
        setDeck(res)
    }, []);
   
    const submitNumbers = useCallback(() => {
        const startСounting = new Date();
        const t0 = performance.now();
        for (let i = 0; i < number; i++) {
            deck.sort(() => xorshift.random() - 0.5)
        }
        const endСounting = new Date()
        setTimeSuffle({
            start: startСounting.toLocaleTimeString(),
            end: endСounting.toLocaleTimeString()
        })
        let responsePerfomance = checkPerformance(deck);
        const t1 = performance.now();
        setQuality(responsePerfomance);
        setTotalTime(Math.floor(t1 - t0))
        setNumber('')
       
    }, [number, deck, totalTime, algorithmEvaluation, quality, timeShuffle]);

    return (
        <div>
            <div className='container'>
                <form>
                    <input type='number' onChange={changeNumbers} value={number}/>
                    <input type='button' onClick={submitNumbers} value='XORSHIFT'/>
                </form>
            </div>
            <div >
            <div>
                <ScroreCard quality={quality} algorithmEvaluation={algorithmEvaluation} totalTime={totalTime} timeShuffle={timeShuffle}/>
            </div>
               
            </div>
            <div className='containerCards'>
                <ul className="list">
                {deck.map((card, index ) => {
                    return (
                        <li key={index} className="card ">
                            <span >{card.suit} {card.rank}</span>
                        </li>     
                    )
                })}
                </ul>
            </div>
        </div>
    )
}

export default ShuffleCardDeck;
