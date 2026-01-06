export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      <button
        className={activeTab === "students" ? "active" : ""}
        onClick={() => setActiveTab("students")}
      >
        Students
      </button>
      <button
        className={activeTab === "corporate" ? "active" : ""}
        onClick={() => setActiveTab("corporate")}
      >
        Corporates
      </button>
    </div>
  );
}
