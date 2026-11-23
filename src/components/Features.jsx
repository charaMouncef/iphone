import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cardsList } from "../constants";
gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const cards = cardsRef.current;
      if (!section || !cards) return;

      // Distance needed to bring the final card fully into view. The section's
      // horizontal padding must be excluded, otherwise the last card stays
      // clipped. Clamp to 0 so wide viewports can't produce a negative range.
      const getScrollAmount = () => {
        const styles = getComputedStyle(section);
        const padding =
          (parseFloat(styles.paddingLeft) || 0) +
          (parseFloat(styles.paddingRight) || 0);
        const visibleWidth = Math.max(1, section.clientWidth - padding);

        return Math.max(0, cards.scrollWidth - visibleWidth);
      };

      gsap.to(cards, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 10%",
          end: () => `+=${Math.max(getScrollAmount(), 1)}`,
          pin: true,
          anticipatePin: 1,
          scrub: 3,
          invalidateOnRefresh: true,
          // markers: true, // Debugging
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      className="w-full py-5 px-10 md:px-20 bg-[#f5f5f7]"
      ref={sectionRef}
    >
      <h2 className="text-xl md:text-4xl uppercase font-bold text-black mt-5">
        Why Apple is the best place <br /> to buy iPhone.
      </h2>

      <div className="w-max flex flex-nowrap mt-10 px-20" ref={cardsRef}>
        {cardsList.map((card) => (
          <div
            className="w-87.5 h-100 shrink-0 bg-white flex flex-col items-start rounded-xl mr-5 p-4"
            key={card.id}
          >
            <span className="text-lg md:text-xl font-semibold text-dark-100 text-center">
              {card.title}
            </span>
            <h3 className="w-full md:max-w-[80%] text-lg md:text-2xl font-semibold text-black">
              {card.description}
            </h3>
            <div className="flex-1"></div>
            <img
              className="w-full mx-auto"
              src={card.img}
              alt={card.alt}
              width={688}
              height={520}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
