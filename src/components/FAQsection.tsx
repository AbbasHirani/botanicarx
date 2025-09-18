'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQsTwo() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What exactly is this gel?',
            answer: 'It’s a breakthrough agricultural solution made from 100% natural ingredients. Designed to protect plants from stress and failure, the gel helps crops grow stronger, survive harsh conditions, and deliver better yields.',
        },
        {
            id: 'item-2',
            question: 'Is it safe for all crops?',
            answer: 'Yes. The gel is being developed to be eco-friendly, residue-free, and compatible with a wide range of crops — from grains to vegetables to fruit farms.',
        },
        {
            id: 'item-3',
            question: 'How does this help farmers financially?',
            answer: 'By reducing crop loss, farmers see more consistent harvests, higher profits, and less disruption to cash flow. It’s not just about protecting plants — it’s about protecting livelihoods.',
        },
        {
            id: 'item-4',
            question: 'When will it be available?',
            answer: "The gel is currently under development and will be launched soon. You can join the waitlist today to be the first to know when it’s ready.",
        },
        {
            id: 'item-5',
            question: 'Is this product environmentally friendly?',
            answer: 'Absolutely. It’s made with natural, sustainable ingredients that are safe for soil, crops, and the environment — helping farmers without harming the planet.',
        },
        {
            id: 'item-6',
            question: 'How can I get early access?',
            answer: 'Simply sign up on this page. Early supporters will get exclusive updates, early trials, and launch offers.',
        },
    ]

    return (
        <section className="py-16 md:py-24  bg-black">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Simple, honest answers about our product, our mission, and what’s coming next.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-black font-semibold">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base text-black">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
        )
    }