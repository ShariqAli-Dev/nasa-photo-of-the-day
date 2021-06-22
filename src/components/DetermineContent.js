import React, { useState } from "react";

debugger
export default function DetermineContent() {
  const [displayImage, setDisplayImage] = useState(false);
  

  const hideImage = () => setDisplayImage(false);
  const showImage = () => setDisplayImage(true);

  function ShowContent(props) {
    const { hideImage } = props;
    return (
      <div>
        <img src={'https://i1.sndcdn.com/avatars-000560768412-fgpz9h-t500x500.jpg'} alt={'dailyImage'} />
        <button onClick={hideImage}>Hide Image</button>
      </div>
    );
  }

  function HideContent(props) {
    const { showImage } = props;
    return (
      <div>
        <button onClick={showImage}>Show Image</button>
      </div>
    );
  }

  if (displayImage) {
    return <ShowContent hideImage={hideImage} />
  } else {
    return <HideContent showImage={showImage} />
  }
}