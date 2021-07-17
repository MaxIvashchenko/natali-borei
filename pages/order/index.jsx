import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
// import SocialLink from '../Common/SocialLink'
// import { socLink } from "../../infoData/contacts"

export default function OrderAndShipment() {
    const { t } = useTranslation('common');
    const [forCitizens, setforCitizens] = React.useState('forUkraine');

    return (
        <Container className="Order">
            <Row className="justify-content-md-center">
                <Col xs={9} md={9} >
                    <div>
                        <h3>{t('order.payment')}</h3>
                        <p>После оформления заказа товар бронируется для оплаты на 48 часов. Если оплата не поступила, заказ расформировывается.</p>
                        <p>Указывайте свой действующий e-mail, именно на этот адрес будут приходить сообщения о смене статусов Вашего заказа (получен, оплата поступила, заказ отправлен).</p>
                        <p>После того, как Вы оформили заказ, на указанный вами электронный адрес придёт автоматическое письмо-подтверждение с перечнем выбранных товаров и способами оплаты заказа.</p>
                        <p>Отправка украшений производится в течение двух рабочих дней после поступления полной предоплаты. </p>
                    </div>
                </Col>
                <Col md={9} className="line mt-4 mb-4" />
                <Col xs={9} md={9}>
                    <h3>{t('order.delivery')}</h3>
                    <p>1. Почтой России, ценной бандеролью первого класса. Время в пути по России - 7-9 дней. Стоимость доставки 250 рублей.</p>
                    <p>2. В Москву доставка производится курьерской службой, в течение 1-2 рабочих дней после оплаты заказа. Стоимость доставки 300 рублей.</p>
                    <p>3. Город Иваново: самовывоз из Бижу-ателье Марии Лепорской (г. Иваново). Бесплатно. Внимание! Обязателен предварительный звонок по тел. +79605064333</p>
                </Col>

                <Col xs={9} md={9} className="tabs">
                    <Nav activeKey={forCitizens} fill variant="tabs" onSelect={setforCitizens}>
                        <Nav.Item>
                            <Nav.Link eventKey="forUkraine">{t('order.forUkraine')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="forCIS">{t('order.forCIS')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="forEurope">{t('order.forEurope')}</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {forCitizens === "forUkraine" ? <p>for Ukraine</p> : <p>for Europe</p>}
                </Col>

            </Row>
        </Container>
    )
}
