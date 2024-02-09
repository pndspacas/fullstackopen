import Part from './Part';

const Content = ({ parts }) => {
  console.log(parts);
  return (
    <>
      {parts.map((part, i) => {
        return (
          <div key={i}>
            <Part name={part.name} exercise={part.exercises} />
          </div>
        );
      })}
    </>
  );
};

export default Content;
