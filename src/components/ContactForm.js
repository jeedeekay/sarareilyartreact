import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';

const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values: ', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

    return (
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            inquiry: '',
            message: ''
        }}
        onSubmit={handleSubmit}
        validate={validateContactForm}
        >
            <Form className='text-start'>
                <FormGroup row>
                    <Label htmlFor='firstName' md='3' lg='2'>
                        First Name
                    </Label>
                    <Col md='8' lg='9'>
                        <Field
                            name='firstName'
                            placeholder='First Name'
                            className='form-control'
                        />
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='lastName' md='3' lg='2'>
                        Last Name
                    </Label>
                    <Col md='8' lg='9'>
                        <Field
                            name='lastName'
                            placeholder='Last Name'
                            className='form-control'
                        />
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='3' lg='2'>
                        Email
                    </Label>
                    <Col md='8' lg='9'>
                        <Field
                            name='email'
                            placeholder='Email'
                            className='form-control'
                        />
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='inquiry' md='3' lg='2'>
                        Inquiry
                    </Label>
                    <Col md='8' lg='4'>
                        <Field
                            name='inquiry'
                            as='select'
                            className='form-control'
                        >
                            <option disabled value='' className='text-center'>--- select a reason ---</option>
                            <option>Commission</option>
                            <option>Event</option>
                            <option>Other</option>
                        </Field>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='message' md='3' lg='2'>
                        Message
                    </Label>
                    <Col md='8' lg='9'>
                        <Field
                            name='message'
                            as='textarea'
                            rows='10'
                            placeholder='Please leave your message here...'
                            className='form-control'
                        />
                        <ErrorMessage name='message'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md='2' className='offset-2'>
                        <Button type='submit' color='primary'>
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
}

export default ContactForm;