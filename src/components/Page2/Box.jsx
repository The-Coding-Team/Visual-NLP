import React from "react";
import { Card } from "react-bootstrap";
import Reference from "../../assets/images/ref-img.jpeg";

const Box = () => {
  return (
    <>
      <div
        className="image-display--container d-flex justify-content-between "
        style={{ border: "1px solid gray" }}
      >
        <img src={Reference} alt="Error" />
        <div className="text-main--container">
          <Card className="m-2 ">
            <div>
              <span className="text-title title-1 bg-danger">Page 1</span>
            </div>
            <Card className="block-card m-3">
              <div>
                <span className="text-title title-2 bg-primary">Block 1</span>
              </div>
              <Card className="paragraph-card m-2">
                <div>
                  <span className="text-title title-3 bg-success">
                    Paragraph 1
                  </span>
                </div>
                <Card.Body>C a m l i n P a g e</Card.Body>
              </Card>
            </Card>
            <Card className="block-card m-3">
              <div>
                <span className="text-title title-2 bg-primary">Block 1</span>
              </div>
              <Card className="paragraph-card m-2">
                <div>
                  <span className="text-title title-3 bg-success">
                    Paragraph 1
                  </span>
                </div>
                <Card.Body>
                  D a t a W a r e h o u s i n g a n d m i n i n g
                </Card.Body>
              </Card>
            </Card>
            <Card className="block-card m-2">
              <div>
                <span className="text-title title-2 bg-primary">Block 1</span>
              </div>
              <Card className="paragraph-card m-2">
                <div>
                  <span className="text-title title-3 bg-success">
                    Paragraph 1
                  </span>
                </div>
                <Card.Body>
                  E x s p e r i m e n t N o 3 A i m : I m p l e m e n t a t i o
                  n o f O l a p o p e r a t i o n s : s l i c e , D i c e , R o
                  l l u p , D r i l l d o w n a n d p i v a t b a s e o n e x p
                  e r i m e n t i c a s e s t u d y
                </Card.Body>
              </Card>
            </Card>
            <Card className="block-card m-2">
              <div>
                <span className="text-title title-2 bg-primary">Block 1</span>
              </div>
              <Card className="paragraph-card m-2">
                <div>
                  <span className="text-title title-3 bg-success">
                    Paragraph 1
                  </span>
                </div>
                <Card.Body>
                  T h e o r y * O L A P ( o n - l i n e A n a l y t i c a l p r
                  o c e s s i n g ) i s a n o n l i n e a n a l y s i s a n d
                </Card.Body>
              </Card>
            </Card>
            <Card className="block-card m-2">
              <div>
                <span className="text-title title-2 bg-primary">Block 1</span>
              </div>
              <Card className="paragraph-card m-2">
                <div>
                  <span className="text-title title-3 bg-success">
                    Paragraph 1
                  </span>
                </div>
                <Card.Body>
                  d a t a H e i s a n o n l i n e d a t a b a s e q u e r y M a
                  n a g e m e n t S y s t e m P O L A P d a t a b a s e s a r e
                  d i v i d e d i n t o o n e o r m o r e c u b e s L O L A P c
                  u l e s i s d a t a s t r u c t u r e o p t i m i z e d f o r
                  q u e q u i c k
                </Card.Body>
              </Card>
            </Card>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Box;
