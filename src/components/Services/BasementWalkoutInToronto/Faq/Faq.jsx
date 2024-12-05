import HeadingIcon from "@/components/ui/HeadingIcon";
import { IoCaretDown } from "react-icons/io5";
import "./Faq.css";
import { headingIconText } from "@/utils/heading-text";

const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "Is a basement walkout right for my home in Toronto?",
    answer:
      "Not all homes are suitable for a basement walkout. A walkout requires specific terrain and grading, and it's often more feasible on sloped or uneven lots.",
  },
  {
    id: 2,
    question: "How long does a basement walkout take to complete?",
    answer:
      "Typically, a walkout project can take anywhere from 8 to 16 weeks, depending on the project's complexity, required permits, and site conditions. Prime Basement Renovations works efficiently to complete your project on time.",
  },
  {
    id: 3,
    question: "Do I need permits for a basement walkout in Toronto?",
    answer:
      "Yes, obtaining permits is required for most walkout projects in Toronto. Prime Basement Renovations handles all aspects of the permit process, ensuring that the work complies with local building codes and regulations.",
  },
  {
    id: 4,
    question: "How do you prevent water issues in a basement walkout?",
    answer:
      "Waterproofing is critical for basement walkouts, especially in Toronto's climate. Prime Basement Renovations ensures proper waterproofing techniques, including foundation sealing, drainage systems, and landscape grading to prevent water infiltration and flooding.",
  },
  {
    id: 5,
    question: "What is the best time of year to build a basement walkout?",
    answer:
      "While walkouts can be built year-round, the best time to begin construction is the spring or summer. This allows for easier excavation, grading, and construction without the risks of freezing temperatures or heavy rainfall that could delay the project.",
  },
  {
    id: 6,
    question: "How can I begin a basement walkout project?",
    answer:
      "To get started, contact Prime Basement Renovations for an initial consultation. We'll assess your property, discuss your needs and design preferences, and provide a detailed proposal. From there, we'll guide you through the process, including permits, design, construction, and finishing.",
  },
  {
    id: 7,
    question: "Can you help with the basement walkout design?",
    answer:
      "Prime Basement Renovations offers expert design services to help you visualize and plan the perfect walkout. Our team will work closely with you to understand your needs and preferences, creating a design that maximizes space, functionality, and aesthetic appeal.",
  },
  {
    id: 8,
    question: "Will the construction of a basement walkout cause major disruptions?",
    answer:
      "While there will be some disruption during the construction phase (such as noise and temporary access limitations), Prime Basement Renovations strives to minimize the impact on your daily life. We plan and manage the project efficiently to reduce the inconvenience and complete the work as smoothly as possible.",
  },
  {
    id: 9,
    question: "Do you handle both residential and commercial basement walkouts?",
    answer:
      "While our primary focus is residential projects, Prime Basement Renovations has experience with commercial basement walkouts too. We can guide you through the process and ensure the project meets your business needs.",
  },
  {
    id: 10,
    question: "How can I ensure that my basement walkout complies with zoning laws in Toronto?",
    answer:
      "Prime Basement Renovations has extensive experience navigating Toronto's zoning laws and regulations. We handle all required permits ensuring your walkout basement complies with local codes for setbacks, height restrictions, and drainage requirements.",
  },
  {
    id: 11,
    question: "What are the common challenges when building a basement walkout in Toronto?",
    answer:
      "Some common challenges include grading and soil conditions, permit and zoning restrictions, and the need for proper waterproofing. Prime Basement Renovations addresses these challenges with expert solutions, ensuring that your project runs smoothly from start to finish.",
  },
  {
    id: 12,
    question: "Can I add a walkout to an existing finished basement?",
    answer:
      "Yes, in some cases, you can add a walkout to an already-finished basement. However, this typically involves significant structural work, including excavation, foundation modification, and potentially reconfiguring existing walls. Prime Basement Renovations will assess your basement's structure to determine if this is feasible.",
  },
  {
    id: 13,
    question: "How do you handle landscaping around the walkout?",
    answer:
      "We provide landscaping services to help integrate your walkout basement seamlessly into the surrounding environment. Whether creating a patio, adding stairs, or enhancing drainage, we ensure that the outdoor space is functional and aesthetically pleasing.",
  },
  {
    id: 14,
    question: "What if I don't have enough slope on my property for a walkout?",
    answer:
      "It is possible, but additional work (like excavating and adjusting grading) will be required. Prime Basement Renovations will assess your property and advise on the best solutions to create a functional, attractive walkout design.",
  },
  {
    id: 15,
    question: "Can a walkout basement be customized to match my home's architectural style?",
    answer:
      "Absolutely! Prime Basement Renovations is known for creating customized walkout basements that blend seamlessly into your home. Whether your home is modern, traditional, or in between, we can tailor the design and finishes to complement your style.",
  },
  {
    id: 16,
    question: "Will my basement walkout be energy-efficient?",
    answer:
      "Yes, we take energy efficiency into account when designing and constructing your basement walkout. By maximizing natural light and incorporating proper insulation, we can help make your basement a more energy-efficient and comfortable living space.",
  },
  {
    id: 17,
    question: "How do you ensure my basement walkout is secure?",
    answer:
      "Security is a top priority for Prime Basement Renovations. We incorporate high-quality locks, reinforced doors, and secure windows to ensure your basement is functional and safe. Additionally, we can help with adding exterior lighting or security features, like cameras, to enhance the security of your new space.",
  },
  {
    id: 18,
    question: "Can you add a kitchen or bathroom to my basement walkout?",
    answer:
      "Many homeowners include a kitchen or bathroom in their basement walkout to create a fully self-contained living area, such as a rental unit or in-law suite. Prime Basement Renovations has extensive experience with plumbing, electrical, and designing functional kitchens and bathrooms for basement spaces.",
  },
  {
    id: 19,
    question: "Do I need to worry about building code compliance for my basement walkout?",
    answer:
      "Prime Basement Renovations handles all the technical details, including building code compliance. We ensure that your basement walkout is fully in line with local regulations related to structural integrity, egress (emergency exits), or electrical and plumbing standards. Our team handles permits, inspections, and approvals for you.",
  },
  {
    id: 20,
    question: "Will a basement walkout affect my home's insurance?",
    answer:
      "Typically, a walkout will not negatively impact your insurance, but it's always a good idea to notify your insurance provider about the renovation. Some changes to your home, like adding a rental unit, may require you to update your coverage. Prime Basement Renovations can provide all the information to make this process as smooth as possible.",
  },
  {
    id: 21,
    question: "Can you help me with the landscaping around my walkout basement?",
    answer:
      "Yes! In addition to construction, Prime Basement Renovations offers landscaping services to complement your basement walkout. Whether creating steps, installing retaining walls, or adding patio space, we'll help design an outdoor space that enhances your home's curb appeal and functionality.",
  },
  {
    id: 22,
    question: "Can a basement walkout be added in the winter months?",
    answer:
      "Winter can present some challenges, such as frozen ground or colder temperatures, but it is possible to build a basement walkout during this time. Prime Basement Renovations is experienced with winter construction and can work through colder weather while ensuring the project proceeds smoothly and on schedule.",
  },
  {
    id: 23,
    question: "Do I need a preexisting basement to add a walkout?",
    answer:
      "Yes, a pre-existing basement is typically required to create a walkout. However, if your basement is unfinished, Prime Basement Renovations can help design and complete the interior finish to complement the walkout structure. We can also assess whether structural changes are needed to accommodate the walkout.",
  },
  {
    id: 24,
    question: "Will I need to move out during the construction of my basement walkout?",
    answer:
      "In most cases, you will not need to move out during the construction, although the process may cause temporary disruptions. We'll work with you to schedule the work around your needs.",
  },
  {
    id: 25,
    question: "What happens if we encounter unforeseen issues during construction?",
    answer:
      "Prime Basement Renovations prides itself on transparent communication. If any unforeseen issues arise during construction—such as unexpected soil conditions, structural concerns, or permit issues—we will discuss them with you immediately and provide solutions without any potential cost adjustments.",
  },
  {
    id: 26,
    question: "Are walkout basements safe in case of emergencies?",
    answer:
      "Yes, walkout basements are designed to offer quick and safe egress in emergencies, such as fires or natural disasters. Walkout provides a second exit from the basement, a key safety feature required by building codes. Prime Basement Renovations ensures your basement walkout complies with emergency exit regulations to keep your family safe.",
  },
  {
    id: 27,
    question: "How do I maintain my basement walkout once it's completed?",
    answer:
      "Maintaining a basement walkout requires regular checks for waterproofing integrity, drainage systems, and landscaping around the entrance. We provide homeowners with post-renovation care tips and maintenance advice to ensure your walkout basement stays in top condition for years.",
  },
  {
    id: 28,
    question: "What if I want to expand my basement walkout?",
    answer:
      "If you plan to expand your walkout, Prime Basement Renovations can help you with future-proofing the design. We'll work with you to ensure that the layout, plumbing, and electrical systems can easily accommodate future modifications, should you add more space or features.",
  }
  
];

const Faq = () => {
  return (
    <div className="padding__top ">
      <section data-aos="fade-up" className="container">
        <div className="flex flex-col items-center">
          <HeadingIcon text={headingIconText.faq__IconText} />

          <div>
            <h2 className="ttext-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
            Frequently Asked Questions of Basement Walkout 
            </h2>
          </div>
        </div>
        <div className="pr-3 md:pr-0 pt-6">
          {QAPoolInstallationQuestionsNAns.map((ques, idx) => (
            <div key={idx}>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-black  py-3 px-5 5xl:py-[14px] 5xl:px-8 border-2">
                  <p className="text-white text-sm lg:text-sm xl:text-base 5xl:text-lg 5xl:leading-[22px] font-bold">
                    {ques.question}
                  </p>

                  <div className="white-icon">
                    <IoCaretDown className="white-icon" fill="white" />
                  </div>
                </summary>

                <p className="py-3 pl-2 pr-8 lg:py-4 lg:px-6 5xl:py-5 5xl:px-7 border-2 text-black text-sm lg:text-sm 5xl:text-base font-normal 5xl:leading-[30px]">
                  {ques.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;
