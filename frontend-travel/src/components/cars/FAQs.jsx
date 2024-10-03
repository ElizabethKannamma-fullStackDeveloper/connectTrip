const FAQs = () => {
  return (
    <div className="pt-8 pb-10">
      <h1 className="text-center heading">frequently asked questions</h1>
      <div className="mt-5 flex flex-wrap gap-4">
        {Array.apply(null, { length: 2 }).map((_, i) => (
          <div
            key={i}
            className="p-4 flex-1 basis-[18rem] rounded-lg bg-slate-200 border dark:bg-card-dark dark:border-dark"
          >
            <h1 className="text-lg font-semibold">
              How is connect Trip different from other hotel booking websites
            </h1>
            <p className="mt-3">
             connect Trip stands out with hyper-personalized recommendations, seamless itinerary integration, and exclusive local insights. It emphasizes sustainability, offers dynamic pricing transparency, and provides enhanced 24/7 customer support. The platform fosters a community-driven environment with detailed reviews, rewards for engagement, and a focus on eco-friendly and off-the-beaten-path experiences. 
            </p>
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
