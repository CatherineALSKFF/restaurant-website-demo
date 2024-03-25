import React, { useEffect, useRef, useState } from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const specialMenuRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, {
      threshold: 0.1, // Adjust based on needs
      rootMargin: '0px 0px -100px 0px', // Adjust based on needs
    });

    if (specialMenuRef.current) {
      observer.observe(specialMenuRef.current);
    }

    return () => {
      if (specialMenuRef.current) {
        observer.unobserve(specialMenuRef.current);
      }
    };
  }, []);

  return (
    <div className={`app__specialMenu flex__center section__padding ${isVisible ? 'animate' : ''}`} id="menu" ref={specialMenuRef}>
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu img" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">View More</button>
      </div>
    </div>
  );
};

export default SpecialMenu;

// import React from 'react';

// import { SubHeading, MenuItem } from '../../components';
// import { data, images } from '../../constants';
// import './SpecialMenu.css';

// const SpecialMenu = () => (
//   <div className="app__specialMenu flex__center section__padding" id="menu">
//     <div className="app__specialMenu-title">
//       <SubHeading title="Menu that fits your palatte" />
//       <h1 className="headtext__cormorant">Today&apos;s Special</h1>
//     </div>

//     <div className="app__specialMenu-menu">
//       <div className="app__specialMenu-menu_wine  flex__center">
//         <p className="app__specialMenu-menu_heading">Wine & Beer</p>
//         <div className="app__specialMenu_menu_items">
//           {data.wines.map((wine, index) => (
//             <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
//           ))}
//         </div>
//       </div>

//       <div className="app__specialMenu-menu_img">
//         <img src={images.menu} alt="menu__img" />
//       </div>

//       <div className="app__specialMenu-menu_cocktails  flex__center">
//         <p className="app__specialMenu-menu_heading">Cocktails</p>
//         <div className="app__specialMenu_menu_items">
//           {data.cocktails.map((cocktail, index) => (
//             <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
//           ))}
//         </div>
//       </div>
//     </div>

//     <div style={{ marginTop: 15 }}>
//       <button type="button" className="custom__button">View More</button>
//     </div>
//   </div>
// );

// export default SpecialMenu;
