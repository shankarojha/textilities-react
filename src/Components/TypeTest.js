import React from 'react'
import './TypeTest.css'
import { useState, useEffect } from 'react'

export default function TypeTest(props) {

    let paragraphs = ["A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.",
    "If you do find this paragraph tool useful, please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates. This is especially true since there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future.",
    "They argue. While the argument seems to be different the truth is it's always the same. Yes, the topic may be different or the circumstances, but when all said and done, it all came back to the same thing. They both knew it, but neither has the courage or strength to address the underlying issue. So they continue to argue.",
    "Dave found joy in the daily routine of life. He awoke at the same time, ate the same breakfast and drove the same commute. He worked at a job that never seemed to change and he got home at 6 pm sharp every night. It was who he had been for the last ten years and he had no idea that was all about to change.",
    "Was it enough? That was the question he kept asking himself. Was being satisfied enough? He looked around him at everyone yearning to just be satisfied in their daily life and he had reached that goal. He knew that he was satisfied and he also knew it wasn't going to be enough.",
    "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.",
    "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
    "It had been a simple realization that had changed Debra's life perspective. It was really so simple that she was embarrassed that she had lived the previous five years with the way she measured her worth. Now that she saw what she had been doing, she could see how sad it was. That made her all the more relieved she had made the change. The number of hearts her Instagram posts received wasn't any longer the indication of her own self-worth.",
    "The words hadn't flowed from his fingers for the past few weeks. He never imagined he'd find himself with writer's block, but here he sat with a blank screen in front of him. That blank screen taunting him day after day had started to play with his mind. He didn't understand why he couldn't even type a single word, just one to begin the process and build from there. And yet, he already knew that the eight hours he was prepared to sit in front of his computer today would end with the screen remaining blank.",
    "Her mom had warned her. She had been warned time and again, but she had refused to believe her. She had done everything right and she knew she would be rewarded for doing so with the promotion. So when the promotion was given to her main rival, it not only stung, it threw her belief system into disarray. It was her first big lesson in life, but not the last."]


    const [text, setText] = useState("")
    const [paragraph, setParagraph] = useState(paragraphs[Math.floor(Math.random()*9)])
    const [seconds, setSeconds] = useState(60)
    const [score, setScore] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(()=>{
        const timer = 
        running && seconds > 0 && setInterval(()=>{
            setSeconds(seconds-1)
        }, 100)

        const compareTexts=()=>{
            const strArray1 = paragraph.split(' ')
            const textWoSpace = text.replace(/\s{2,}/g, ' ').trim() 
            const strArray2 = textWoSpace.split(' ')
            let s = 0
            for(let i=0; i<strArray1.length; i++){
                if (strArray1[i]===strArray2[i]){
                    (s+=1)
                }
            }
            setSeconds("Time Up")
            setScore(s)
        }

        seconds===0 && compareTexts()
        return ()=> clearInterval(timer)
    },[seconds, running])

    const textChangeHandler = (event) => {
        setText(event.target.value)
        if(text.length>0 && text.length<2){
            setRunning(true)
        }
    }

    const startTest = () =>{
        setRunning(true)
    }


    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <div className='row text-center'>
                    <div className='col-12'>
                        <h6>{paragraph}</h6>
                    </div>
                    <div className='col-12'>
                        <textarea
                            className="form-control"
                            id="textBox"
                            rows={3}
                            value={text}
                            onChange={textChangeHandler}
                            disabled={seconds==="Time Up"}
                        ></textarea>
                    </div>
                    <div className='col-12 d-flex justify-content-center align-items-center mt-5'>
                        {!running && <button style={{border:"2px solid red", borderRadius:"50%", height:"20vw", width:"20vw", fontSize:"3vw"}} className="btn btn-primary d-flex justify-content-center align-items-center" onClick={startTest}>START</button>}
                        {running && <div style={{border:"10px solid green", borderRadius:"50%", height:"20vw", width:"20vw", fontSize:"3vw"}} className="d-flex justify-content-center align-items-center"> 
                            <div>{seconds}</div>
                        </div>}
                    </div>
                    <div className='col-12 d-flex justify-content-center align-items-center mt-5'>  
                        <div style={{border:"15px solid blue", borderRadius:"5%", height:"20vw", width:"20vw",fontSize:"3vw"}} className="d-flex justify-content-center align-items-center">
                            <div>{score}WPM</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
