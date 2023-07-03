import { auth } from "@clerk/nextjs";

interface IDashboardLayout {
  children: React.ReactNode;
  params: { storeId: string };
}

export default async function DashboardLayout({
  children,
  params,
}: IDashboardLayout) {
  const { userId } = auth();

  /* if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  } */

  return (
    <>
      Navbar
      {children}
    </>
  );
}
