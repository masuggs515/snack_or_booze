import React, { useState } from "react";
import {
    Card, CardBody, CardTitle,
    Col, Form, Button,
    FormGroup, Label, Input
} from 'reactstrap';
import SnackOrBoozeApi from "./Api";
import { useHistory } from "react-router";


function NewItemForm({items, sets}) {
    let {snacks, drinks} = items;
    let {setSnacks, setDrinks} = sets;
    let history = useHistory();
    const INITIAL_FORM_DATA = {
        name: '',
        description: '',
        serve: '',
        recipe: '',
        select: 'snack'
    };

    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));

    };

    // Take item name and make all lower case and if spaces add dash in place of spaces
    const createId = name => {
        return name.replace(/\s+/g, '-').toLowerCase();
    }

    const handleSubmit = e => {
        e.preventDefault();

        // pass data to API
        SnackOrBoozeApi.addItem({...formData, id: createId(formData.name)});

        formData.select === "snack" ? setSnacks([...snacks, formData]) : 
        setDrinks([...drinks, formData]);
        
        // re-route server to type of item that was added
        history.push(`/${formData.select}s`)
    };

    return (
        <section className="col-md-8">
            <Card>
                <CardBody className="text-center">
                    <CardTitle>
                        <h3 className="font-weight-bold">
                            Add an Item to our Menu!
                        </h3>
                    </CardTitle>
                    <Form className="form text-left" onSubmit={handleSubmit}>
                        <Col>
                            <FormGroup>
                                <Label for="selectMenu">Adding a drink or snack?</Label>
                                <Input type="select" name="select" 
                                id="selectMenu" onChange={handleChange}>
                                    <option value='snack'>snack</option>
                                    <option value='drink'>drink</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for='itemName'>Item Name:</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="itemName"
                                    placeholder="Input snack or drink item..."
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="itemDescription">Description</Label>
                                <Input
                                    type="text"
                                    name="description"
                                    id="itemDescription"
                                    placeholder="Desribe menu item..."
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="itemServe">Serving</Label>
                                <Input
                                    type="text"
                                    name="serve"
                                    id="itemServe"
                                    placeholder="How item should be served..."
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="itemRecipe">Recipe</Label>
                                <Input
                                    type="text"
                                    name="recipe"
                                    id="itemRecipe"
                                    placeholder="Detailed recipe..."
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Button className='mx-4 btn-dark'>Submit</Button>
                    </Form>
                </CardBody>
            </Card>
        </section>
    );
}

export default NewItemForm;