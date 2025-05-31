const Title = ({ text, level = '1' }) => {
  const Heading = `h${level}`;
  return (
    <Heading
       className={`heading-level-${level} text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4`} 
    >
        {text}
    </Heading>
  );
};

export default Title;
