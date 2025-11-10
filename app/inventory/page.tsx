/* eslint-disable @typescript-eslint/no-explicit-any */
import InventoryClient from "@/components/InventoryClient";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function InventoryPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  const user = await getCurrentUser();
  const userId = user.id;

  const params = await searchParams;
  const q = (params.q ?? "").trim();
  const page = Math.max(1, Number(params.page ?? 1));
  const pageSize = 5;

  const where = {
    userId,
    ...(q ? { name: { contains: q, mode: "insensitive" as const } } : {}),
  };

  const [totalCount, rawItems] = await Promise.all([
    prisma.product.count({ where }),
    prisma.product.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
  ]);

  // Convert Decimal price to number for the client props
  const items = rawItems.map((p) => ({
    ...p,
    price: (p.price as any)?.toNumber ? (p.price as any).toNumber() : Number(p.price),
  }));

  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  return (
    <InventoryClient
      items={items}
      totalPages={totalPages}
      currentPage={page}
      query={q}
      pageSize={pageSize}
    />
  );
}