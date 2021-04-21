import React from 'react';
import '../styles/ScoreCard.css'

const ScroreCard = ({quality = '', algorithmEvaluation = null, totalTime = 0, timeShuffle = {}, method = ''}) => {
    return (
        <div className='tableQuality'>
            <h3>Quality and timing of shuffles</h3>        
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Shuffle start time</th>
                            <th>The end of the shuffle</th>
                            <th>Total shuffle time</th>
                            <th>Quality shuffles</th>
                            <th>Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{timeShuffle.start}</td>
                            <td>{timeShuffle.end}</td>
                            <td>{totalTime} ms</td>
                            <td>{quality} ({algorithmEvaluation})</td>
                            <td>{method}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ScroreCard;