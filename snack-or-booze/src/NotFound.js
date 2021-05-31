import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function NotFound() {
    return (
        <section className="col-md-8">
            <Card>
                <CardBody className="text-center">
                    <CardTitle>
                        <h3 className="font-weight-bold">
                            Hmm.. Can't find what you're looking for!
                        </h3>
                    </CardTitle>
                </CardBody>
            </Card>
        </section>
    );
}

export default NotFound;