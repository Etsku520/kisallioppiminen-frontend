import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { IconContext } from 'react-icons'

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div style={{ width: '33%' }}>
          Kisallioppiminen.fi tarjoaa ilmaisia ja avoimia materiaaleja
          matematiikan oppimisen ja opettamisen tueksi.
          <br />
          Materiaalit ovat erityisesti suunniteltu tukemaan tehostetun
          kisällioppimisen menetelmän käyttöä.
        </div>
        <div style={{ width: '33%' }}>
          {/* <img
            className="facebook-icon"
            src="https://seeklogo.com/images/F/facebook-logo-966BBFBC34-seeklogo.com.png"
            alt="fb-icon"
          /> */}

          <IconContext.Provider
            value={{
              color: 'blue',
              className: 'global-class-name'
            }}
          >
            <div>
              <FaFacebook size={40} />
            </div>
          </IconContext.Provider>

          <a
            className="fb_link"
            href="https://www.facebook.com/groups/899303056853769/"
          >
            Facebook-ryhmä
          </a>
        </div>
        <div style={{ width: '33%' }}>
          <p>
            <img src="/img/CC.png" alt="Creative Commons copyright" />
            <br />
            Sivuston materiaali on lisensoitu Creative Commons
            BY-NC-SA-lisenssillä ellei muuta mainita.
          </p>
          <p>
            Sivuston lähdekoodi löytyy
            <a className="link" href="https://github.com/kisallioppiminen">
              GitHubista
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}
