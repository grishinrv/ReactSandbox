import React, { useState  } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

export default function DishDetail (props) {
  const [selectedDish, setSelectedDish] = useState(null);

  let content = props.selectedDish != null ?
        <Card>
          <CardImg width="100%" src={props.selectedDish.image} alt={props.selectedDish.name} />
          <CardBody>
            <CardTitle>{props.selectedDish.name}</CardTitle>
            <CardText>{props.selectedDish.description}</CardText>
          </CardBody>
        </Card>
    : <div></div>;

  return (
    <div className="row">
      {content}
    </div>
  );
}