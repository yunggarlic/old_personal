import React, {useEffect} from 'react'
import '../styles/home.less'

export default function Home(props) {
  const {isFocus, onMobile, isFirstTime} = props

  useEffect(() => {}, [isFirstTime])

  return (
    // Must fade in and out on is focus
    <div className={`home ${isFocus === 'home' ? 'active' : ''}`}>
      <h1 className="text-rainbow">
        {isFirstTime ? 'Hello.' : 'Welcome Back'}
      </h1>
      <div className={`buttonContainer ${isFirstTime ? '' : 'active'}`}>
        <button>
          <a href="http://www.linkedin.com/in/timferrari">connect with me!</a>
        </button>
      </div>
      {onMobile ? (
        <p>
          Quite honestly this will probably crash on your phone eventually.
          <br />
          But all info is still available.
        </p>
      ) : (
        <></>
      )}
    </div>
  )
}
