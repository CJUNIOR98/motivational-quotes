import { useState } from 'react';
import React from 'react';
import quotes from '../quotes.json'
import image from '../images/quotation.png'

const colors = [ 
"#06AED5", 
"#086788", 
"#DD1C1A", 
"#390099", 
"#FF0054", 
"#FF5400", 
"#F19C79", 
"#710627", 
"#DE0D92", 
"#320E3B", 
"#4C2A85", 
"#BCEDF6",
"#F7C7DB", 
"#C86FC9", 
"#003049", 
"#4C2A85"
];


const QuoteBox = () => {
     
    const random = Math.floor(Math.random() * quotes.length);
    const [index, setIndex] = useState(random);
 
    const changePhrase = () => {
    const phraseRandom = Math.floor(Math.random() * quotes.length);
        setIndex(phraseRandom);
    };

    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomColorIndex];
    //Qts ingnore
    document.body.style = `background: ${color}`;

    return (
        <div className='card'>
            <figure className="card_imgBox">
                <img src={image} className="card_img" style={{background: color}} />
            </figure>
            <div className="card_text">
                <q className="card_quote">{quotes[index].quote}</q>
                <cite className="card_author">&mdash; {quotes[index].author}</cite>
            </div>
            <div className="btnBox">
            <button className="btn" onClick={changePhrase} style={{background: color}}>
            Next phrase!
            </button>
            </div>
        </div>
        
    );
};

export default QuoteBox;