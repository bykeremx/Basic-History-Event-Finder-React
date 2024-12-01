import React, { useEffect, useState } from 'react'
import { Row, FormText, Button, FormGroup, Label, Input, Col } from 'reactstrap'
import { FaFaceSmile } from 'react-icons/fa6'
import axios from 'axios';
import Result from './Result'

function Home() {
    // Form data 
    const [inputDate, setInputDate] = useState("");
    // Data fetched from API
    const [data, setData] = useState("");

    const handleDate = (e) => {
        setInputDate(e.target.value);
    }

    const HandleApi = async (date) => {
        const url = `http://numbersapi.com/${date}/date`
        const request_ = await axios.get(url);
        setData(request_.data);
    }

    // Handle button click
    const handleClick = (inputDate) => {
        HandleApi(inputDate);
    }

    return (
        <>
            <Col md={6}>
                <Row>
                    <h1>Date</h1>
                    <small>Enter a date and let us tell you what happened on that day! <FaFaceSmile /> </small>
                </Row>
                <Row className='mt-3'>
                    <FormGroup className="position-relative">
                        <Label for="exampleEmail">
                            Please enter a date
                            <br />
                            <small className='text-danger'><b>Example: 12/4 (Month/Day)</b></small>
                        </Label>
                        <Input 
                            value={inputDate} 
                            onChange={(e) => handleDate(e)} 
                            className='shadow-lg border-0' 
                        />
                        <FormText>
                            Example help text that remains unchanged.
                            <br />
                            <small>
                                <strong> {inputDate} </strong>
                            </small>
                        </FormText>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Button color='danger w-100' onClick={() => handleClick(inputDate)}>
                            Learn More!
                        </Button>
                    </FormGroup>
                </Row>
            </Col>

            <Col md={6}>
                <Row>
                    <h1>Result</h1>
                </Row>
                <Row>
                    <Result result={data} />
                </Row>
            </Col>
        </>
    )
}

export default Home;
