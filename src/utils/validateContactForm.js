export const validateContactForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters.';
    } else if (values.firstName.length > 20) {
        errors.firstName = 'Must be 20 characters or less.';
    }
    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be at least 2 characters.';
    } else if (values.lastName.length > 30) {
        errors.firstName = 'Must be 30 characters or less.';
    }

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!values.email) {
        errors.email = 'Required';
    } else if (!values.email.match(emailRegex)) {
        errors.email = 'Invalid email';
    }

    if (!values.inquiry) {
        errors.inquiry = 'Invalid reason';
    }

    if (!values.message) {
        errors.message = 'Required';
    }

    return errors;
}