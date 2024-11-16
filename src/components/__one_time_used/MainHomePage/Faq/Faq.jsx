import HeadingIcon from "@/components/ui/HeadingIcon";
import { IoCaretDown } from "react-icons/io5";
import "./Faq.css";
import { headingIconText } from "@/utils/heading-text";

const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "What services does Prime Basement Renovations provide?",
    answer:
      "Prime Basement Renovations offers full-service basement renovation solutions in Toronto. Our services include design, planning, framing, insulation, drywall, flooring, lighting, plumbing, electrical work, custom finishes, and others. We transform your basement into a beautiful, functional space that aligns with your vision.",
  },
  {
    id: 2,
    question: "How long does a typical basement renovation take?",
    answer:
      "The duration of a basement renovation varies depending on the project's complexity, design choices, and any necessary permits. On average, it can take 4-8 weeks from start to finish. Our renovators provide a detailed timeline during the planning phase to keep you informed every step of the way.",
  },
  {
    id: 3,
    question: "Do I need permits for a basement renovation?",
    answer:
      "Permits are required for basement renovations, especially if the project involves structural changes, electrical work, or plumbing. Prime Basement Renovations handles permitting and ensuring all work complies with Toronto building codes and regulations.",
  },
  {
    id: 4,
    question: "Can you add a bathroom or kitchen to my basement?",
    answer:
      "Yes, we can add a bathroom, kitchenette, or even a full kitchen to your basement! Our team specializes in creating functional, code-compliant spaces that add convenience and value to your home.",
  },
  {
    id: 5,
    question: "How much does a basement renovation cost?",
    answer:
      "The cost of a basement renovation depends on the size of the space, the materials chosen, and the level of customization. We offer a free consultation and quote, allowing us to understand your goals and provide an estimate based on your budget.",
  },
  {
    id: 6,
    question: "Can I use my basement as a rental suite after renovation?",
    answer:
      "Yes, many homeowners in Toronto choose to convert their basements into rental suites for added income. We can help you design a functional, self-contained suite that meets all legal requirements for rental units, including separate entrances, egress windows, and fire safety standards.",
  },
  {
    id: 7,
    question: "What kind of finishes and materials can I choose from?",
    answer:
      "We offer various finishes and materials for flooring, walls, lighting, and cabinetry. In the design phase, our team will guide you through options that match your style, budget, and practical needs for a durable, high-quality basement.",
  },
  {
    id: 8,
    question: "How can I make my basement warmer and more energy-efficient?",
    answer:
      "Our team prioritizes insulation and moisture control to create a comfortable, energy-efficient basement. We use high-quality insulation, vapor barriers, and sealing techniques to improve temperature regulation and reduce energy costs.",
  },
  {
    id: 9,
    question: "What should I expect during the initial consultation?",
    answer:
      "During the initial consultation, we'll discuss your goals for the basement, review any design ideas you may have, and assess the current condition of the space. Our team will provide insights on layout possibilities, discuss materials, and outline a preliminary budget. This is an opportunity to answer any questions and start shaping your vision into a practical, achievable plan.",
  },
  {
    id: 10,
    question: "How can I make my basement renovation family-friendly?",
    answer:
      "We can design family-friendly basements with durable, easy-to-clean materials, ample lighting, and custom storage solutions. Whether you envision a playroom, a cozy lounge, or a media center, we'll help to create a functional, safe, and welcoming space for family activities.",
  },
  {
    id: 11,
    question: "Can you help with soundproofing for the basement?",
    answer:
      "Absolutely. Soundproofing is especially popular for basements used as home theaters, music rooms, or rental suites. We can incorporate soundproofing materials like acoustic insulation and special drywall to reduce noise transfer between floors and ensure a quieter, more private space.",
  },
  {
    id: 12,
    question: "What are the benefits of finishing my basement?",
    answer:
      "Finishing your basement increases your home's usable space, enhances property value, and creates a versatile area that can serve multiple purposes. From added storage and guest rooms to entertainment zones and rental income, a finished basement offers both immediate enjoyment and long-term benefits.",
  },
  {
    id: 13,
    question: "How does Prime Basement Renovations handle moisture and waterproofing?",
    answer:
      "Waterproofing is critical in basement renovations, and we address it early in the project. Our team assesses moisture concerns, applies waterproofing solutions, and uses materials that resist mold and mildew. Proper waterproofing ensures your basement stays dry, safe, and comfortable year-round.",
  },
  {
    id: 14,
    question: "Can I see examples of your previous work?",
    answer:
      "Yes, we're proud of our portfolio and happy to share examples of past projects. During the consultation, we can show you photos and testimonials and discuss ideas based on similar projects we've completed, giving you a clear sense of the quality and style of our work.",
  },
  {
    id: 15,
    question: "Do you offer eco-friendly or sustainable options?",
    answer:
      "We offer eco-friendly solutions, including energy-efficient lighting, recycled materials, low-VOC paints, and sustainable flooring options. Our team is happy to work with you to create an environmentally conscious space that aligns with your values and reduces your carbon footprint.",
  },
  {
    id: 16,
    question: "Can I customize every aspect of my basement renovation?",
    answer:
      "Absolutely. Every project with Prime Basement Renovations is tailored to clients's needs and tastes. From layout and color schemes to fixtures and finishes, we encourage customization to ensure your basement reflects your unique style and serves your needs.",
  },
  {
    id: 17,
    question: "Why should I choose Prime Basement Renovations for my project?",
    answer:
      "Prime Basement Renovations combines experience, quality craftsmanship, and a commitment to client satisfaction. We pride ourselves on our attention to detail, transparent communication, and dedication to turning your basement vision into reality. Our team handles each step, ensuring a smooth and enjoyable renovation experience from start to finish.",
  },
  {
    id: 18,
    question: "How will Prime Basement Renovations ensure the project stays on budget?",
    answer:
      "Our renovators understand the importance of sticking to your budget. During the planning phase, we work closely with you to develop a realistic budget that meets your goals. Throughout the renovation, we provide regular updates and monitor costs carefully. Our team makes sure that there are no unexpected expenses. If any adjustments are needed, we discuss them with you upfront to maintain transparency.",
  },
  {
    id: 19,
    question: "Can you help me design a home office or workspace in my basement?",
    answer:
      "Yes, creating functional home offices is one of our specialties. We can design a comfortable, quiet workspace with custom cabinetry, lighting, and soundproofing options. Whether a compact office nook or a full suite, we tailor the layout to maximize efficiency and meet your needs.",
  },
  {
    id: 20,
    question: "How do you handle unforeseen challenges during renovation?",
    answer:
      "Occasionally, unexpected issues like hidden structural concerns or plumbing complications arise in basement renovations. Our team is equipped to handle these challenges efficiently, minimize delays, and stay within budget whenever possible.",
  },
  {
    id: 21,
    question: "Are there specific basement styles or trends you recommend?",
    answer:
      "We recommend basement design, styles, or trends, including open-concept layouts, minimalist aesthetics, and industrial finishes. However, we prioritize your style and how you envision using the space. We can offer trend-inspired ideas or classic options to suit your tastes.",
  },
  {
    id: 22,
    question: "How do I keep my basement renovation organized?",
    answer:
      "We handle project organization for you, from timeline management to supplier coordination and daily progress reports. Our project management approach keeps every aspect on track, ensuring you feel informed and in control throughout the renovation.",
  },
  {
    id: 23,
    question: "What's involved in a basement inspection before renovation?",
    answer:
      "Before we begin any renovation, we conduct a comprehensive inspection to assess the basement's structure, foundation, moisture levels, and other key factors. This assessment helps us address pre-existing issues and develop a renovation plan that ensures long-term safety and quality.",
  },
  {
    id: 24,
    question: "Can you install custom cabinetry and storage solutions?",
    answer:
      "Yes, custom cabinetry and storage solutions are part of our expertise. We design built-in storage, shelving, and cabinets to fit your specific needs, ensuring a clutter-free and organized basement. Whether for a family room, laundry area, or home office, we create storage that maximizes space and blends with your overall design.",
  },
  {
    id: 25,
    question: "How will you protect my home during the renovation process?",
    answer:
      "We take steps to safeguard your home, using dust barriers, protective floor coverings, and careful planning to minimize disruption. Our team respectfully treats you keeping the work area organized and cleaning up daily to maintain a safe and tidy space.",
  },
  {
    id: 26,
    question: "Can I add more features to my renovation mid-project?",
    answer:
      "We understand that new ideas can come up during a project. If you wish to add features or make changes, simply let us know. We will assess the feasibility, provide an updated estimate, and discuss how it may affect the timeline. Our goal is to accommodate your vision while keeping the project on track.",
  },
  {
    id: 27,
    question: "Can I incorporate natural lighting into my basement design?",
    answer:
      "While basements typically have limited natural light, we can enhance their brightness by adding larger egress windows, window wells, or light wells where feasible. We also use reflective surfaces and strategically placed lighting to create a brighter, more inviting atmosphere. Our team will assess your basement's layout to determine the best ways to bring in natural light or achieve a similar effect with artificial lighting.",
  },
  {
    id: 28,
    question: "What types of flooring work best for basements?",
    answer:
      "We recommend moisture-resistant flooring options like vinyl, tile, or engineered hardwood for basements. These materials are durable and can support the high humidity often found in basements. We'll help you choose a flooring option that complements your style while offering functionality and long-lasting quality.",
  },
  {
    id: 29,
    question: "How do you handle electrical and plumbing work in basement renovations?",
    answer:
      "Our team includes licensed professionals for electrical and plumbing installations. We ensure all work meets safety codes and is integrated seamlessly into your design. Whether you need new wiring, recessed lighting, a bathroom, or a kitchenette, we take care of all technical aspects to provide a safe and efficient setup.",
  },
  {
    id: 30,
    question: "Can I install a home gym or fitness area in my basement?",
    answer:
      "We can design a customized home gym with flooring, mirrors, and storage to accommodate your fitness equipment and workout needs. We consider the layout and ventilation to create a comfortable exercise area that makes the most of your basement space.",
  },
  {
    id: 31,
    question: "Will my renovated basement require regular maintenance?",
    answer:
      "A properly renovated basement generally requires minimal upkeep and regular cleaning. We use durable, low-maintenance materials and apply effective waterproofing to reduce maintenance needs. Occasional inspections of plumbing, lighting, and HVAC systems are usually sufficient to keep your basement in excellent condition.",
  },
  {
    id: 32,
    question: "How do I maximize storage in my basement renovation?",
    answer:
      "Our team can incorporate creative storage solutions, including built-in cabinets, closets, shelving, and storage nooks. We assess your needs and tailor the design to maximize space efficiency for seasonal items, recreational gear, or household storage.",
  },
  
];

const Faq = () => {
  return (
    <div className="bg_swimmingPool padding__top ">
      <section className="container">
        <div className="flex flex-col items-center">
          <HeadingIcon text={headingIconText.faq__IconText} />

          <div>
            <h2 className="ttext-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
            Frequently Asked Questions of Basement Renovation 
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
