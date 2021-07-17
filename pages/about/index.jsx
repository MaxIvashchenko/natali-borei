import React from 'react'
import { useTranslation } from "react-i18next";
import autorImg from './autor.jpg'
import materialsImg from './materials.jpg'
import { Animated } from 'react-animated-css'
import Image from 'next/image'

export default function AboutAuthor({ getSelected }) {
    const { t } = useTranslation('common');

    const blocks = {
        autor: {
            title: t("aboutAuthor.autor.title"),
            img: autorImg,
            text1: t("aboutAuthor.autor.text1"),
            text2: t("aboutAuthor.autor.text2"),
            text3: t("aboutAuthor.autor.text3"),
        },
        materials: {
            title: t("aboutAuthor.materials.title"),
            img: materialsImg,
            text1: t("aboutAuthor.materials.text1"),
            text2: t("aboutAuthor.materials.text2"),
            text3: t("aboutAuthor.materials.text3"),
        }
    }

    return (
        <Animated className="container About">


            <div className="row">
                <div className=" col-12">
                    <div className="row">
                        <div className="col-xl-7 textAbout">
                            <h2>{blocks.autor.title}</h2>
                            <p>{blocks.autor.text1}</p>
                            <p>{blocks.autor.text2}</p>
                            <p>{blocks.autor.text3}</p>
                        </div>
                        <div className="col-xl-5 imgAbout"><Image src={blocks.autor.img} alt="autor" />
                        </div>
                    </div>
                </div>
                <div className=" col-12">
                    <div className="row">
                        <div className="col-lg-5 imgAbout"><Image src={blocks.materials.img} alt="materials" />
                        </div>
                        <div className="col-lg-7 textAbout">
                            <h2>{blocks.materials.title}</h2>
                            <p>{blocks.materials.text1}</p>
                            <p>{blocks.materials.text2}</p>
                            <p>{blocks.materials.text3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Animated>
    )
}
