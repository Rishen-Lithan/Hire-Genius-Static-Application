import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Milestones = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const isInViewport = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      const milestoneElements = document.querySelectorAll('.milestone-item');
      milestoneElements.forEach((element, index) => {
        if (isInViewport(element as HTMLElement) && !visibleItems.includes(index)) {
          setVisibleItems(prev => [...prev, index]);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleItems]);

  const milestones = [
    {
      title: 'Project Proposal',
      description: 'A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.',
      marks: 5,
    },
    {
      title: 'Progress Presentation I',
      description: '50% completion status. Reveals gaps or inconsistencies in design requirements.',
      marks: 15,
    },
    {
      title: 'Research Paper',
      description: 'Contributes to knowledge and cites all referenced work appropriately.',
      marks: 15,
    },
    {
      title: 'Progress Presentation II',
      description: '80% completion status. Demonstration with thesis presentation.',
      marks: 15,
    },
    {
      title: 'Research Logbook',
      description: 'Project status through logbook, including status documents 1 & 2.',
      marks: 5,
    },
    {
      title: 'Final Presentation & Viva',
      description: 'Final Viva assesses individual contribution to the project.',
      marks: 20,
    },
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Milestone Page Header Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zM18 11c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zM6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
            </svg>
          </div>
          {/* Heading */}
          <h1 className="text-4xl font-bold mb-4">Project Milestones</h1>
          {/* Subheading */}
          <p className="text-lg md:text-xl">
            Track the important checkpoints and evaluation stages of our final year project.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-blue-700 relative inline-block">
              Milestones
              <div className="w-16 h-1 bg-blue-600 mt-2 mx-auto rounded-full"></div>
            </h1>
            <p className="text-md text-gray-600 mt-4">Explore the journey of our final year project</p>
          </div>

          <div className="relative">
            {/* Timeline vertical line */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 1.5 }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 z-0"
            ></motion.div>

            {milestones.map((item, index) => {
              const isLeft = index % 2 === 0;
              const visible = visibleItems.includes(index);

              return (
                <motion.div
                  key={index}
                  className={`milestone-item relative flex mb-20 items-center z-10 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <div className="w-1/2 px-6">
                    <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                      <div className="text-sm font-semibold text-white bg-blue-600 inline-block px-3 py-1 rounded-full mb-2">
                        MILESTONE {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      <p className="text-sm font-semibold text-blue-700">Marks Allocated: {item.marks}</p>
                    </div>
                  </div>

                  {/* Milestone dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white z-10"></div>

                  <div className="w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
