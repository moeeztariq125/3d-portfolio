import {useState, useEffect} from 'react'
import { Line } from '../../components'
import './Header.scss'
import {app_header_skills} from '../../constants'
import {AiOutlineArrowDown} from 'react-icons/ai'
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Header = () => {
  const [word, setWord] = useState(app_header_skills[0])
  const [intervalTime, setIntervalTime] = useState(1000)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [counter, setCounter] = useState(0)
  const [split, setSplit] = useState(0)
  useEffect(()=>{
    let interval = setInterval(randomStringGenerator,intervalTime)
    function randomStringGenerator(){
      clearInterval(interval)
      if(counter==15){
        if (split==app_header_skills[currentIndex].length){
          setCounter(0)
          setIntervalTime(3000)
          setSplit(0)
          setCurrentIndex((currentIndex+1)%app_header_skills.length)
          setWord(app_header_skills[currentIndex])
          return
        }
      setSplit(split+1)
      setWord(app_header_skills[currentIndex].substring(0,split)+word.substring(split))
      setIntervalTime(70)
      return
      }
      setCounter(counter+1)
      setIntervalTime(70)
      setWord(generateRandomString())
      return
    }
    return(()=>{
      clearInterval(interval)
    })
  })
  function generateRandomString(){
    let word = ''
    for (let i = 0; i < getRandomNumber(); i++){
      word = word+generateRandomCharacter()
    }
    return word
  }
  function generateRandomCharacter() {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()';
    const romanNumerals = 'IVXLCDM';
    const greekLetters = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω';
    const punctuation = '.,;:!?-';
    
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters + romanNumerals + greekLetters + punctuation;
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    
    return allCharacters[randomIndex];
  }

  function getRandomNumber() {
    const min = 5
    const max = 10
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div className='app__header HOME'>
      <Line start={true}/>
      <div className='circle'/>
      <div className='app__header__content'>
        <h2>&lt;Start /&gt;</h2>
        <h1>Hi, I'm <span className='title'>Moeez Tariq</span></h1>
        <h1 className='before_skills'>I <span className='italic'>design</span> and <span className='bold'>develop</span> {word} </h1>
        <div className='subtitle'>
          <h2>Let Me Show You...</h2>
          <AiOutlineArrowDown className='arrow'/>
        </div>
      </div>
      <div className='image-cover'>
      <Tilt options={defaultOptions}>
      <img src='/images/avatar-bg-removed.png'/>
      </Tilt>
      </div>
    </div>
  )
}

export default Header