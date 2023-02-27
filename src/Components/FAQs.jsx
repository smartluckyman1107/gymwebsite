import { useState, useEffect } from "react"
import SectionHead from "./SectionHead"
import { FaQuestion } from "react-icons/fa"

import FAQ from "./FAQ"

const FAQs = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/faqs.json').then((response) => response.json().then((data, error) => {
            setFaqs(data);
            console.log(data);
        })).catch((error) => { console.log(error); })

    }, []);

    return (
        <section className="faqs">
            <div className="container faqs__container">
                <SectionHead icon={<FaQuestion />} title="FAQs" />
                <div className="faqs__wrapper">
                    {
                        faqs.map(({ id, question, answer }) => {
                            return <FAQ key={id} question={question} answer={answer} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default FAQs