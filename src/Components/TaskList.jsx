import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasklist, setTasklist] = useState([]);

  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "get",
    }).then((res) => {
      setTasklist(res?.data);
    });
  }, []);


  return (
    <div className="">
      <div>
        <input type="search" />
        <button type="submit">Add Task</button>
      </div>
      <table>
        <thead>
          <th>S.No</th>
          <th>UserID</th>
          <th>Title</th>
          <th>Body</th>
          <th>Action</th>
        </thead>
        {tasklist?.map((data, i) => (
          <tbody>
            <tr key={i}>
              <td>{data?.id}</td>
              <td>{data?.userId}</td>
              <td>{data?.title}</td>
              <td>{data?.body}</td>
              <td>
                <input type="checkbox" />
                <button type="submit">Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default TaskList;
