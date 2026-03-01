import { UseDataContext } from "../context/Context";

export default function Description() {
  const { assignmentType, current, challengeData } = UseDataContext();

  // Find challenge directly (flat structure now)
  const currentItem = challengeData.find(
    (challenge) =>
      challenge.type === assignmentType && challenge.challengeId === current,
  );

  if (!currentItem) {
    return <div className="p-4">Select a challenge</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2 border">
        {currentItem.challengeTitle}
      </h2>

      <p className="mb-2 border">{currentItem.description}</p>

      <div className="bg-gray-100 p-3 rounded-md mb-2 border">
        {currentItem.info}
      </div>

      <p className="font-medium border">{currentItem.task}</p>
    </div>
  );
}
