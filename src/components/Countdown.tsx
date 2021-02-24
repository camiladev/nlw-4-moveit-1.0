import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/Countdown.module.css'


let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const {startNewChallenge } = useContext(ChallengesContext);
    const [time, setTime] = useState(0.1 * 60); //retorna o valor em segundos de 25 minutos
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60); //retorna valor arredondado
    const seconds = time % 60; //retorna o resto da divisao, o que vem depois da virgula

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


    function startCountdown(){
        setIsActive(true); 
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }else if(isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    return(
        <div>
            <div className={style.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
                
            </div>
            
            { hasFinished ? (
                <button 
                    disabled
                    className={style.countdownButton}
                    
                    >
                    Ciclo Encerrado
            </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                        type="button" 
                        className={`${style.countdownButton} ${style.countdownButtonActive}`}
                        onClick={resetCountdown}
                        >
                        Abandonar ciclo
                    </button>

                    ) : (
                        <button 
                            type="button" 
                            className={style.countdownButton}
                            onClick={startCountdown}
                            >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}

        </div>
    )
}