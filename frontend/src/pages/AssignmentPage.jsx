import SqlEditor from "../components/SqlEditor";
import AssignmentType from "../components/AssignmentType";
import Description from "../components/Description";

export function AssignmentPage() {
  return (
    <>
      <div className="flex h-screen w-full flex-col md:flex-row">
        {/* Sidebar */}
        <div className="flex md:block md:w-64 border m-1 p-2">
          <AssignmentType />
        </div>

        {/* Main */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2 p-2 relative">
          <div className="border p-4">
            <Description />
          </div>

          <div className="border p-4">
            <SqlEditor />
          </div>

          <div className="border p-4">Database Schema</div>

          <div className="border p-4">Result</div>
        </div>
      </div>
    </>
  );
}
