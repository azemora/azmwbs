import React from 'react';
import Phase from './Phase';
import { arrowside, shuttle} from "../assets";
import '../index.css';
const phases = [
  {
    title: "Consultation and Ethical Approval",
    content: [
      'In our commitment to revolutionize genetic education, we initiated a collaborative journey by consulting with genetics teachers and experts. Their insights into the necessities of public schools formed the cornerstone of our project. The integrity of our approach was validated by the ethics committee at UTFPR, fortifying our foundation of trust and accountability.'
    ],
    icon: shuttle,
  },

  {
    title: 'Tested and Endorsed by genetic professionals',
    content: [
      "Tested and endorsed by genetic experts, our game has proven to be a valuable resource in demystifying genetics, engaging students' minds, and overcoming educational hurdles in under-resourced schools"
    ],
    icon: 'discovery'
  },

  {
    title: 'Discovery Phase for Project Scope & Outline',
    content: [
      'The project leads will meet with the client to determine the clear roadmap for the project.',
      'This information will shape the content for the later design scope.',
      'Marketing will create a storyboard and outline, design will provide concepts.'
    ],
    icon: 'discovery'
  },

  {
    title: 'Discovery Phase for Project Scope & Outline',
    content: [
      'The project leads will meet with the client to determine the clear roadmap for the project.',
      'This information will shape the content for the later design scope.',
      'Marketing will create a storyboard and outline, design will provide concepts.'
    ],
    icon: 'discovery'
  },
  {
    title: 'Discovery Phase for Project Scope & Outline',
    content: [
      'The project leads will meet with the client to determine the clear roadmap for the project.',
      'This information will shape the content for the later design scope.',
      'Marketing will create a storyboard and outline, design will provide concepts.'
    ],
    icon: 'discovery'
  },
  {
    title: 'Discovery Phase for Project Scope & Outline',
    content: [
      'The project leads will meet with the client to determine the clear roadmap for the project.',
      'This information will shape the content for the later design scope.',
      'Marketing will create a storyboard and outline, design will provide concepts.'
    ],
    icon: 'discovery'
  }

  // ... add the other phases here with their respective content and icons
];

function Roadmap() {
  return (
    <div className="roadmap-container">
      <div className="roadmap-title-container">
        <h1 className="roadmap-title flex-1 font-poppins font-semibold ss:text-[45px] text-[52px] text-white ss:leading-[40px] leading-[50px]">What we've done</h1>
        <h2 className="roadmap-subtitle ss:text-[30px]">Our Strategic Journey</h2>
      </div>
      <div className="phases-container">
        {phases.map((phase, index) => (
          <React.Fragment key={index}>
            <Phase title={phase.title} content={phase.content} icon={phase.icon} />
            {index < phases.length - 1 && <img src={arrowside} alt="Arrow Icon" className="arrow-icon" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;