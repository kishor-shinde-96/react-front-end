import { useState } from 'react';
import axios from '../axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SendEmailForm({ vendors }) {
    const [selectedVendors, setSelectedVendors] = useState([]);

    const handleChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedVendors([...selectedVendors, value]);
        } else {
            setSelectedVendors(selectedVendors.filter(vendor => vendor !== value));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/vendors/send-email',selectedVendors);
            alert('Emails sent successfully');
        } catch (error) {
            console.error('Error sending emails', error);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>                <Row>
                    {vendors.map(vendor => (
                        <Col key={vendor.id} md={6} className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label={vendor.name}
                                value={vendor.id}
                                onChange={handleChange}
                            />
                        </Col>
                    ))}
                </Row>
                <Button type="submit" variant="primary" className="mt-3">
                    Send Emails
                </Button>
            </Form>
        </Container>
    );
}
