import Link from 'next/link';
import withAuth from '../hook/withAuth';

const Orders = () => {
  // Це умовні дані — можеш замінити на API або Redux
  const mockOrders = [
    { id: 1, title: 'Замовлення №1' },
    { id: 2, title: 'Замовлення №2' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Список замовлень</h1>
      <ul className="space-y-2">
        {mockOrders.map((order) => (
          <li key={order.id}>
            <Link href={`/order/${order.id}`} className="text-blue-600 underline">
              {order.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withAuth(Orders, 'private');
