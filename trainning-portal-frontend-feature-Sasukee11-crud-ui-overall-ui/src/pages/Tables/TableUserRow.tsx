type UserProps = {
  user: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    status: string;
  };
  onDragStart: (e: React.DragEvent<HTMLTableRowElement>, user: UserProps['user']) => void; // Pass the full user object
};

export default function TableUserRow({ user, onDragStart }: UserProps) {
  return (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      draggable
      onDragStart={(e) => onDragStart(e, user)} // Handle drag start with full user object
    >
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {user.username}
      </th>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">{user.password}</td>
      <td className="px-6 py-4">{user.confirmPassword}</td>
      <td className="px-6 py-4 text-500">{user.status}</td>
      <td className="px-6 py-4">
        <a
          href="#1"
          className="font-medium text-blue-600 mr-8 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
        <a
          href="#1"
          className="font-medium text-red-600 dark:text-blue-500 hover:underline"
        >
          Remove
        </a>
      </td>
    </tr>
  );
}
