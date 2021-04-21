import React, { useState, useCallback, useEffect } from 'react';
let xorshift = require('xorshift');
import {makeDeck} from '../utils/cards';
import ScroreCard from './ScoreCard';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styles/ShuffleCardDeck.css';

const ShuffleCardDeck = () => {
       
    const [number, setNumber] = useState('');
    const [deck, setDeck] = useState([]);
    const [totalTime, setTotalTime] = useState();
    const [algorithmEvaluation, setAlgorithmEvaluation] = useState();
    const [quality, setQuality] = useState('press start test');
    const [error, setError] = useState(false);
    const [method, setMethod] = useState('method');
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [timeShuffle, setTimeSuffle] = useState({
        start: 'start time',
        end: 'end time'
    });
    
      const handleCloseOk = useCallback(() => {
    
        setOpen(false);
      }, []);

      const handleClose = useCallback(() => {
        setTimeSuffle({
            start: 'start time',
            end: 'end time'
        });
        setTotalTime();
        setQuality('press start test');
        setMethod('method');
        setAlgorithmEvaluation();
        setOpen(false);
        setNumber('')
      }, []);
    
    const changeNumbers = useCallback((event) => {
        setError(false)
        setNumber(event.target.value)
        if(event.target.value > 2000){
            setOpen(true);
        }
    }, [number, error]);
   
    const checkPerformance = useCallback((a) => {
        let next = 0;
        let total = 0;
        let suitRankCounter = 0;
        for( let i = 0; i < a.length -1; i++ ){
            total += 1;
            next += a[i].rank + 1 == (a[i+1].rank);
            if(a[i].suit + 1 == (a[i+1].suit)){
                suitRankCounter++;
            }else{
                suitRankCounter=0;
            }
            if(suitRankCounter === 3){
                next++;
                suitRankCounter = 0;
            }
        }
       
        setAlgorithmEvaluation(next);
        if(next <= 1){
           return 'good shuffle'          
        } else if (next === 2){
            return 'avarage shuffle'
        }else if (next >= 3){
            return 'bad shuffle'
        }
    }, [algorithmEvaluation]);
   
    useEffect(() => {
        let res = makeDeck();
        setDeck(res)
    }, []);
   
    const submitNumbersXorshift = useCallback((e) => {
        
        if(number == ''){
            setError(true)
        }else {
            const startСounting = new Date();
            const t0 = performance.now();
            setIsLoading(true);
            for (let i = 0; i < number; i++) {
                deck.sort(() => xorshift.random() - 0.5)
            };
            setIsLoading(false);
            const endСounting = new Date();
            const t1 = performance.now();
            setTimeSuffle({
                start: startСounting.toLocaleTimeString(),
                end: endСounting.toLocaleTimeString()
            });
            setTotalTime(Math.floor(t1 - t0));
            setMethod(e.target.value);
        }
       
    }, [number, deck, totalTime, algorithmEvaluation, quality, timeShuffle, isLoading]);

    const submitRandomJs = useCallback((e) => {
        if(number == ''){
            setError(true) 
        } else {
            const startСounting = new Date();
            const t0 = performance.now();
            for (let i = 0; i < number; i++) {
                deck.sort(() => Math.random() - 0.5);
            };
            const endСounting = new Date();
            const t1 = performance.now();
            setTimeSuffle({
                start: startСounting.toLocaleTimeString(),
                end: endСounting.toLocaleTimeString()
            });
            setTotalTime(Math.floor(t1 - t0));
            setMethod(e.target.value);
        }
       
    }, [number, deck, totalTime, algorithmEvaluation, quality, timeShuffle])

    const submitTest = useCallback(() => {
        let responsePerfomance = checkPerformance(deck);
        setQuality(responsePerfomance);
    }, [number, deck, totalTime, algorithmEvaluation, quality, timeShuffle, ]);

    return (
        <div>
            <div className='container'>
                <form>
                    <input type='number' min='1' max='10000' onChange={changeNumbers} value={number}/>
                    <input type='button' onClick={submitNumbersXorshift} value='XORSHIFT'/>
                    <input type='button' onClick={submitRandomJs} value='RANDOM JS'/>
                    <input type='button' onClick={submitTest} value='START TEST'/>
                </form>
            </div>
            {error ? <h5 className='error'>Error! Cannot be empty</h5> : null}
            <div >
            <div>
                <ScroreCard method={method} quality={quality} algorithmEvaluation={algorithmEvaluation} totalTime={totalTime} timeShuffle={timeShuffle}/>
            </div>
            </div>
            <div className='loader'>
                {isLoading ? <CircularProgress /> : null }
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
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"WARNING"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            shuffling the deck {number} times may take longer.
                        </DialogContentText>
                    </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleCloseOk} color="primary" autoFocus>
                                Ok
                            </Button>
                        </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default ShuffleCardDeck;
