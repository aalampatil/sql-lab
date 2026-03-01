import { UseDataContext } from "../context/Context.jsx";

function AssignmentType() {
  const { assignmentType, setAssignmentType, setCurrent, challengeData } =
    UseDataContext();

  function handleClick(type) {
    setAssignmentType((prev) => (prev === type ? null : type));
    setCurrent(null); // reset selected challenge when switching type
  }

  const types = [...new Set(challengeData.map((item) => item.type))];

  const filteredChallenges = challengeData.filter(
    (item) => item.type === assignmentType,
  );

  return (
    <div className="flex flex-col flex-1 md:flex-col md:items-start md:justify-start">
      {types.map((type) => (
        <div className="w-full p-1" key={type}>
          <button
            className="cursor-pointer pb-1 hover:bg-gray-200 w-full text-left"
            onClick={() => handleClick(type)}
          >
            {type}
          </button>

          {assignmentType === type && (
            <ul className="list-none">
              {filteredChallenges.map((item) => (
                <li
                  key={item.challengeId}
                  onClick={() => setCurrent(item.challengeId)}
                  className="border ml-1 pb-1 cursor-pointer hover:bg-amber-100"
                >
                  {item.challengeTitle}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default AssignmentType;
