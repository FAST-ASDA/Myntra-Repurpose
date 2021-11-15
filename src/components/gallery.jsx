import { Image } from "./image";
import ReactPlayer from "react-player";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Product</h2>
          <p>
            Let's take a look at the Product Demo
          </p>
        </div>
        <div className='row' >
          <div style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}>
              <ReactPlayer
                url="video/mock.mp4"
                width="80%"
                height="65%"
                controls={true}
                playing={true}
              />

          </div>
        </div>
      </div>
    </div>
  )
}
