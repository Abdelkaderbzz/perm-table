import { Checkbox } from 'antd';
import { useState } from 'react';
import './perTable.scss';
import { permTableProps } from './permTable.types';

const PermTable = ({ actions, roles, rowSelectAll, rowSelectAllLabel, onRbacChange, specialChar }: permTableProps) => {
    const [checkedItems, setCheckedItems] = useState<string[]>([]);
    onRbacChange(checkedItems);
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, role: string, action: string) => {
        const isChecked = event.target.checked;
        const item = `${action}${specialChar}${role}`;

        if (isChecked) {
            setCheckedItems([...checkedItems, item]);
        } else {
            setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
        }
    };

    const handleRowCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, role: string) => {
        const isChecked = event.target.checked;
        const rowItems = actions.map((action) => `${action}${specialChar}${role}`);

        if (isChecked) {
            setCheckedItems([...checkedItems, ...rowItems]);
        } else {
            setCheckedItems(checkedItems.filter((checkedItem) => !rowItems.includes(checkedItem)));
        }
    };
    return (
        <div className="table-role-container">
            <table className="table-role">
                <thead>
                    <tr>
                        <th className="role-actions td-collection"></th>
                        {actions.map((action: string, index: number) => (
                            <th className="role-actions" key={index}>
                                {action}
                            </th>
                        ))}
                        {rowSelectAll && <th className="role-actions">{rowSelectAllLabel}</th>}
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role: string) => (
                        <tr key={role}>
                            <td className="role-container">
                                <p>{role}</p>
                            </td>
                            {actions.map((action) => (
                                <td key={action}>
                                    <Checkbox checked={checkedItems.includes(`${action}${specialChar}${role}`)} onChange={(event: any) => handleCheckboxChange(event, role, action)} />
                                </td>
                            ))}
                            {rowSelectAll && (
                                <td>
                                    <Checkbox
                                        checked={actions.every((action) => checkedItems.includes(`${action}${specialChar}${role}`))}
                                        onChange={(event: any) => handleRowCheckboxChange(event, role)}
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
