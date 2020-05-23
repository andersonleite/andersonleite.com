import styled from "styled-components";
import theme from "./colors";

const LoadingStyle = styled.nav`
  .centered{
    width:100%;
    height:100%;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background: ${theme.grey_dark};
    z-index: 2;
    animation: bg 3s ease-out forwards;
  }
  .blob-1,.blob-2{
    width:70px;
    height:70px;
    position:absolute;
    background: ${theme.white};
    border-radius:50%;
    top:50%;left:50%;
    transform:translate(-50%,-50%);
  }
 
  .blob-1{
    left:20%;
    animation:osc-l 2.5s ease infinite;
  }
  .blob-2{
    left:80%;
    animation:osc-r 2.5s ease infinite;
    background: ${theme.green};
  }
  @keyframes osc-l{
    0%{left:20%;}
    50%{left:50%;}
    100%{left:20%;}
  }
  @keyframes osc-r{
    0%{left:80%;}
    50%{left:50%;}
    100%{left:80%;}
  }
  @keyframes bg{
    //0%   {opacity: 1}
    //80%  {opacity: 1}
    //99%  {z-index: 2}
    //100% {opacity: 0; display: none; z-index: -1}
  }
`

export default LoadingStyle