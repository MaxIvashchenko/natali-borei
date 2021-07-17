import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function SocialLink({ title, link }) {
    const cls = `fab fa-${title} ${title}-bg`;
    const renderTooltip = (props) => {
        return (
            <Tooltip  {...props} id="tooltip-top"             >
                {title}
            </Tooltip>
        );
    }
    return (

        <OverlayTrigger
            placement="bottom"
            delay={{ show: 150, hide: 400 }}
            overlay={renderTooltip}
        >
            <a title={title} href={link}>
                <i className={cls}></i>
            </a>
        </OverlayTrigger>

    )
}