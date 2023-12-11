import React from "react";

// https://youtu.be/koXRuZKsCJw?list=PLp12EvzGXRoRR6TVXiYOAWCFOLw0xmAKl&t=3391

import { employeesData } from "../../data";
import Swal from "sweetalert2";
import { useState } from "react";
import Header from "./Header";
import Edit from "./Edit";
import List from "./List";
import Add from "./Add";

const Dashboard = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setselectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);
    setselectedEmployee(employee);
    setIsEditing(true);
  };
  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you Sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, Cancel",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);
        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setEmployees(employees.filter((employee) => employee.id !== id));
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />

          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}

      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          employees={employees}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
          selectedEmployee={selectedEmployee}
        />
      )}
    </div>
  );
};

export default Dashboard;
