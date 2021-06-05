function Event(imageSrc) {
  return (
  <div className="Event">
      <div className="image"><img src={}></img></div>
      <div className="mainDescription">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="subDescription">
        <p className="member">{}</p>
        <p className="">{}</p>
      </div>
  </div>
  );
}

export { Event };
