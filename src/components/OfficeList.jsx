import { useState } from "react";
import Button from "./Button";

const initialOffices = [
  { number: "OFF-001", name: "Main Administration", location: "Building A" },
  { number: "OFF-002", name: "Student Services", location: "Building B" },
  { number: "OFF-003", name: "Academic Affairs", location: "Building C" },
  { number: "OFF-004", name: "Library Office", location: "Main Library" },
  { number: "OFF-005", name: "Finance Office", location: "Building A" },
];

function OfficeList() {
  const [offices, setOffices] = useState(initialOffices);
  const [searchTerm, setSearchTerm] = useState("");

  const search = searchTerm.trim().toLowerCase();
  const filteredOffices = offices.filter(
    (office) =>
      office.name.toLowerCase().includes(search) ||
      office.number.toLowerCase().includes(search)
  );

  function handleDelete(office) {
    if (window.confirm(`Delete ${office.name} (${office.number})?`)) {
      setOffices((currentOffices) =>
        currentOffices.filter((item) => item.number !== office.number)
      );
    }
  }

  return (
    <div className="office-page">
      <h2>All Offices</h2>

      <div className="office-search">
        <label htmlFor="office-search">Search by name or office number:</label>
        <input
          id="office-search"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="e.g. Library or OFF-004"
        />
      </div>

      <table className="office-table">
        <thead>
          <tr>
            <th>Office Number</th>
            <th>Office Name</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredOffices.map((office) => (
            <tr key={office.number}>
              <td>{office.number}</td>
              <td>{office.name}</td>
              <td>{office.location}</td>
              <td>
                <div className="office-actions">
                  <Button
                    buttonlabel="Update"
                    className="update-button"
                    disabled
                  />
                  <Button
                    buttonlabel="Delete"
                    className="delete-button"
                    action={() => handleDelete(office)}
                  />
                </div>
              </td>
            </tr>
          ))}
          {filteredOffices.length === 0 && (
            <tr>
              <td colSpan="4">No offices found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OfficeList;
