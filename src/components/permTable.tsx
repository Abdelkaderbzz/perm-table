import React from "react";
import { useState } from "react";
import { permTableProps } from "./permTable.types";

const PermTable = ({
  actions,
  roles,
  rowSelectAll,
  rowSelectAllLabel,
  onRbacChange,
  specialChar,
  permissions,
}: permTableProps) => {
  const [checkedItems, setCheckedItems] = useState<string[]>(permissions||[]);
  onRbacChange(checkedItems);
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    role: string,
    action: string,
  ) => {
    const isChecked = event.target.checked;
    const item = `${action}${specialChar}${role}`;

    if (isChecked) {
      setCheckedItems([...checkedItems, item]);
    } else {
      setCheckedItems(
        checkedItems.filter((checkedItem) => checkedItem !== item),
      );
    }
  };

  const handleRowCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    role: string,
  ) => {
    const isChecked = event.target.checked;
    const rowItems = actions.map((action) => `${action}${specialChar}${role}`);
    if (isChecked) {
      setCheckedItems([...checkedItems, ...rowItems]);
    } else {
      setCheckedItems(
        checkedItems.filter((checkedItem) => !rowItems.includes(checkedItem)),
      );
    }
  };

  return (
    <div
      className="table-role-container"
      style={{ width: "100%", overflowX: "scroll" }}
    >
      <table
        className="table-role"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th
              className="role-actions td-collection"
              style={{ textAlign: "left" }}
            ></th>
            {actions.map((action: string, index: number) => (
              <th
                className="role-actions"
                key={index}
                style={{
                  padding: "20px",
                  textAlign: "center",
                  borderBottom: "1px solid #ddd",
                  backgroundColor: "#f2f2f2",
                  fontWeight: "bold",
                }}
              >
                {action}
              </th>
            ))}
            {rowSelectAll && (
              <th
                className="role-actions"
                style={{
                  padding: "20px",
                  textAlign: "center",
                  borderBottom: "1px solid #ddd",
                  backgroundColor: "#f2f2f2",
                  fontWeight: "bold",
                }}
              >
                {rowSelectAllLabel}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {roles.map((role: string, rowIndex: number) => (
            <tr
              key={role}
              style={{
                backgroundColor: rowIndex % 2 === 0 ? "#f9f9f9" : "inherit",
              }}
            >
              <td
                className="role-container"
                style={{
                  textAlign: "left",
                  padding: "20px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <p>{role}</p>
              </td>
              {actions.map((action, actionIndex) => (
                <td
                  key={actionIndex}
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <input
                    type={'checkbox'}
                    checked={checkedItems.includes(
                      `${action}${specialChar}${role}`,
                    )}
                    onChange={(event: any) =>
                      handleCheckboxChange(event, role, action)
                    }
                    style={{
                      height: "23px",
                      width: "23px",
                      borderColor: "#605dce",
                    }}
                  />
                </td>
              ))}
              {rowSelectAll && (
                <td
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <input
                    type={'checkbox'}
                    checked={actions.every((action) =>
                      checkedItems.includes(`${action}${specialChar}${role}`),
                    )}
                    onChange={(event: any) =>
                      handleRowCheckboxChange(event, role)
                    }
                    style={{
                      height: "23px",
                      width: "23px",
                      borderColor: "#605dce",
                    }}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermTable;
