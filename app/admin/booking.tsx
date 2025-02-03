import prisma from "../lib/prisma";

export default async function AdminBookings() {
  const bookings = await prisma.books.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Booked Appointments</h1>
      <ul className="space-y-3">
        {bookings.map((booking) => (
          <li key={booking.id} className="border p-4 rounded shadow">
            <p><strong>{booking.firstname} {booking.lastname}</strong></p>
            <p>{booking.email} | {booking.phonenumber}</p>
            <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
            {booking.message && <p>Message: {booking.message}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
