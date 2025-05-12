import { useRouter } from 'next/router';
import withAuth from '../../hook/withAuth';
import { useEffect, useState } from 'react';

const OrderDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [order, setOrder] = useState<{ id: number; description: string } | null>(null);

  useEffect(() => {
    if (id) {
      // Умовна заглушка замість реального API
      setOrder({
        id: Number(id),
        description: `Це детальна інформація про замовлення №${id}`,
      });
    }
  }, [id]);

  if (!order) return <p>Завантаження...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Замовлення #{order.id}</h1>
      <p>{order.description}</p>
    </div>
  );
};

export default withAuth(OrderDetails, 'private');
