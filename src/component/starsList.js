import { useState, useContext } from "react";
import { Form } from "react-bootstrap";

const StarsList = (props) => {
  const [field, setField] = useState([]);

  return (
      <Form>
        {props.positions.map((pos) => {
          if (props.currentPage === parseInt(pos[1])) {
            if (pos[0].startsWith("K")) {
              return (
                <div className="mb-3">
                  <Form.Check
                    disabled
                    type="checkbox"
                    id={pos[0]}
                    label={pos[0]}
                  />
                </div>
              );
            }
            return (
              <div className="mb-3">
                <Form.Check type="checkbox" id={pos[0]} label={pos[0]} />
              </div>
            );
          }
        })}
      </Form>
  );
};

export default StarsList;