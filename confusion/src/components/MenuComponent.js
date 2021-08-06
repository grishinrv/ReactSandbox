import React, { useState  } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from "./DishDetailComponent";

export default function Menu (props) {
  const [selectedDish, setSelectedDish] = useState(null);

  function onDishSelect (dish){
    setSelectedDish(dish);
  }

  return(
    <div className="container">
      <div className="row">
          {props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={()=> onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            )
          })}
      </div>
      <DishDetail selectedDish={selectedDish} />
    </div>
  );
}
