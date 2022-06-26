import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import layer from '../public/images/layer_paralax.png'
import moon from '../public/images/moon_paralax.png'
import rocket from '../public/images/rocket.png'

export const Parallax = () => {
  return (
  <MouseParallaxContainer
    className="parallax"
    containerStyles={{
      display: "flex",
    }}
    resetOnLeave
  >
  < MouseParallaxChild
    factorX="{0.19}"
    factorY="{0.109}"
    updateStyles={{
      zIndex:"1000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "auto",
      height: "100%",
    }}
    >
      < img src={rocket.src}/>
    </ MouseParallaxChild >

    <MouseParallaxChild
      factorX="{0.57}"
      factorY="{0.77}"
      updateStyles={{
        position: "absolute",
        zIndex:"500",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "auto",
        height: "100%",
      }}
    >
      <img src={moon.src}/>
    </ MouseParallaxChild >

    <MouseParallaxChild
      factorX="{0.43}"
      factorY="{0.4}"
      updateStyles={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "auto",
        height: "100%",
        zIndex:"100",
      }}
    >
      <img src={layer.src}/>
    </ MouseParallaxChild >
  </MouseParallaxContainer>
  )
}

export default Parallax
