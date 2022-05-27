import React from "react";
function Footer(){
  var dates=new Date();
  var time=dates.getFullYear();
  return <footer>
    <p>
      Copyright ⓒ {time}
      </p></footer>
}
export default Footer; 