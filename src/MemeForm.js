import React, { useState } from "react";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import { v4 as uuid } from 'uuid';

const MemeForm = ({add}) => {
    const INITIAL_STATE = {
        imageUrl: '',
        topText: '',
        bottomText: ''
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormData(oldFormData => ({...oldFormData, [name] : value}))
    }

    const handleCreateMeme = async (e) => {
        e.preventDefault();
        if (formData.imageUrl && formData.topText && formData.bottomText) {
            const newMeme = {
                ...formData,
                id: uuid()
            }
            add(newMeme);
            setFormData(INITIAL_STATE);
        }
    }

    return (
        <div className="MemeForm">
            <Container>
                <Form>
                    <FormGroup>
                        <Input
                            type="text"
                            name="imageUrl"
                            onChange={handleChange}
                            placeholder="Image URL"
                            value={formData.imageUrl}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="text"
                            name="topText"
                            onChange={handleChange}
                            placeholder="Top Text"
                            value={formData.topText}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="text"
                            name="bottomText"
                            onChange={handleChange}
                            placeholder="Bottom Text"
                            value={formData.bottomText}
                        />
                    </FormGroup>
                </Form>
                <Button color="primary" onClick={handleCreateMeme}>Submit</Button>
            </Container>
        </div>
    )
};

export default MemeForm;