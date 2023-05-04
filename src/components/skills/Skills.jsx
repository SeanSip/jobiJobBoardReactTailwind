import React, { useState } from 'react';
import Select from 'react-select';
// import { FaUser, FaEnvelope } from 'react-icons/fa';

const options = [
  // Technical
  { value: 'UI/UX', label: 'UI/UX' },
  { value: 'Firebase', label: 'Firebase' },
  { value: 'Figma', label: 'Figma' },
  { value: 'Javascript', label: 'Javascript' },
  { value: 'React', label: 'React' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Vue.js', label: 'Vue.js' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'Java', label: 'Java' },
  { value: 'Kotlin', label: 'Kotlin' },
  { value: 'Swift', label: 'Swift' },
  { value: 'Objective-C', label: 'Objective-C' },
  { value: 'C#', label: 'C#' },
  { value: 'PHP', label: 'PHP' },
  { value: 'Ruby', label: 'Ruby' },
  { value: 'Perl', label: 'Perl' },
  { value: 'Scala', label: 'Scala' },
  { value: 'Go', label: 'Go' },
  { value: 'Rust', label: 'Rust' },
  { value: 'TensorFlow', label: 'TensorFlow' },
  { value: 'PyTorch', label: 'PyTorch' },
  { value: 'C++', label: 'C++' },
  { value: 'C', label: 'C' },
  { value: 'Assembly', label: 'Assembly' },
  { value: 'Linux', label: 'Linux' },
  { value: 'Windows', label: 'Windows' },
  { value: 'macOS', label: 'macOS' },
  { value: 'Android', label: 'Android' },
  { value: 'iOS', label: 'iOS' },
  { value: 'Unity', label: 'Unity' },
  { value: 'Unreal Engine', label: 'Unreal Engine' },
  { value: 'Node.js', label: 'Node.js' },
  { value: 'MongoDB', label: 'MongoDB' },
  { value: 'SQL', label: 'SQL' },
  { value: 'Docker', label: 'Docker' },
  { value: 'Kubernetes', label: 'Kubernetes' },
  { value: 'AWS', label: 'AWS' },
  { value: 'Google Cloud Platform', label: 'Google Cloud Platform' },
  { value: 'Microsoft Azure', label: 'Microsoft Azure' },
  { value: 'HTML/CSS', label: 'HTML/CSS' },
  { value: 'Bootstrap', label: 'Bootstrap' },
  { value: 'jQuery', label: 'jQuery' },
  { value: 'Redux', label: 'Redux' },
  { value: 'RESTful API Design', label: 'RESTful API Design' },
  { value: 'Git', label: 'Git' },
  { value: 'Jenkins', label: 'Jenkins' },
  { value: 'Selenium', label: 'Selenium' },
  { value: 'Puppeteer', label: 'Puppeteer' },
  { value: 'Jira', label: 'Jira' },
  { value: 'Flutter', label: 'Flutter' },
  { value: 'SwiftUI', label: 'SwiftUI' },
  { value: 'Dart', label: 'Dart' },
  { value: 'Python', label: 'Python' },
  { value: 'Ruby on Rails', label: 'Ruby on Rails' },
  { value: 'Express.js', label: 'Express.js' },
  { value: 'Flask', label: 'Flask' },
  { value: 'PostgreSQL', label: 'PostgreSQL' },
  { value: 'MySQL', label: 'MySQL' },
  { value: 'Redis', label: 'Redis' },
  { value: 'Nginx', label: 'Nginx' },
  { value: 'Apache', label: 'Apache' },
  { value: 'GraphQL', label: 'GraphQL' },
  { value: 'Apollo GraphQL', label: 'Apollo GraphQL' },
  { value: 'RabbitMQ', label: 'RabbitMQ' },
  { value: 'Kafka', label: 'Kafka' },
  { value: 'Elasticsearch', label: 'Elasticsearch' },
  { value: 'Logstash', label: 'Logstash' },
  { value: 'Kibana', label: 'Kibana' },
  { value: 'Prometheus', label: 'Prometheus' },
  { value: 'Grafana', label: 'Grafana' },
  { value: 'Terraform', label: 'Terraform' },
  { value: 'Ansible', label: 'Ansible' },
  { value: 'Chef', label: 'Chef' },
  { value: 'Puppet', label: 'Puppet' },
  { value: 'Splunk', label: 'Splunk' },
  { value: 'Dynatrace', label: 'Dynatrace' },
  { value: 'New Relic', label: 'New Relic' },
  { value: 'Datadog', label: 'Datadog' },
  { value: 'Design', label: 'Design' },
  { value: 'Internet Srategy', label: 'Internet Srategy' },
  { value: 'Traditional Media', label: 'Traditional Media' },
  { value: 'Surface Analysis', label: 'Surface Analysis' },
  { value: 'Blender', label: 'Blender' },
  { value: 'SketchUp', label: 'SketchUp' },
  { value: 'Krita', label: 'Krita' },
  { value: 'Cinema 4D', label: 'Cinema 4D' },
  { value: 'CAD', label: 'CAD' },
  { value: 'Next.js', label: 'Next.js' },
  { value: 'Asana', label: 'Asana' },
  { value: 'Scrum', label: 'Scrum' },
  { value: 'Kanban', label: 'Kanban' },
  { value: 'Maya', label: 'Maya' },
  { value: 'CryEngine', label: 'CryEngine' },
  { value: 'Tableau', label: 'Tableau' },
  { value: 'Power BI', label: 'Power BI' },
  { value: 'Data visualization', label: 'Data visualization' },
  { value: 'Machine learning', label: 'Machine learning' },
  { value: 'Statistical modeling', label: 'Statistical modeling' },
  {
    value: 'Web accessibility standards',
    label: 'Web accessibility standards',
  },
  { value: 'WordPress', label: 'WordPress' },
  { value: 'Drupal', label: 'Drupal' },
  { value: 'Sanity.io', label: 'Sanity.io' },
  { value: 'Mailchimp', label: 'Mailchimp' },
  { value: 'Email Development', label: 'Email Development' },
  { value: 'Content Management Systems', label: 'Content Management Systems' },

  // Soft Skills
  { value: 'Communication', label: 'Communication' },
  { value: 'Leadership', label: 'Leadership' },
  { value: 'Teamwork', label: 'Teamwork' },
  { value: 'Adaptability', label: 'Adaptability' },
  { value: 'Problem-solving', label: 'Problem-solving' },
  { value: 'Creativity', label: 'Creativity' },
  { value: 'Emotional intelligence', label: 'Emotional intelligence' },
  { value: 'Conflict resolution', label: 'Conflict resolution' },
  { value: 'Critical thinking', label: 'Critical thinking' },
  { value: 'Decision making', label: 'Decision making' },
  { value: 'Presentation skills', label: 'Presentation skills' },
  { value: 'Customer service', label: 'Customer service' },
  { value: 'Attention to detail', label: 'Attention to detail' },
  { value: 'Learning agility', label: 'Learning agility' },
  { value: 'Collaboration', label: 'Collaboration' },
  { value: 'Empathy', label: 'Empathy' },
  { value: 'Innovation', label: 'Innovation' },
  { value: 'Negotiation', label: 'Negotiation' },
  { value: 'Persuasion', label: 'Persuasion' },
  { value: 'Planning', label: 'Planning' },
  { value: 'Prioritization', label: 'Prioritization' },
  { value: 'Project management', label: 'Project management' },
  { value: 'Agile', label: 'Agile' },
  { value: 'Research', label: 'Research' },
  { value: 'Stakeholder management', label: 'Stakeholder management' },
  { value: 'Storytelling', label: 'Storytelling' },
  { value: 'Strategic thinking', label: 'Strategic thinking' },
  { value: 'Time management', label: 'Time management' },
  { value: 'Training and development', label: 'Training and development' },
];

const customStyles = {
  control: provided => ({
    ...provided,
    borderRadius: 5,
    marginTop: 8,
    padding: 8,
    borderColor: '#ccc',
    '&:hover': {
      borderColor: '#ccc',
    },
    cursor: 'pointer',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#f0f0f0'
      : state.isFocused
      ? '#D2F34C'
      : '#fff',
    color: '#333',
    '&:hover': {
      backgroundColor: state.isSelected ? '#f0f0f0' : '#D2F34C',
      color: '#333',
      cursor: 'pointer',
    },
    cursor: 'pointer',
  }),
  menu: provided => ({
    ...provided,

    border: '1px solid #ccc',
    borderRadius: 5,
    marginTop: '0px',
    zIndex: 2,
    cursor: 'pointer',
  }),
  multiValue: provided => ({
    ...provided,
    backgroundColor: '#D2F34C',
    borderRadius: '4px',
    padding: '2px 0px 2px 2px',
    marginRight: '4px',
  }),
  multiValueLabel: provided => ({
    ...provided,
    color: '#333',
  }),
  multiValueRemove: provided => ({
    ...provided,
    color: '#999',
    '&:hover': {
      color: '#666',
    },
  }),
};

const Skills = ({ jobDetails, setJobDetails }) => {
  const handleOptionSelect = selectedOption => {
    setJobDetails(prevState => ({ ...prevState, skills: selectedOption }));
  };

  options.sort((a, b) => {
    const labelA = a.label.toUpperCase();
    const labelB = b.label.toUpperCase();

    if (labelA < labelB) {
      return -1;
    }
    if (labelA > labelB) {
      return 1;
    }
    return 0;
  });

  return (
    <label className="jobPostLabel">
      Skills
      <Select
        className="custom-select"
        classNamePrefix="custom-select"
        isMulti
        defaultValue={jobDetails.skills}
        onChange={handleOptionSelect}
        options={options}
        styles={customStyles}
      />
    </label>
  );
};

export default Skills;
