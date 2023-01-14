import logo from './logo.svg';
import './App.css';
import {figma, facebook, vercel} from './img/index'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='navbar'>
          <div>
            <h3><b>Jobless</b></h3>
          </div>

          <div className='middle-nav'>
            <p><b>Home</b></p>
            <p>Discover</p>
            <p>Post a Job</p>
            <p>Contact Us</p>
          </div>

          <div >
            <button>
              Sign Up
            </button>
          </div>
        </div>

        <div className='hero'>
          <div className='main-text'>
          <h1>
            Get Connected to the Best Remote Jobs in Your Field
          </h1>

          <p>
            Discover a wide range of remote opportunities on our platform and take control of your career
          </p>
          </div>

          <div className='main-btn'>
            <button>Explore Remote Jobs</button>
            <p><b>How it works?</b></p>
          </div>
        </div>

        <div className='cards'>
          <p><b>Featured Jobs</b></p>

          <div className='inner-cards'>
            <div className='blue-cards'>
              <div className='cards-img'>
                <img src={figma}/>
                <div>
                <p>Front-End Developer</p>
                <p>Figma</p>
                </div>
              </div>
              <div className='cards-content'>
                <p>We are looking for an experienced front-end developer to our team</p>
              </div>

              <div className='cards-pricing'>
                <button>Rust</button>
                <p>$70.000-$90.000</p>
              </div>
            </div>

            <div className='other-cards'>
              <div className='other-img'>
                <img src={facebook}/>
                <div>
                <p>Data Scientist</p>
                <p>Facebook</p>
                </div>
              </div>
              <div className='other-content'>
                <p>We are seeking a data scientist to join out team.</p>
              </div>

              <div className='other-pricing'>
                <button>Python</button>
                <p>$100.000-$130.000</p>
              </div>
            </div>

            <div className='other-cards'>
              <div className='other-img'>
                <img src={vercel}/>
                <div>
                <p>Technical Writer</p>
                <p>Vercel</p>
                </div>
              </div>
              <div className='other-content'>
                <p>We are seeking a technical writer to join our team</p>
              </div>

              <div className='other-pricing'>
                <button>Documentation</button>
                <p>$60.000-$80.000</p>
              </div>
            </div>


            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
