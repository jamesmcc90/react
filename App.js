import React, { useState, useReducer, useRef } from 'react';
import logo from './logo.svg';
import image from './newyork1.jpg'
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

// eslint-disable-next-line
function App() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">My Popover</Popover.Title>
            <Popover.Content>
               This is a picture of New York City.
        </Popover.Content>
        </Popover>
    );

    return (
        <div className="App" >

            <header className="App-header" style={{ backgroundColor: "#70a7ff" }}>
                <body>
                    <h2 style={{ float: "center" }}>Welcome to some (very basic) React testing!</h2>
                    <p>Hover over the image below to see a popover created using <a href="https://react-bootstrap.github.io/components/overlays/#popovers" target="_blank">React Bootstrap</a>.</p>
                    <img src={logo} style={{ float: "right" }} className="App-logo" alt="logo" />

                    <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
                         <img src={image} ref={target} onClick={() => setShow(!show)} className="newYorkImage" style={{ width: 600, height: 400 }} alt="New York City"/>
                    </OverlayTrigger>
                    <p>
                        This is a new React app - pretty cool!
                    </p>

                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" style={{ paddingBottom: 30 }}>James McConnell</a>
                </body>
            </header>


            <div style={{ float: "center" }}>
                <h1>Test</h1>
                <h5>Uses React Bootstrap. Validation courtesy of <a href="https://codesandbox.io/s/kw7z2q2n15?file=/src/index.js:180-185" target="_blank">bluebill1049</a> and <a href="https://react-hook-form.com/get-started" target="_blank">React Hook Form</a><a href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/basicValidation.tsx" target="_blank"></a></h5>

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <Form action="mailto:james.mcc90@gmail.com" method="post" onSubmit={handleSubmit(onSubmit)} style={{ paddingBottom: 30 }}>
                                <Form.Group controlId="formBasicEmail">
                                    <div class="col">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter your email" ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, })} />
                                        {errors.email && <p style={{ color: "red" }}>Valid email address required!</p>}</div>

                                    <div class="col"> <Form.Text className="text-muted">
                                        We'll not share your email.
                            </Form.Text>
                                    </div>
                                    <div class="col">
                                        <Button variant="primary" type="submit" size="sm">Submit</Button>
                                    </div>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default App;