import TableUserRow from "./TableUserRow";
import { useState } from "react";

const users = [
  {
    username: "john_doe",
    email: "john.doe@example.com",
    password: "password123",
    confirmPassword: "password123",
    status: "active",
  },
  {
    username: "jane_smith",
    email: "jane.smith@example.com",
    password: "securePass456",
    confirmPassword: "securePass456",
    status: "inactive",
  },
  {
    username: "mike_jones",
    email: "mike.jones@example.com",
    password: "passMike789",
    confirmPassword: "passMike789",
    status: "active",
  },
  {
    username: "emma_brown",
    email: "emma.brown@example.com",
    password: "EmmaPass234",
    confirmPassword: "EmmaPass234",
    status: "inactive",
  },
  {
    username: "lucas_wilson",
    email: "lucas.wilson@example.com",
    password: "lucasSecret567",
    confirmPassword: "lucasSecret567",
    status: "active",
  },
  {
    username: "olivia_green",
    email: "olivia.green@example.com",
    password: "Olivia123!",
    confirmPassword: "Olivia123!",
    status: "inactive",
  },
  {
    username: "noah_white",
    email: "noah.white@example.com",
    password: "NoahPass987",
    confirmPassword: "NoahPass987",
    status: "active",
  },
  {
    username: "sophia_black",
    email: "sophia.black@example.com",
    password: "Sophia456!",
    confirmPassword: "Sophia456!",
    status: "inactive",
  },
  {
    username: "liam_reed",
    email: "liam.reed@example.com",
    password: "LiamSecret321",
    confirmPassword: "LiamSecret321",
    status: "active",
  },
  {
    username: "isabella_clark",
    email: "isabella.clark@example.com",
    password: "Isabella1234",
    confirmPassword: "Isabella1234",
    status: "inactive",
  },
  {
    username: "elijah_hall",
    email: "elijah.hall@example.com",
    password: "ElijahPass4321",
    confirmPassword: "ElijahPass4321",
    status: "active",
  },
  {
    username: "mia_adams",
    email: "mia.adams@example.com",
    password: "MiaSecure!456",
    confirmPassword: "MiaSecure!456",
    status: "inactive",
  },
  {
    username: "oliver_evans",
    email: "oliver.evans@example.com",
    password: "Oliver789Pass",
    confirmPassword: "Oliver789Pass",
    status: "active",
  },
  {
    username: "ava_watson",
    email: "ava.watson@example.com",
    password: "AvaPass@2024",
    confirmPassword: "AvaPass@2024",
    status: "inactive",
  },
  {
    username: "james_morris",
    email: "james.morris@example.com",
    password: "James456Secure",
    confirmPassword: "James456Secure",
    status: "active",
  },
  {
    username: "charlotte_hughes",
    email: "charlotte.hughes@example.com",
    password: "Charlotte!789",
    confirmPassword: "Charlotte!789",
    status: "inactive",
  },
  {
    username: "benjamin_kelly",
    email: "benjamin.kelly@example.com",
    password: "BenPass1234",
    confirmPassword: "BenPass1234",
    status: "active",
  },
  {
    username: "abigail_cooper",
    email: "abigail.cooper@example.com",
    password: "AbigailPass!99",
    confirmPassword: "AbigailPass!99",
    status: "inactive",
  },
  {
    username: "lucas_harris",
    email: "lucas.harris@example.com",
    password: "Lucas12345",
    confirmPassword: "Lucas12345",
    status: "active",
  },
  {
    username: "scarlett_kim",
    email: "scarlett.kim@example.com",
    password: "ScarlettPass89",
    confirmPassword: "ScarlettPass89",
    status: "inactive",
  },
  {
    username: "jack_baker",
    email: "jack.baker@example.com",
    password: "JackSecret321",
    confirmPassword: "JackSecret321",
    status: "active",
  },
  {
    username: "grace_miller",
    email: "grace.miller@example.com",
    password: "Grace4567!",
    confirmPassword: "Grace4567!",
    status: "inactive",
  },
  {
    username: "henry_martinez",
    email: "henry.martinez@example.com",
    password: "HenryPass987",
    confirmPassword: "HenryPass987",
    status: "active",
  },
  {
    username: "lily_garcia",
    email: "lily.garcia@example.com",
    password: "LilySecure!123",
    confirmPassword: "LilySecure!123",
    status: "inactive",
  },
  {
    username: "alexander_sanders",
    email: "alexander.sanders@example.com",
    password: "AlexPass456!",
    confirmPassword: "AlexPass456!",
    status: "active",
  },
  {
    username: "chloe_brown",
    email: "chloe.brown@example.com",
    password: "ChloeSecret321",
    confirmPassword: "ChloeSecret321",
    status: "inactive",
  },
  {
    username: "matthew_hughes",
    email: "matthew.hughes@example.com",
    password: "Matthew123!",
    confirmPassword: "Matthew123!",
    status: "active",
  },
  {
    username: "sofia_thompson",
    email: "sofia.thompson@example.com",
    password: "SofiaPass234",
    confirmPassword: "SofiaPass234",
    status: "inactive",
  },
  {
    username: "daniel_james",
    email: "daniel.james@example.com",
    password: "Daniel4567!",
    confirmPassword: "Daniel4567!",
    status: "active",
  },
  {
    username: "zoe_roberts",
    email: "zoe.roberts@example.com",
    password: "ZoePass!123",
    confirmPassword: "ZoePass!123",
    status: "inactive",
  },
  {
    username: "sophia_gonzalez",
    email: "sophia.gonzalez@example.com",
    password: "Sophia789Pass",
    confirmPassword: "Sophia789Pass",
    status: "active",
  },
];

export default function TableUser() {
  const [droppedUsers, setDroppedUsers] = useState<typeof users>([]); // State to hold dropped user objects

  const handleDragStart = (e: React.DragEvent<HTMLTableRowElement>, user: typeof users[0]) => {
    e.dataTransfer.setData("application/json", JSON.stringify(user)); // Set the dragged user as JSON
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const userData = e.dataTransfer.getData("application/json"); // Get the dragged user data
    const user = JSON.parse(userData); // Parse the user data
    if (user && !droppedUsers.some((droppedUser) => droppedUser.username === user.username)) {
      setDroppedUsers((prev) => [...prev, user]); // Add the user to dropped users
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="pb-4 bg-white dark:bg-gray-900">
        {/* Search input omitted for brevity */}
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">UserName</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Password</th>
            <th scope="col" className="px-6 py-3">Confirm Password</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableUserRow
              key={user.username}
              user={user} // Pass the full user object
              onDragStart={handleDragStart} // Pass down the drag handler
            />
          ))}
        </tbody>
      </table>

      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="mt-4 p-4 border border-dashed border-gray-400 rounded-lg bg-gray-100"
        style={{ height: "150px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
      >
        <p className="text-gray-700">Drag here</p>
        <div className="mt-2" style={{display:'flex' , flexDirection:'column',}}>
          {droppedUsers.map((user) => (
            <div key={user.username} style={{width: '900px', display:'flex', flexDirection:'row'}} className="p-2 bg-white border border-gray-300 rounded-md shadow mb-2">
              <p><strong>{user.username}</strong></p>
              <p>{user.email}</p>
              <p>{user.password}</p>
              <p>{user.confirmPassword}</p>
              <p>{user.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
