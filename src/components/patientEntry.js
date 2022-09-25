export default function PatientEntry(props) {
  return (
    <table className="w-full text-left border border-gray-500 table-fixed px-8">
      <thead>
        <tr className="font-novaregular text-center">
          <th className="">Time</th>
          <th className="">Doctor</th>
          <th className="">Room</th>
          <th className="">Status</th>
        </tr>
        <tr className="text-center bg-gray-100">
          <td className=" py-2">10:00 AM</td>
          <td className=" py-2">Dr. Smith</td>
          <td className=" py-2">Room 1</td>
          <td className=" py-2">Checked In</td>
        </tr>
        <tr className="text-center bg-gray-200">
          <td className=" py-2">10:30 AM</td>
          <td className=" py-2">Dr. Smith</td>
          <td className=" py-2">Room 1</td>
          <td className=" py-2">Checked Out</td>
        </tr>
        <tr className="text-center bg-gray-100">
          <td className=" py-2">11:45 AM</td>
          <td className=" py-2">Dr. Smith</td>
          <td className=" py-2">Room 1</td>
          <td className=" py-2">Checked In</td>
        </tr>
      </thead>
    </table>
  );
}
