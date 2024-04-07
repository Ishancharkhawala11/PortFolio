// ExampleComponent.js

const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      const style = {
        top: Math.random() * 100 + '%', 
        left: Math.random() * 100 + '%',
      };
      stars.push(<div className="blinking-star" style={style} key={i} />);
    }
    return stars;
  };
  
  export { renderStars };
  