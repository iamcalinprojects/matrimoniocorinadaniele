import React from "react";

const sections = [
  {
    id: "locations",
    label: "Indirizzi",
    icon: "location_on",
  },
  {
    id: "gallery",
    label: "Foto",
    icon: "photo_camera",
  },
  {
    id: "gift",
    label: "Regalo",
    icon: "card_giftcard",
  },

  {
    id: "story",
    label: "Noi",
    icon: "favorite",
  },
];

const BottomNav = () => {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className='fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-stone-950/90 backdrop-blur-lg border-t border-stone-200/50 dark:border-stone-800/50 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden'>
      <ul className='flex justify-around items-center py-3 px-2 m-0 list-none'>
        {sections.map((section) => (
          <li key={section.id} className='flex-1'>
            <a
              href={`#${section.targetId || section.id}`}
              onClick={(e) => handleScroll(e, section.targetId || section.id)}
              className='flex flex-col items-center gap-1 text-stone-400 dark:text-stone-500 hover:text-primary dark:hover:text-[#a79ccb] transition-colors duration-200 no-underline'
            >
              <span
                className='material-symbols-outlined text-2xl'
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}
              >
                {section.icon}
              </span>
              <span className='text-[10px] font-label-md tracking-widest uppercase'>
                {section.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
