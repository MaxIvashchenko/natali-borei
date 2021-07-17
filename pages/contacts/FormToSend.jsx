import React from 'react'
import { useTranslation } from "react-i18next";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export default function FormToSend() {
    const { t } = useTranslation('common');

    const initialValues = {
        topic: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        isSend: false
    }

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
            topic: Yup.string()
                .min(8, t('contacts.numberMore'))
                .max(50, t('contacts.lessChar'))
                .required(t('contacts.required')),
            name: Yup.string()
                .min(2, t('contacts.moreChar'))
                .max(50, t('contacts.lessChar'))
                .required(t('contacts.required')),
            email: Yup.string()
                .email(t('contacts.emailInvalid'))
                .required(t('contacts.required')),
            phone: Yup.string()
                .matches(phoneRegExp, t('contacts.phoneInvalid'))
                .min(8, t('contacts.numberMore'))
                .max(20, t('contacts.numberLess')),
            message: Yup.string()
                .min(9, t('contacts.messageMore'))
                .required(t('contacts.required')),
        }),
        onSubmit: values => {

            console.log(values)
        },
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Form.Group>
                    <Form.Label>{t('contacts.topic')}</Form.Label>
                    <Form.Control
                        id="topic"
                        type="text"
                        placeholder={t('contacts.topicPlaceholder')}
                        {...formik.getFieldProps('topic')}
                        isInvalid={formik.touched.topic && !!formik.errors.topic}
                        isValid={formik.touched.topic && !formik.errors.topic}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.topic}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>{t('contacts.name')}</Form.Label>
                    <Form.Control
                        id="name"
                        type="text"
                        placeholder={t('contacts.namePlaceholder')}
                        {...formik.getFieldProps('name')}
                        isInvalid={formik.touched.name && !!formik.errors.name}
                        isValid={formik.touched.name && !formik.errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>{t('contacts.email')}</Form.Label>
                    <Form.Control
                        aria-describedby="inputGroupPrepend"
                        id="email"
                        type="email"
                        placeholder={t('contacts.emailPlaceholder')}
                        {...formik.getFieldProps('email')}
                        isInvalid={formik.touched.email && !!formik.errors.email}
                        isValid={formik.touched.email && !formik.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                    </Form.Control.Feedback>
                </Form.Group>


                <Form.Group>
                    <Form.Label>{t('contacts.phone')}</Form.Label>
                    <Form.Control
                        id="phone"
                        type="text"
                        placeholder={t('contacts.phonePlaceholder')}
                        {...formik.getFieldProps('phone')}
                        isInvalid={formik.touched.phone && !!formik.errors.phone}
                        isValid={formik.touched.phone && !formik.errors.phone}
                    />
                    <Form.Control.Feedback type="invalid" >
                        {formik.errors.phone}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>{t('contacts.message')}</Form.Label>
                    <Form.Control
                        aria-describedby="inputGroupPrepend"
                        id="message"
                        as="textarea"
                        type="text"
                        placeholder={t('contacts.messagePlaceholder')}
                        {...formik.getFieldProps('message')}
                        isInvalid={formik.touched.message && !!formik.errors.message}
                        isValid={formik.touched.message && !formik.errors.message}
                    />
                    <Form.Control.Feedback type="invalid" >
                        {formik.errors.message}
                    </Form.Control.Feedback>
                </Form.Group>


                <Button className="btn" block type="submit">{t('contacts.submit')}</Button>
            </form>
        </>
    );

}