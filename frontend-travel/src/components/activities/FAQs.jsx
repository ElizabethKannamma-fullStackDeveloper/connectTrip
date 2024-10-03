import React from "react";

const FAQs = () => {
  const faqData = [
    {
      question: "What types of adventure activities do you offer?",
      answer:
        "We offer a wide range of adventure activities to suit all thrill levels. These include hiking, rock climbing, white-water rafting, skydiving, bungee jumping, zip-lining, and scuba diving. Our activities are designed to provide exciting experiences while ensuring safety and proper guidance from experienced instructors.",
    },
    {
      question: "Do I need prior experience for adventure activities?",
      answer:
        "Most of our adventure activities are suitable for beginners and don't require prior experience. Our expert guides provide thorough instructions and safety briefings before each activity. However, some advanced activities may have specific requirements. We recommend checking the details of each activity or contacting our support team for more information.",
    },
  ];

  return (
    <div className="pt-8 pb-10">
      <h1 className="text-center heading">frequently asked questions</h1>
      <div className="mt-5 flex flex-wrap gap-4">
        {faqData.map((faq, i) => (
          <div
            key={i}
            className="p-4 flex-1 basis-[18rem] rounded-lg bg-slate-200 border dark:bg-card-dark dark:border-dark"
          >
            <h1 className="text-lg font-semibold">{faq.question}</h1>
            <p className="mt-3">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="flex-center-center mt-6">
        <button className="btn btn-primary">more faqs</button>
      </div>
    </div>
  );
};

export default FAQs;
