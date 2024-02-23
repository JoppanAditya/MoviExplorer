const MovieImage = ({ imageUrl, altText, nameClass }) => {
  return imageUrl !== `${import.meta.env.VITE_BASEIMGURL}/null` ? <img src={imageUrl} alt={altText} /> : <div className={nameClass}></div>;
};

const UndefinedImg = ({ imageUrl, altText }) => {
  return imageUrl !== `${import.meta.env.VITE_ORIIMGURL}/undefined` ? <img src={imageUrl} alt={altText} /> : <div className="Empty-image"></div>;
};

export { MovieImage, UndefinedImg };
